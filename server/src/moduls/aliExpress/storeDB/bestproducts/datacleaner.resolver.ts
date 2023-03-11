import { BestProducts } from "../../../../entity/BestProducts";
import { Mutation, Resolver } from "type-graphql";

@Resolver()
export class bestproductsdatacleanerResolver {
  @Mutation(() => Boolean)
  async bestproductsdatacleaner() {
    const ids = await BestProducts.find({});
    ids.map(async (p) => {
      if (p.sales_history != null) {
        p.saleshistorypresent = true;
        p.save();
      } else {
        await BestProducts.createQueryBuilder()
          .delete()
          .where({ product_id: p.product_id })
          .execute();
        console.log("delted Product  " + p.product_id);
      }
      if (p.discount === null) {
        p.discount = "1";
        p.save();
      }
      if (p.relevant_market_commission_rate === null) {
        p.relevant_market_commission_rate = "1";
        p.save();
      }
      if (p.salescore == null) {
        await BestProducts.createQueryBuilder()
          .delete()
          .where({ product_id: p.product_id })
          .execute();
        console.log("delted Product  " + p.product_id);
      }
    });
    return true;
  }
}
