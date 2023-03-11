import { IsEmail, Length } from "class-validator";
import { PasswordInput } from "../../shared/passwordInput";
import { Field, InputType } from "type-graphql";
@InputType()
export class RegisterInput extends PasswordInput {
  @Field()
  @Length(1, 255)
  firstName: string;

  @Field()
  @Length(1, 255)
  lastName: string;

  @Field()
  @IsEmail()
  email: string;
}
