import { BestProducts } from "../../../entity/BestProducts";
import { Arg, Int, Query, Resolver, UseMiddleware } from "type-graphql";
import { isAuth } from "../../user/middleware/isAuth";
import { isSubscribed } from "../../../Middleware/isSubscribed";

@Resolver()
export class getallProductResolver {
  @Query(() => [BestProducts])
  async getbestproducts(
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => String, { nullable: true }) cursor: string | null
  ) {
    const qb = await BestProducts.createQueryBuilder()
      .orderBy("salescore", "DESC")
      .take(limit);

    if (cursor) {
      qb.where("id <:cursor", { cursor: parseInt(cursor) });
    }
    return qb.getMany();
  }
}
