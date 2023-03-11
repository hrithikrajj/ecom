import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class billingportal {
  @Field()
  id: string;
  @Field()
  object: string;
  @Field()
  configuration: string;
  @Field()
  created: number;
  @Field()
  customer: string;
  @Field()
  livemode: boolean;
  @Field()
  return_url: string;
  @Field()
  url: string;
}
