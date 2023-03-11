import { Arg, Query, Resolver, UseMiddleware } from "type-graphql";
import { isAuth } from "../../user/middleware/isAuth";
import { BestProducts } from "../../../entity/BestProducts";
import { isSubscribed } from "../../../Middleware/isSubscribed";
@Resolver()
export class productSearchResolver {
  @UseMiddleware(isAuth)
  @UseMiddleware(isSubscribed)
  @Query(() => BestProducts)
  async productsearch(@Arg("id") id: string) {
    const bestProduct = await BestProducts.findOne({ where: { id: id } });
    return bestProduct;
  }
}
