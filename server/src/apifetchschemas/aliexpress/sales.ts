import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class salesSchema {
  @Field()
  _id: string;

  @Field()
  lastest_volume: number;
  @Field()
  modificationDate: string;
}
