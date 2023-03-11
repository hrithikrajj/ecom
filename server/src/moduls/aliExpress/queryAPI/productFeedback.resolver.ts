import axios from "axios";
import {
  Arg,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { isAuth } from "../../user/middleware/isAuth";

@ObjectType()
class docsDetails {
  @Field()
  name: string;
  @Field()
  displayName: string;
  @Field()
  country: string;
  @Field()
  rating: number;
  @Field()
  date: string;
  @Field()
  content: string;
}
@ObjectType()
class feedBackdata {
  @Field((type) => [docsDetails])
  docs: docsDetails[];
}
@Resolver()
export class feedbackResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => feedBackdata)
  async getfeedback(@Arg("productid") productid: string) {
    var options = {
      method: "GET",
      url: `https://magic-aliexpress1.p.rapidapi.com/api/product/${productid}/feedbacks`,
      headers: {
        "x-rapidapi-key": "9b843e17f4msh5b077960ae94ec7p139ab7jsna4cb98007ce9",
        "x-rapidapi-host": "magic-aliexpress1.p.rapidapi.com",
      },
    };

    const res = await axios.request(options as any);
    return res.data;
  }
}
