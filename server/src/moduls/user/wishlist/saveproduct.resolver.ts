import { User } from "../../../entity/User";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { Mycontext } from "../../../../types/Mycontext";
import { aliProducts } from "../../../entity/Aliexpress";
import { Savedproducts } from "../../../entity/Savedproducts";

@Resolver()
export class saveproductResolver {
  @Mutation(() => Boolean, { nullable: true })
  async savefav(@Arg("id") id: number, @Ctx() { req }: Mycontext) {
    if (!req.session) {
      return null;
    }
    if (!req.session.userId) {
      return null;
    }
    const user = await User.findOneOrFail(req.session.userId);
    if (!user) {
      return null;
    }

    const details = await aliProducts.findOne(id);
    const already = await Savedproducts.findOne({
      where: { _id: details?._id, ownerid: req.session.userId },
    });
    if (already) {
      return false;
    }

    try {
      await Savedproducts.create({
        _id: details?._id,
        app_sale_price: details?.app_sale_price,
        averagesales: details?.averagesales,
        commission_rate: details?.commission_rate,
        discount: details?.discount,
        evaluate_rate: details?.evaluate_rate,
        feedBackRating: details?.feedBackRating,
        feedbacks: details?.feedbacks,
        first_level_category_id: details?.first_level_category_id,
        first_level_category_name: details?.first_level_category_name,
        hot_product_commission_rate: details?.hot_product_commission_rate,
        lastest_volume: details?.lastest_volume,
        metadata: details?.metadata,
        original_price: details?.original_price,
        price_trend: details?.price_trend,
        product_detail_url: details?.product_detail_url,
        product_id: details?.product_id,
        product_main_image_url: details?.product_main_image_url,
        product_title: details?.product_title,
        promotion_link: details?.promotion_link,
        relevant_market_commission_rate:
          details?.relevant_market_commission_rate,
        review_trend: details?.review_trend,
        sale_price: details?.sale_price,
        sale_price_currency: details?.sale_price_currency,
        sale_trend: details?.sale_trend,
        sales_history: details?.sales_history,
        salescore: details?.salescore,
        saleshistorypresent: details?.saleshistorypresent,
        second_level_category_id: details?.second_level_category_id,
        second_level_category_name: details?.second_level_category_name,
        shop_id: details?.shop_id,
        shop_url: details?.shop_url,
        target_app_sale_price: details?.target_app_sale_price,
        target_original_price: details?.target_original_price,
        target_original_price_currency: details?.target_original_price,
        target_sale_price: details?.target_sale_price,
        target_app_sale_price_currency: details?.target_sale_price_currency,
        target_sale_price_currency: details?.target_sale_price_currency,
        ownerid: req.session.userId,
      }).save();
      return true;
    } catch {
      return false;
    }
  }
}
