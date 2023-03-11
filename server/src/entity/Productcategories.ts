import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@ObjectType()
@Entity()
export class Productcategories extends BaseEntity {
  @Field()
  @PrimaryColumn()
  _id: string;
  @Field()
  @Column()
  modificationDate: string;
  @Field()
  @Column()
  category_name: string;
  @Field({ nullable: true })
  @Column({ nullable: true })
  api_category_id: number;
  @Field()
  @Column()
  provider: string;
  @Field({ nullable: true })
  @Column({ nullable: true })
  alie_category_id: number;
  @Field({ nullable: true })
  @Column({ nullable: true })
  alie_category_name: string;
  @Field({ nullable: true })
  @Column({ nullable: true })
  url: string;
}
