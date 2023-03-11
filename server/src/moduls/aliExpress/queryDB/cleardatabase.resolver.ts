import { BestProducts } from "../../../entity/BestProducts";
import { Mutation, Resolver } from "type-graphql";
@Resolver()
export class cleardatabaseResolver {
  @Mutation(() => Boolean)
  async cleardatabase() {
    const qb = await BestProducts.find({});
    qb.map(async (p) => {
      if (p.sales_history == null || undefined) {
        await BestProducts.createQueryBuilder()

          .delete()
          .where({ product_id: p.product_id })
          .execute();
        console.log(
          "product deleted with id : " +
            p.product_id +
            "\n" +
            "Name is : " +
            p.product_title
        );
      }
    });

    return true;
  }
}
