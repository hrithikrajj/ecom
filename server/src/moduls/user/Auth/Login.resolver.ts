import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import argon2 from "argon2";
import { User } from "../../../entity/User";
import { Mycontext } from "../../../../types/Mycontext";
import { UserResponse } from "../register/UserResponse";
@Resolver()
export class LoginResolver {
  @Mutation(() => UserResponse)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() { req }: Mycontext
  ): Promise<UserResponse | undefined> {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return {
        errors: [
          {
            field: "email",
            message: "no user found",
          },
        ],
      };
    }
    const valid = await argon2.verify(user.password, password);
    if (!valid) {
      return {
        errors: [
          {
            field: "password",
            message: "password in wrong",
          },
        ],
      };
    }
    // if (!user.confirmed) {
    //   return null;
    // }
    req.session!.userId = user.id;
    req.session!.subscribed = user.subscribed;

    return { user };
  }
}
