import { User } from "../../../entity/User";
import { Ctx, Query, Resolver, UseMiddleware } from "type-graphql";
import { Mycontext } from "types/Mycontext";
import { isAuth } from "./../middleware/isAuth";

@Resolver()
export class meResolver {
  @UseMiddleware(isAuth)
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: Mycontext) {
    if (!req.session.userId) {
      return null;
    }
    const user = await User.findOne({ where: { id: req.session.userId } });
    return user;
  }
}
