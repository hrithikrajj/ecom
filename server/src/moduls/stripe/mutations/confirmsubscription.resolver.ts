import { User } from "../../../entity/User";
import { Ctx, Mutation, Resolver } from "type-graphql";
import { Mycontext } from "../../../../types/Mycontext";

@Resolver()
export class confirmsubscriptionResolver {
  @Mutation(() => Boolean)
  async confirmsubscription(@Ctx() { req }: Mycontext) {
    const user = await User.findOne({ where: { id: req.session.userId } });
    if (!user) {
      return false;
    }
    user.subscribed = true;
    user.save();
    return true;
  }
}
