import { BestProducts } from "../../../../entity/BestProducts";
import { Mutation, Resolver } from "type-graphql";
import { salesSchema } from "../../../../apifetchschemas/aliexpress/sales";
@Resolver()
export class storeaverageSalesResolver {
  @Mutation(() => Boolean)
  async storeaveragesales() {
    const details = await BestProducts.find({});
    for (var p of details) {
      const product = await BestProducts.findOne({
        where: { product_id: p.product_id },
      });

      product!.averagesales = +average(p.sales_history);

      console.log(product?.averagesales);
      product!.save();
    }
    return true;
  }
}

function average(data: salesSchema[]): number {
  let _data = [];
  for (let i in data) {
    const j = +i + 1;
    let point;
    if (i < (+data.length - 1).toString()) {
      point = data[j].lastest_volume - data[i].lastest_volume;

      _data.push(point);
    }
  }
  let sum: number = 0;
  for (let i in _data) {
    sum = sum + _data[i];
  }

  sum = sum / _data.length;
  return Math.ceil(sum);
}
