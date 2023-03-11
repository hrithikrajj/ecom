import { Field, ObjectType } from "type-graphql";

@ObjectType()
class feedbackdocs {
  @Field()
  name: string;
  @Field()
  displayName: string;
  @Field()
  country: string;
  @Field()
  rating: number;
  @Field()
  date: string;
  @Field()
  content: string;
}
@ObjectType()
export class feedBackData {
  @Field(() => [feedbackdocs])
  docs: feedbackdocs[];
}
