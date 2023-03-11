import { aliProducts } from "../../../entity/Aliexpress";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Like } from "typeorm";

@Resolver()
export class queryaliProductsresolver {
  @Mutation(() => [aliProducts], { nullable: true })
  async aliproducts(@Arg("name") name: string) {
    name = name.trim();
    const firstlevel = await aliProducts.find({
      where: { first_level_category_name: Like(`%${name.toLowerCase()}%`) },
    });
    if (firstlevel.length == 0) {
      const secondlevel = await aliProducts.find({
        where: { second_level_category_name: Like(`%${name.toLowerCase()}%`) },
      });
      if (secondlevel.length == 0) {
        const titlesearch = await aliProducts.find({
          where: { product_title: Like(`%${name.toLowerCase()}%`) },
        });
        if (titlesearch.length == 0) {
          return null;
        } else {
          return titlesearch;
        }
      } else {
        return secondlevel;
      }
    } else {
      return firstlevel;
    }
  }
}
