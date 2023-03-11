import axios from "axios";
import { Mutation, Resolver } from "type-graphql";
import { aliProducts } from "../../../../entity/Aliexpress";
@Resolver()
export class storebestSalesResolver {
  @Mutation(() => Boolean)
  async storealiproductsales() {
    const details = await aliProducts.find({ where: {} });
    for (var p of details) {
      if (p.sales_history === null) {
        var options = {
          method: "GET",
          url: `https://magic-aliexpress1.p.rapidapi.com/api/bestSales/product/${p.product_id}/salesHistory`,
          params: { minDate: "2018-09-28", maxDate: "2021-08-15" },
          headers: {
            "x-rapidapi-key": process.env.RAPID_MAGIC_API_KEY,
            "x-rapidapi-host": "magic-aliexpress1.p.rapidapi.com",
          },
          timeout: 5000,
        };
        try {
          const res = await axios.request(options as any);
          console.log(res);
          if (res.data.length == 0) {
            console.log(
              "Sales history  not found for product : " + p.product_id
            );
          } else {
            console.log(res.data[0].sales);
            // const data: [salesSchema] = res.data[0].sales;

            const product = await aliProducts.findOne({
              where: { product_id: p.product_id },
            });

            product!.sales_history = res.data[0].sales;
            product!.save();
          }
        } catch (error) {
          console.log(error.message);
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
