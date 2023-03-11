import { Field, ObjectType } from "type-graphql";

@ObjectType()
class clientSercet {
  @Field()
  client_secret: string;
  @Field()
  id!: string;
}
@ObjectType()
class paymentIntent {
  @Field()
  id: string;
  @Field()
  payment_intent: clientSercet;
}

@ObjectType()
export class subscriptionSchema {
  @Field()
  id: string;
  @Field()
  object: string;
  @Field()
  billing_cycle_anchor: number;
  @Field()
  cancel_at_period_end: boolean;
  @Field()
  collection_method: string;
  @Field()
  created: number;
  @Field()
  current_period_end: number;
  @Field()
  current_period_start: number;
  @Field()
  customer: string;
  @Field()
  latest_invoice: paymentIntent;
  @Field()
  start_date: number;
  @Field()
  status: string;
}
