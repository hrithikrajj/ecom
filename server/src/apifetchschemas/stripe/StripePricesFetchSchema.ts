import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Prices {
  @Field()
  id: string;

  @Field()
  object: string;
  @Field()
  active: boolean;
  @Field()
  billing_scheme: string;
  @Field()
  created: number;
  @Field()
  currency: string;
  @Field()
  livemode: boolean;
  @Field({ nullable: true })
  lookup_key: string;
  @Field({ nullable: true })
  nickname: string;
  @Field()
  product: string;
  @Field({ nullable: true })
  tiers_mode: string;
  @Field({ nullable: true })
  transform_quantity: string;
  @Field()
  type: string;
  @Field()
  unit_amount: number;
  @Field()
  unit_amount_decimal: string;
}
