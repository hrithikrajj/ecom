import { Productcategories } from "../../../entity/Productcategories";

import axios from "axios";
import { Mutation, Resolver } from "type-graphql";

@Resolver()
export class getallCategoryResolver {
  @Mutation(() => Boolean)
  async storeCategories() {
    var options = {
      method: "GET",
      url: "https://magic-aliexpress1.p.rapidapi.com/api/v2/categories",
      headers: {
        "x-rapidapi-key": process.env.RAPID_MAGIC_API_KEY,
        "x-rapidapi-host": "magic-aliexpress1.p.rapidapi.com",
      },
    };

    await Productcategories.delete({});
    const res = await axios.request(options as any);
    const data: [Productcategories] = res.data;
    data.map(async (p) => {
      await Productcategories.create({
        _id: p._id,
        alie_category_id: p.alie_category_id,
        category_name: p.category_name,
        alie_category_name: p.alie_category_name,
        api_category_id: p.alie_category_id,
        modificationDate: p.modificationDate,
        provider: p.provider,
        url: p.url,
      }).save();
    });
    return true;
  }
}
