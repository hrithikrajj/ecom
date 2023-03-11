import { Savedproducts } from "../../../entity/Savedproducts";
import {
  Ctx,
  Field,
  InputType,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { Mycontext } from "../../../../types/Mycontext";
import { isAuth } from "./../middleware/isAuth";
@Resolver()
export class searchsaveProducts {
  @UseMiddleware(isAuth)
  @Query(() => [Savedproducts], { nullable: true })
  async searchsaveproduct(@Ctx() { req }: Mycontext) {
    if (!req.session.userId) {
      return null;
    }
    try {
      const product = await Savedproducts.find({
        where: { ownerid: req.session.userId },
      });
      return product;
    } catch {
      return null;
    }
  }
}
