import { BestProducts } from "../../../../entity/BestProducts";
import { Resolver } from "type-graphql";
import { Mutation } from "type-graphql";
import { feedBackData } from "../../../../apifetchschemas/aliexpress/Feedback";
import axios from "axios";
@Resolver()
export class feedbackResolver {
  @Mutation(() => Boolean)
  async storeFeedback() {
    const details = await BestProducts.find({ where: {} });
    for (let p of details) {
      var options = {
        method: "GET",
        url: `https://magic-aliexpress1.p.rapidapi.com/api/product/${p.product_id}/feedbacks`,
        headers: {
          "x-rapidapi-key": process.env.RAPID_MAGIC_API_KEY,
          "x-rapidapi-host": "magic-aliexpress1.p.rapidapi.com",
        },
        setTimeout: 15000,
      };
      try {
        const res = await axios.request(options as any);
        const data: feedBackData = res.data;
        const product = await BestProducts.findOne({
          where: { product_id: p.product_id },
        });
        product!.feedbacks = data;
        product!.save();
      } catch (err) {
        if (err.message.includes("timeout")) {
          continue;
        } else {
          console.log(err.message);
          continue;
        }
      }
    }
    return true;
  }
}
