import { User } from "../../../entity/User";
import { redis } from "../../../redis";
import { Arg, Mutation, Resolver } from "type-graphql";
import { confirmationPrefix } from "../../constants/redisPrefixes";

@Resolver()
export class ConfirmUserResolver {
  @Mutation(() => Boolean)
  async confirmUser(@Arg("token") token: string): Promise<Boolean> {
    const userId = await redis.get(confirmationPrefix + token);
    if (!userId) {
      return false;
    }
    await User.update({ id: parseInt(userId) }, { confirmed: true });
    await redis.del(confirmationPrefix + token);
    return true;
  }
}
