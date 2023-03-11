import { salesSchema } from "../../../apifetchschemas/aliexpress/sales";
import { Arg, Query, Resolver } from "type-graphql";
import axios from "axios";
@Resolver()
export class saleshistory {
  @Query(() => [salesSchema], { nullable: true })
  async fetchsales(@Arg("productid") productid: string) {
    var options = {
      method: "GET",
      url: `https://magic-aliexpress1.p.rapidapi.com/api/bestSales/product/${productid}/salesHistory`,
      params: { minDate: "2019-09-28", maxDate: "2021-06-06" },
      headers: {
        "x-rapidapi-key": process.env.RAPID_MAGIC_API_KEY,
        "x-rapidapi-host": "magic-aliexpress1.p.rapidapi.com",
      },
      timeout: 5000,
    };
    try {
      const res = await axios.request(options as any);
      const data: [salesSchema] = res.data[0].sales;
      console.log(data);
      return data;
    } catch (error) {
      return null;
    }
  }
}
