import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import argon2 from "argon2";
import { User } from "../../../entity/User";
import {RegisterInput} from "../register/Registerinput"
import { sendMail } from "../../utils/sendMail";
import { createconfirmationURL } from "../../utils/createconfirmationURL";
import { stripe } from "../../../stripe";

import { Mycontext } from "../../../../types/Mycontext";
import { UserResponse } from "../register/UserResponse";

@Resolver()
export class RegisterResolver {
  @Mutation(() => UserResponse)
  async register(
    @Arg("options") { email, firstName, lastName, password }: RegisterInput,
    @Ctx() { req }: Mycontext
  ): Promise<UserResponse | undefined> {
    const hasedPassword = await argon2.hash(password);
    const stripecus = await stripe.customers.create({
      email: email,

      name: firstName,
    });

    if (!stripecus) {
      return {
        errors: [
          {
            field: "stripe",
            message: "Payment gateway authentication failed",
          },
        ],
      };
    }

    if (!stripecus.id) {
      return {
        errors: [
          {
            field: "stripe",
            message: "Payment gateway authentication failed",
          },
        ],
      };
    }

    try {
      const user = await User.create({
        firstName,
        lastName,
        email: email.toLowerCase(),
        stripeId: stripecus.id,
        password: hasedPassword,
      }).save();
      await sendMail(email, await createconfirmationURL(user.id));
      req.session!.userId = user.id;
      req.session!.subscribed = user.subscribed;
      return { user };
    } catch (err) {
      if (err.code == "23505") {
        return {
          errors: [
            {
              field: "email",
              message: "email not unique",
            },
          ],
        };
      }
    }
  }
}
