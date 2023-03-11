import { aliProducts } from "../../../../entity/Aliexpress";
import { Mutation, Resolver } from "type-graphql";

@Resolver()
export class alisalescoreresolver {
  @Mutation(() => Boolean)
  async alisalescore() {
    const products = await aliProducts.find({});
    products.map(async (p) => {
      p.salescore = Scoregeerator(
        p.evaluate_rate,
        p.feedBackRating!.fiveStarRate,
        p.feedBackRating!.fourStarRate,
        p.feedBackRating!.threeStarRate,
        p.feedBackRating!.twoStarRate,
        p.feedBackRating!.oneStarRate,
        p.averagesales,
        p.review_trend
      );
      p.save();
    });
    return true;
  }
}
function Scoregeerator(
  ER: number,
  fivestarnum: string,
  foustarnum: string,
  threestarnum: number,
  twostarnum: string,
  onestarnum: string,
  averagesale: number,
  reviewtrend: number
): number {
  let score =
    ER +
    parseInt(fivestarnum) +
    0.8 * parseInt(foustarnum) +
    0.6 * threestarnum +
    0.4 * parseInt(twostarnum) +
    0.2 * parseInt(onestarnum) +
    averagesale;
  if (+reviewtrend == 0) {
    score += 0;
  } else if (+reviewtrend > 0) {
    score += 100;
  } else {
    score -= 100;
  }
  return Math.ceil(score);
}
