import { Field, Int, ObjectType } from "type-graphql";
import {
  feedbackFetchSchema,
  metaDataFectchSchema,
} from "../apifetchschemas/aliexpress/productDetialFetchSchema";
import { feedBackData } from "../apifetchschemas/aliexpress/Feedback";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

import { salesSchema } from "../apifetchschemas/aliexpress/sales";
@ObjectType()
@Entity()
export class aliProducts extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;
  @Field()
  @Column()
  _id: string;
  @Field()
  @Column({ nullable: true })
  first_level_category_id: string;
  @Column()
  @Field()
  first_level_category_name: string;
  @Column()
  @Field()
  product_detail_url: string;

  @Column({ type: "float" })
  @Field()
  product_id: number;
  @Column()
  @Field()
  product_main_image_url: string;
  @Column()
  @Field()
  product_title: string;
  @Column()
  @Field()
  second_level_category_id: number;
  @Column()
  @Field()
  second_level_category_name: string;
  @Column({ type: "float" })
  @Field()
  app_sale_price: number;
  @Column({ type: "float" })
  @Field()
  original_price: number;
  @Column({ type: "float" })
  @Field()
  sale_price: number;
  @Column()
  @Field()
  sale_price_currency: string;
  @Column({ type: "float" })
  @Field()
  evaluate_rate: number;
  @Column({ type: "float" })
  @Field()
  lastest_volume: number;
  @Column({ type: "float" })
  @Field()
  price_trend: number;
  @Column({ type: "float" })
  @Field()
  review_trend: number;
  @Column({ type: "float" })
  @Field()
  sale_trend: number;
  @Column("simple-json", { nullable: true })
  @Field((type) => [salesSchema], { nullable: true })
  sales_history: salesSchema[];
  @Column({ nullable: true })
  @Field({ nullable: true })
  commission_rate: string;
  @Field({ nullable: true })
  @Column({ nullable: true })
  discount: string;
  @Field({ nullable: true })
  @Column({ nullable: true })
  hot_product_commission_rate: string;
  @Field()
  promotion_link: string;
  @Column({ nullable: true })
  @Field({ nullable: true })
  relevant_market_commission_rate: string;
  @Column({ nullable: true })
  @Field()
  shop_id: number;
  @Column({ nullable: true })
  @Field()
  shop_url: string;
  @Column({ nullable: true })
  @Field()
  target_app_sale_price: string;
  @Column({ nullable: true })
  @Field()
  target_app_sale_price_currency: string;
  @Column({ nullable: true })
  @Field()
  target_original_price: string;
  @Column({ nullable: true })
  @Field()
  target_original_price_currency: string;
  @Column({ nullable: true })
  @Field()
  target_sale_price: string;
  @Column({ nullable: true })
  @Field()
  target_sale_price_currency: string;

  @Field({ nullable: true })
  @Column("simple-json", { nullable: true })
  feedBackRating: feedbackFetchSchema;

  @Field({ nullable: true })
  @Column("simple-json", { nullable: true })
  metadata: metaDataFectchSchema;
  @Field({ nullable: true })
  @Column("simple-json", { nullable: true })
  feedbacks: feedBackData;
  @Column({ nullable: true, type: "float" })
  @Field(() => Int || NaN, { nullable: true })
  averagesales: number;
  @Field({ nullable: true })
  @Column({ nullable: true })
  saleshistorypresent: Boolean;
  @Field()
  @Column({ nullable: true })
  salescore: number;
}
