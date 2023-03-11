import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class StripeProductdetail {
  @Field()
  id: string;
  @Field()
  object: string;
  @Field()
  active: boolean;
  @Field({ nullable: true })
  description: string;
  @Field()
  created: number;
  @Field({ nullable: true })
  currency: string;
  @Field()
  livemode: boolean;
  // @Field()
  // metadata: {};
  @Field({ nullable: true })
  name: string;
  @Field()
  product: string;
  @Field()
  type: string;
  @Field({ nullable: true })
  unit_amount: number;
  @Field()
  unit_amount_decimal: string;
  @Field(() => [String], { nullable: true })
  images: [];
}
