import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { Mycontext } from "../../../../types/Mycontext";
import { User } from "../../../entity/User";
import { OAuth2Client } from "google-auth-library";
import { stripe } from "../../../stripe";
@Resolver()
export class RegisterwithResolver {
  @Mutation(() => User)
  async registerwithGoogle(
    @Arg("token") token: string,
    @Ctx() { req }: Mycontext
  ): Promise<User | null> {
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const customer_details = ticket.getPayload();
    if (!customer_details) {
      return null;
    }
    try {
      const stripecus = await stripe.customers.create({
        email: customer_details.email,

        name: customer_details.name,
      });

      if (!stripecus) {
        return null;
      }

      if (!stripecus.id) {
        return null;
      }
      const user = await User.create({
        email: customer_details?.email?.toLowerCase(),
        firstName: customer_details.name,
        confirmed: true,
        stripeId: stripecus.id,
      }).save();
      req.session.userId = user.id;

      return user;
    } catch {
      return null;
    }
  }
}
