import { Field, ID, ObjectType, Root } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { isEmailAlreadyused } from "../../src/moduls/user/register/isEmailAlreadyused";
import { Savedproducts } from "./Savedproducts";
@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  name(@Root() parent: User): string {
    return `${parent.firstName} ${
      parent.lastName !== null ? parent.lastName : ""
    }`;
  }

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  stripeId: string;

  @Column("text", { nullable: true })
  subscriptionId: string;

  @Field()
  @Column("text", { nullable: true })
  lastName: string;
  @Field()
  @Column({ default: false })
  subscribed: boolean;
  @Field()
  @Column("text", { unique: true })
  @isEmailAlreadyused()
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column("bool", { default: false })
  confirmed: boolean;
  @OneToMany(() => Savedproducts, (products) => products.owner)
  saveditems: Savedproducts[];
}
