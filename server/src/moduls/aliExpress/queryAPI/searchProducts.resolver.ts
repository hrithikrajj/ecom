import axios from "axios";
import {
  Arg,
  Field,
  Mutation,
  ObjectType,
  Resolver,
  UseMiddleware,
} from "type-graphql";

@ObjectType()
class docsElements {
  @Field()
  app_sale_price: number;
  @Field()
  app_sale_price_currency: string;
  @Field({ nullable: true })
  discount_rate: number;
  @Field()
  product_id: number;
  @Field()
  product_main_image_url: string;
  @Field()
  product_title: string;
  @Field()
  product_detail_url: string;
  @Field({ nullable: true })
  keywords: string;
}

@ObjectType()
export class searchSchema {
  @Field((type) => [docsElements!]!)
  docs: docsElements[];
}
//resover starts here
@Resolver()
export class searchProducts {
  @Mutation(() => searchSchema)
  async searchProducts(
    @Arg("productname") productname: string,
    @Arg("page") page: string
  ) {
    var options = {
      method: "GET",
      url: "https://magic-aliexpress1.p.rapidapi.com/api/bestSales/products",
      params: {
        page: page,
        searchName: productname,
      },
      headers: {
        "x-rapidapi-key": process.env.RAPID_MAGIC_API_KEY,
        "x-rapidapi-host": "magic-aliexpress1.p.rapidapi.com",
      },
      setTimeout: 10000,
    };

    const res = await axios.request(options as any);
    return res.data;
  }
}
