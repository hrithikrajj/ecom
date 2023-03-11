import { Mutation, Resolver } from "type-graphql";
import axios from "axios";
import { BestProducts } from "../../../../entity/BestProducts";

@Resolver()
export class storebestProductResolver {
  @Mutation(() => Boolean)
  async storebestProducts() {
    await BestProducts.delete({});
    for (let i = 1; i < 11; i++) {
      var options = {
        method: "GET",
        url: "https://magic-aliexpress1.p.rapidapi.com/api/bestSales/products",
        params: {
          page: i,
          priceMin: "1",
          sort: "SALE_TREND_ASC",
          searchName: "",
        },
        headers: {
          "x-rapidapi-key": process.env.RAPID_MAGIC_API_KEY,
          "x-rapidapi-host": "magic-aliexpress1.p.rapidapi.com",
        },
        setTimeout: 10000,
      };

      try {
        const res = await axios.request(options as any);
        console.log(res.data.docs);
        const data: [BestProducts] = res.data.docs;
        data.map(async (p) => {
          await BestProducts.create({
            _id: p._id,
            first_level_category_id: p.first_level_category_id,
            first_level_category_name: p.first_level_category_name,
            product_detail_url: p.product_detail_url,
            product_id: p.product_id,
            product_main_image_url: p.product_main_image_url,
            product_title: p.product_title,
            second_level_category_id: p.second_level_category_id,
            second_level_category_name: p.second_level_category_name,
            app_sale_price: p.app_sale_price,
            original_price: p.original_price,
            sale_price: p.sale_price,
            sale_price_currency: p.sale_price_currency,
            evaluate_rate: p.evaluate_rate,
            lastest_volume: p.lastest_volume,
            price_trend: p.price_trend,
            review_trend: p.price_trend,
            sale_trend: p.sale_price,
          }).save();
        });
      } catch (error) {
        if (error.message.includes("timeout")) {
          continue;
        } else {
          console.log(error.message);
          continue;
        }
      }
    }
    return true;
  }
}
