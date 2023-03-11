import { aliProducts } from "../../../../entity/Aliexpress";
import { Mutation, Resolver } from "type-graphql";
import axios from "axios";
import { ProductDetails } from "../../../../apifetchschemas/aliexpress/productDetialFetchSchema";
@Resolver()
export class productdetailStoreResolver {
  @Mutation(() => Boolean)
  async storealiproductdetails() {
    const details = await aliProducts.find({ where: {} });
    for (let p of details) {
      if (p.feedBackRating === null) {
        var __options = {
          method: "GET",
          url: `https://magic-aliexpress1.p.rapidapi.com/api/product/${p.product_id}`,
          headers: {
            "x-rapidapi-key": process.env.RAPID_MAGIC_API_KEY,
            "x-rapidapi-host": "magic-aliexpress1.p.rapidapi.com",
          },
        };
        try {
          const res = await axios.request(__options as any);
          const data: ProductDetails = res.data;
          const product = await aliProducts.findOne({
            where: { product_id: p.product_id },
          });
          product!.commission_rate = data.commission_rate;
          product!.discount = data.discount;
          product!.hot_product_commission_rate =
            data.hot_product_commission_rate;
          product!.promotion_link = data.promotion_link;
          product!.relevant_market_commission_rate =
            data.relevant_market_commission_rate;
          product!.shop_id = data.shop_id;
          product!.shop_url = data.shop_url;
          product!.target_app_sale_price = data.target_app_sale_price;
          product!.target_app_sale_price = data.target_app_sale_price;

          product!.target_original_price = data.target_original_price;
          product!.target_original_price_currency =
            data.target_original_price_currency;
          product!.target_sale_price = data.target_sale_price;
          product!.feedBackRating = data.feedBackRating;
          product!.metadata = data.metadata;
          product!.save();
        } catch (error) {
          if (error.message.includes("timeout")) {
            await aliProducts
              .createQueryBuilder()
              .delete()
              .where({ product_id: p.product_id })
              .execute();
            console.log("delted Product  " + p.product_id);
          } else {
            console.log(error.message);
            continue;
          }
        }
      }
    }
    return true;
  }
}
