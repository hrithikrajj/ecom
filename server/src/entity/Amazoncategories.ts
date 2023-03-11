import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class AmazonCategories extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field()
  _id: number;
  @Column()
  @Field()
  name: string;
  @Column()
  @Field()
  id: string;
}
