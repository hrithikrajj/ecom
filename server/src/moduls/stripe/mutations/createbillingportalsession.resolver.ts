import { Ctx, Mutation, Resolver } from "type-graphql";
import { stripe } from "../../../stripe";
import { Mycontext } from "../../../../types/Mycontext";
import { User } from "../../../entity/User";
import { billingportal } from "../../../apifetchschemas/stripe/billingportal";
@Resolver()
export class billingsessionResolver {
  @Mutation(() => billingportal)
  async billingsession(@Ctx() { req }: Mycontext) {
    if (!req.session.userId || !req.session) {
      return null;
    }
    const user = await User.findOne(req.session.userId);
    if (!user) {
      return null;
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: user.stripeId,
      return_url: "http://localhost:3000/dashboard",
    });
    return session;
  }
}
