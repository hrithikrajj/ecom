import { Field, ObjectType } from "type-graphql";

@ObjectType()
class docsmembers {
  @Field()
  _id: string;
  @Field()
  first_level_category_id: string;
  @Field()
  first_level_category_name: string;
  @Field()
  product_detail_url: string;

  @Field()
  product_id: number;
  @Field()
  product_main_image_url: string;
  @Field()
  product_title: string;
  @Field()
  promotion_link: string;
  @Field()
  second_level_category_id: number;
  @Field()
  second_level_category_name: string;
  @Field()
  app_sale_price: number;
  @Field()
  app_sale_price_currency: string;
  @Field()
  original_price: number;
  @Field()
  sale_price: number;
  @Field()
  sale_price_currency: string;
  @Field()
  evaluate_rate: number;
  @Field()
  lastest_volume: number;
  @Field()
  price_trend: number;
  @Field()
  review_trend: number;
  @Field()
  sale_trend: number;
}

@ObjectType()
export class bestProduct {
  @Field((type) => [docsmembers!]!)
  docs: docsmembers[];
}
