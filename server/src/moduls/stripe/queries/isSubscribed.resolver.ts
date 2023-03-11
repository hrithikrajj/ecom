import { User } from "../../../entity/User";
import { Ctx, Query, Resolver } from "type-graphql";
import { Mycontext } from "../../../../types/Mycontext";

@Resolver()
export class isSubscribedResolver {
  @Query(() => Boolean)
  async issubscribed(@Ctx() { req }: Mycontext) {
    if (!req.session.userId) {
      return false;
    }
    const user = await User.findOne({ where: { id: req.session.userId } });
    if (!user) {
      return false;
    }
    if (user.subscribed) {
      return true;
    }
    return false;
  }
}
