import { Ctx, Mutation, Resolver } from "type-graphql";
import { Mycontext } from "../../../../types/Mycontext";
@Resolver()
export class LogoutResolver {
  @Mutation(() => Boolean)
  async logout(@Ctx() ctx: Mycontext): Promise<Boolean> {
    return new Promise((res, rej) =>
      ctx.req.session!.destroy((err) => {
        if (err) {
          console.log(err);
          return rej(true);
        }
        ctx.res.clearCookie("qid");
        return res(true);
      })
    );
  }
}
