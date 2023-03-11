import { Savedproducts } from "../../../entity/Savedproducts";
import { Ctx, Query, Resolver, UseMiddleware } from "type-graphql";
import { isAuth } from "../middleware/isAuth";
import { Mycontext } from "../../../../types/Mycontext";

@Resolver()
export class getsavedproductsResolver {
  @UseMiddleware(isAuth)
  @Query(() => [Savedproducts])
  async getallsaved(@Ctx() { req }: Mycontext) {
    const products = await Savedproducts.find({
      where: { ownerid: req.session.userId },
    });
    return products;
  }
}
