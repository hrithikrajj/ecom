import { User } from "../../../entity/User";
import { Ctx, Query, Resolver } from "type-graphql";
import { Mycontext } from "types/Mycontext";

@Resolver()
export class isloggedinResolver {
  @Query(() => Boolean)
  async isLoggedIn(@Ctx() { req }: Mycontext) {
    if (!req.session) {
      return false;
    }
    if (!req.session.userId) {
      return false;
    }
    const user = await User.find({ where: { id: req.session.userId } });
    if (!user) {
      return false;
    }
    return true;
  }
}
