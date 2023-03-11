import { Mutation, Resolver } from "type-graphql";
import axios from "axios";
import { AmazonCategories } from "../../../entity/Amazoncategories";
@Resolver()
export class amazoncategoriesReolver {
  @Mutation(() => Boolean)
  async storeamazoncategories() {
    var options = {
      method: "GET",
      url: "https://amazon24.p.rapidapi.com/api/category",
      headers: {
        "x-rapidapi-key": "9b843e17f4msh5b077960ae94ec7p139ab7jsna4cb98007ce9",
        "x-rapidapi-host": "amazon24.p.rapidapi.com",
      },
    };
    const categories = await axios.request(options as any);
    console.log(categories);
    return true;
  }
}
