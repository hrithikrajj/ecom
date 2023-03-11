import { MiddlewareFn } from "type-graphql/dist/interfaces/Middleware";
import { Mycontext } from "types/Mycontext";

export const isAuth: MiddlewareFn<Mycontext> = async ({ context }, next) => {
  if (!context.req.session.userId) {
    throw new Error("not authenticated");
  }
  return next();
};
