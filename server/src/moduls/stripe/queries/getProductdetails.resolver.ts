import { stripe } from "../../../stripe";
import { Arg, Mutation, Resolver } from "type-graphql";
import { StripeProductdetail } from "../../../apifetchschemas/stripe/StripeProductdetail";
@Resolver()
export class getPricedetailsResolver {
  @Mutation(() => StripeProductdetail)
  async getStripeProductDetails(@Arg("id") id: string) {
    const product = await stripe.products.retrieve(id);
    return product;
  }
}
