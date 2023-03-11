import axios from "axios";
import { Mutation, Resolver } from "type-graphql";
import { BestProducts } from "../../../../entity/BestProducts";
@Resolver()
export class storebestSalesResolver {
  @Mutation(() => Boolean)
  async storeSalesHistory() {
    const details = await BestProducts.find({ where: {} });
    for (var p of details) {
      // await waitforme(500);
      var options = {
        method: "GET",
        url: `https://magic-aliexpress1.p.rapidapi.com/api/bestSales/product/${p.product_id}/salesHistory`,
        params: { minDate: "2018-09-28", maxDate: "2021-08-09" },
        headers: {
          "x-rapidapi-key": process.env.RAPID_MAGIC_API_KEY,
          "x-rapidapi-host": "magic-aliexpress1.p.rapidapi.com",
        },
        timeout: 5000,
      };
      try {
        const res = await axios.request(options as any);
        if (!res.data[0].sales) {
          console.log("Sales history  not found for product : " + p.product_id);
        } else {
          console.log(res.data[0].sales);
          // const data: [salesSchema] = res.data[0].sales;

          const product = await BestProducts.findOne({
            where: { product_id: p.product_id },
          });

          product!.sales_history = res.data[0].sales;
          product!.save();
        }
      } catch (error) {
        if (error.message.includes("timeout")) {
          await BestProducts.createQueryBuilder()
            .delete()
            .where({ product_id: p.product_id })
            .execute();
          console.log("delted Product  " + p.product_id);
        } else {
          console.log(error);
          continue;
        }
      }
    }
    return true;
  }
}
function waitforme(ms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, ms);
  });
}
