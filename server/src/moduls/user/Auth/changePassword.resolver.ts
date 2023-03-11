import { User } from "../../../entity/User";
import { Arg, Mutation, Resolver } from "type-graphql";
import { changePasswordInput } from "../changepasswordInput/ChangepasswordInput";
import { forgotpasswordPrefix } from "../../constants/redisPrefixes";
import { redis } from "../../../redis";
import argon2 from "argon2";

@Resolver()
export class ChangePasswordResolver {
  @Mutation(() => User, { nullable: true })
  async changepassword(
    @Arg("data") { token, password }: changePasswordInput
  ): Promise<User | null> {
    const userId = await redis.get(forgotpasswordPrefix + token);
    if (!userId) {
      return null;
    }

    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return null;
    }
    await redis.del(forgotpasswordPrefix + token);
    user.password = await argon2.hash(password);
    await user.save();
    return user;
  }
}
