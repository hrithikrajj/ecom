import { aliProducts } from "../../../../entity/Aliexpress";
import { Mutation, Resolver } from "type-graphql";

@Resolver()
export class alidatacleanerResolver {
  @Mutation(() => Boolean)
  async alidatacleaner() {
    const ids = await aliProducts.find({});
    ids.map(async (p) => {
      // if (p.feedBackRating == null) {
      //   await aliProducts
      //     .createQueryBuilder()
      //     .delete()
      //     .where({ product_id: p.product_id })
      //     .execute();
      //   console.log(
      //     "delted Product  " + p.product_id + " due to feed back rating"
      //   );
      // }
      // if (p.sales_history != null) {
      //   p.saleshistorypresent = true;
      //   p.save();
      // } else {
      //   await aliProducts
      //     .createQueryBuilder()
      //     .delete()
      //     .where({ product_id: p.product_id })
      //     .execute();
      //   console.log(
      //     "delted Product  " + p.product_id + "  due to sales history not found"
      //   );
      // }
      // if (p.discount === null) {
      //   p.discount = "1";
      //   p.save();
      //   console.log(
      //     "Product  changed" + p.product_id + "  due to discount not found"
      //   );
      // }
      // if (p.relevant_market_commission_rate === null) {
      //   p.relevant_market_commission_rate = "1";
      //   p.save();
      //   console.log(
      //     "Product  changed" + p.product_id + "  due to conmission not found"
      //   );
      // }

      if (p.salescore == null) {
        await aliProducts
          .createQueryBuilder()
          .delete()
          .where({ product_id: p.product_id })
          .execute();
        console.log("delted Product  " + p.product_id);
      }
    });
    return true;
  }
}
