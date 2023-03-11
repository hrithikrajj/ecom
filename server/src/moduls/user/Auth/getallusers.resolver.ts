import { User } from "../../../entity/User";
import { Query, Resolver } from "type-graphql";

@Resolver()
export class getuserResolver {
  @Query(() => [User])
  async getusers() {
    return await User.find({ where: {} });
  }
}
