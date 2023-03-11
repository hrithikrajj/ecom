import { aliProducts } from "../../../../entity/Aliexpress";
import { Mutation, Resolver } from "type-graphql";

import axios from "axios";
import { Productcategories } from "../../../../entity/Productcategories";
@Resolver()
export class storealiproducts {
  @Mutation(() => Boolean)
  async storealiproducts() {
    aliProducts.delete({});

    const categories = await Productcategories.find({});
    for (var q of categories) {
      for (var h = 1; h < 3; h++) {
        var options = {
          method: "GET",
          url: "https://magic-aliexpress1.p.rapidapi.com/api/bestSales/products",
          params: {
            page: h,
            priceMin: "1",
            sort: "SALE_TREND_ASC",
            searchName: `${q.category_name}`,
          },
          headers: {
            "x-rapidapi-key": process.env.RAPID_MAGIC_API_KEY,
            "x-rapidapi-host": "magic-aliexpress1.p.rapidapi.com",
          },
          timeout: 10000,
        };
        try {
          const result = await axios.request(options as any);

          const product: [aliProducts] = result.data.docs;
          product.map(async (p) => {
            await aliProducts
              .create({
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
              })
              .save();
          });
        } catch (e) {
          console.log("error occured  : " + e.message);
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
