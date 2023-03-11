import axios from "axios";
import { ProductDetails } from "../../../apifetchschemas/aliexpress/productDetialFetchSchema";
import { Arg, Mutation, Resolver, UseMiddleware } from "type-graphql";

@Resolver()
export class productDetailsResolver {
  @Mutation(() => ProductDetails)
  async prductdetails(@Arg("productid") productid: string) {
    var options = {
      method: "GET",
      url: `https://magic-aliexpress1.p.rapidapi.com/api/product/${productid}`,
      headers: {
        "x-rapidapi-key": "9b843e17f4msh5b077960ae94ec7p139ab7jsna4cb98007ce9",
        "x-rapidapi-host": "magic-aliexpress1.p.rapidapi.com",
      },
    };

    const res = await axios.request(options as any);
    console.log(res.data);
    return res.data;
  }
}
