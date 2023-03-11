import { Field, ObjectType } from "type-graphql";
@ObjectType()
class skuFetchSchema {
  @Field()
  isShowTypeColor: boolean;
  @Field()
  order: number;
  @Field()
  showType: string;
  @Field()
  showTypeColor: boolean;
  @Field()
  skuPropertyId: number;
  @Field()
  skuPropertyName: string;
}
@ObjectType()
class specFetchschema {
  @Field()
  attrName: string;
  @Field()
  attrNameId: string;
  @Field()
  attrValue: string;
  @Field()
  attrValueId: string;
}
@ObjectType()
export class feedbackFetchSchema {
  @Field()
  averageStar: string;
  @Field()
  averageStarRage: string;
  @Field()
  display: boolean;
  @Field()
  evarageStar: string;
  @Field()
  evarageStarRage: string;
  @Field()
  fiveStarNum: number;
  @Field()
  fiveStarRate: string;
  @Field()
  fourStarNum: number;
  @Field()
  fourStarRate: string;
  @Field()
  oneStarNum: number;
  @Field()
  oneStarRate: string;
  @Field()
  positiveRate: string;
  @Field()
  threeStarNum: number;
  @Field()
  threeStarRate: number;
  @Field()
  totalValidNum: number;
  @Field()
  trialReviewNum: number;
  @Field()
  twoStarNum: number;
  @Field()
  twoStarRate: string;
}
@ObjectType()
class BreadcrumSchyema {
  @Field()
  cateId: number;
  @Field()
  name: string;
  @Field()
  remark: string;
  @Field()
  url: string;
}
@ObjectType()
class metaDataShippingModule {
  @Field()
  currencyCode: string;

  @Field()
  hbaFreeShipping: boolean;
  @Field()
  hbaFreight: boolean;
  @Field()
  name: string;
  @Field()
  productId: number;
  @Field()
  regionCountryName: string;
  @Field()
  userCountryCode: string;
  @Field()
  userCountryName: string;
}
@ObjectType()
class metaDataStoreModule {
  @Field()
  companyId: number;
  @Field()
  countryCompleteName: string;
  @Field()
  detailPageUrl: string;
  @Field()
  esRetailOrConsignment: boolean;
  @Field()
  hasStore: boolean;
  @Field()
  name: string;
  @Field()
  openTime: string;
  @Field()
  openedYear: number;
  @Field()
  positiveNum: number;
  @Field()
  positiveRate: string;
  @Field()
  productId: number;
  @Field()
  sellerAdminSeq: number;
  @Field()
  sessionId: string;
  @Field()
  storeName: string;
  @Field()
  storeNum: number;
  @Field()
  storeURL: string;
  @Field()
  topBrandDescURL: string;
  @Field()
  topRatedSeller: boolean;
}
@ObjectType()
export class metaDataFectchSchema {
  @Field()
  shippingModule: metaDataShippingModule;
  @Field()
  storeModule: metaDataStoreModule;
}
@ObjectType()
export class ProductDetails {
  @Field()
  app_sale_price: number;
  @Field()
  app_sale_price_currency: string;
  @Field()
  commission_rate: string;
  @Field()
  discount: string;
  @Field()
  first_level_category_id: number;
  @Field()
  first_level_category_name: string;
  @Field()
  hot_product_commission_rate: string;
  @Field()
  lastest_volume: number;
  @Field()
  original_price: string;
  @Field()
  original_price_currency: string;
  @Field()
  product_detail_url: string;
  @Field()
  product_id: string;
  @Field()
  product_main_image_url: string;
  @Field()
  product_title: string;
  @Field()
  promotion_link: string;
  @Field()
  relevant_market_commission_rate: string;
  @Field()
  sale_price: string;
  @Field()
  sale_price_currency: string;
  @Field()
  second_level_category_id: number;
  @Field()
  second_level_category_name: string;
  @Field()
  shop_id: number;
  @Field()
  shop_url: string;
  @Field()
  target_app_sale_price: string;
  @Field()
  target_app_sale_price_currency: string;
  @Field()
  target_original_price: string;
  @Field()
  target_original_price_currency: string;
  @Field()
  target_sale_price: string;
  @Field()
  target_sale_price_currency: string;
  @Field()
  discount_rate: number;
  @Field()
  evaluate_rate: string;
  @Field((type) => [skuFetchSchema])
  skuProperties: skuFetchSchema[];
  @Field((type) => [specFetchschema])
  specs: specFetchschema[];

  @Field()
  feedBackRating: feedbackFetchSchema;
  @Field((type) => [BreadcrumSchyema])
  productCategoriesBreadcrumb: BreadcrumSchyema[];

  @Field()
  metadata: metaDataFectchSchema;
}
