import { checkoutsession } from "../../../apifetchschemas/stripe/checkoutsession";
import { Ctx, Mutation, Resolver } from "type-graphql";
import { stripe } from "../../../stripe";
import { Mycontext } from "../../../../types/Mycontext";
import { User } from "../../../entity/User";
@Resolver()
export class checkoutsessionResolver {
  @Mutation(() => checkoutsession)
  async checkoutsession(@Ctx() { req }: Mycontext) {
    if (!req.session.userId || !req.session) {
      return null;
    }
    const user = await User.findOne(req.session.userId);
    if (!user) {
      return null;
    }
    const session = await stripe.checkout.sessions.create({
      success_url:
        // "http://localhost:3000/subscription-sucessfull?id={CHECKOUT_SESSION_ID}",
        "http://localhost:3000/dashboard/",
      cancel_url: "http://localhost:3000/subscription-failed",
      payment_method_types: ["card"],
      mode: "subscription",
      customer: user.stripeId,
      line_items: [
        {
          price: "price_1JQXwsSFYFMKkYSyj0DaFs1B",
          quantity: 1,
        },
      ],
    });
    return session;
  }
}
