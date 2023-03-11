import { User } from "../../../entity/User";
import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Mycontext } from "../../../../types/Mycontext";
import { isAuth } from "../../user/middleware/isAuth";
import { stripe } from "../../../stripe";
import { subscriptionSchema } from "../../../apifetchschemas/stripe/subscriptionFetchSchema";
@Resolver()
export class createSubsciptionResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => subscriptionSchema, { nullable: true })
  async createsubsctiption(
    @Arg("priceid") priceid: string,
    @Ctx() { req }: Mycontext
  ) {
    if (!req.session.userId || !req.session) {
      return null;
    }
    const user = await User.findOne(req.session.userId);
    if (!user) {
      return null;
    }

    const customer = await stripe.customers.create({
      email: user.email,
    });

    user.stripeId = customer.id;
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,

      items: [
        {
          price: priceid,
        },
      ],
      payment_behavior: "default_incomplete",
      expand: ["latest_invoice.payment_intent"],
    });
    user.subscriptionId = subscription.id;

    user.save();
    return subscription;
  }
}
