import { User } from "../../../entity/User";
import { Arg, Mutation, Resolver } from "type-graphql";
import { v4 } from "uuid";
import { sendMail } from "../../../../src/moduls/utils/sendMail";
import { redis } from "../../../redis";
import { forgotpasswordPrefix } from "../../constants/redisPrefixes";
@Resolver()
export class forgetPasswordResolver {
  @Mutation(() => Boolean)
  async forgtPassword(@Arg("email") email: string): Promise<Boolean> {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return true;
    }
    const token = v4();
    await redis.set(forgotpasswordPrefix + token, user.id, "ex", 60 * 60 * 24);
    await sendMail(email, `http://localhost:3000/change-password/${token}`);
    return true;
  }
}
