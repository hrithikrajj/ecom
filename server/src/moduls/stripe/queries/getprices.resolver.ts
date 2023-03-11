import { stripe } from "../../../stripe";
import { Query, Resolver } from "type-graphql";

import { Prices } from "../../../apifetchschemas/stripe/StripePricesFetchSchema";
@Resolver()
export class getPriceResolver {
  @Query(() => [Prices])
  async getprice() {
    const prices = await stripe.prices.list({
      limit: 2,
      active: true,
    });
    return prices.data;
  }
}
