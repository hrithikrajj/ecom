import { Mutation, Resolver } from "type-graphql";
import { storebestProductResolver } from "./storebestproducts.resolver";
import { storebestSalesResolver } from "./storeSalesdetails.resolver";
import { productdetailStoreResolver } from "./productdetails.resolver";
import { feedbackResolver } from "./storeFeedback.resolver";
@Resolver()
export class storeProductsResolver {
  @Mutation(() => Boolean)
  async storeProducts() {
    try {
      const storeProducts: storebestProductResolver =
        new storebestProductResolver();
      const result = await storeProducts.storebestProducts();
      if (!result) {
        return false;
      }
      const storeSales: storebestSalesResolver = new storebestSalesResolver();
      const _result = await storeSales.storeSalesHistory();
      if (!_result) {
        return false;
      }
      const storeDetails: productdetailStoreResolver =
        new productdetailStoreResolver();
      const __result = storeDetails.storeDetails();
      if (!__result) {
        return false;
      }
      const storefeedBack: feedbackResolver = new feedbackResolver();
      const ___result = await storefeedBack.storeFeedback();

      if (!___result) {
        return false;
      }
    } catch (error) {
      console.log(error.message);
      return false;
    }
    return true;
  }
}
