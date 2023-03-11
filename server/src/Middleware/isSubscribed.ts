import { User } from "../entity/User";
import { MiddlewareFn } from "type-graphql/dist/interfaces/Middleware";
import { Mycontext } from "types/Mycontext";

export const isSubscribed: MiddlewareFn<Mycontext> = async (
  { context },
  next
) => {
  const user = await User.findOne({
    where: { id: context.req.session.userId },
  });
  if (!user) {
    throw new Error("Fuck off you are not autherized");
  }
  if (!user.subscribed) {
    throw new Error("Fuck off you are not autherized");
  }
  return next();
};
