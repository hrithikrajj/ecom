import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { User } from "../../../entity/User";
import { Mycontext } from "../../../../types/Mycontext";
import { OAuth2Client } from "google-auth-library";
@Resolver()
export class LoginwithGoogleResolver {
  @Mutation(() => Boolean, { nullable: true })
  async loginwithGoogle(
    @Arg("token") token: string,
    @Ctx() { req }: Mycontext
  ): Promise<Boolean | null> {
    console.log("login started");
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const customer_details = ticket.getPayload();
    if (!customer_details) {
      return null;
    }
    const user = await User.findOneOrFail({
      where: { email: customer_details.email },
    });
    if (!user) {
      return false;
    }

    req.session!.userId = user.id;

    return true;
  }
}
