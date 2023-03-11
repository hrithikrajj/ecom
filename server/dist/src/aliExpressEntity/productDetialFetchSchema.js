"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDetails = exports.feedbackFetchSchema = void 0;
const type_graphql_1 = require("type-graphql");
let skuFetchSchema = class skuFetchSchema {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], skuFetchSchema.prototype, "isShowTypeColor", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], skuFetchSchema.prototype, "order", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], skuFetchSchema.prototype, "showType", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], skuFetchSchema.prototype, "showTypeColor", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], skuFetchSchema.prototype, "skuPropertyId", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], skuFetchSchema.prototype, "skuPropertyName", void 0);
skuFetchSchema = __decorate([
    type_graphql_1.ObjectType()
], skuFetchSchema);
let specFetchschema = class specFetchschema {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], specFetchschema.prototype, "attrName", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], specFetchschema.prototype, "attrNameId", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], specFetchschema.prototype, "attrValue", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], specFetchschema.prototype, "attrValueId", void 0);
specFetchschema = __decorate([
    type_graphql_1.ObjectType()
], specFetchschema);
let feedbackFetchSchema = class feedbackFetchSchema {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], feedbackFetchSchema.prototype, "averageStar", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], feedbackFetchSchema.prototype, "averageStarRage", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], feedbackFetchSchema.prototype, "display", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], feedbackFetchSchema.prototype, "evarageStar", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], feedbackFetchSchema.prototype, "evarageStarRage", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], feedbackFetchSchema.prototype, "fiveStarNum", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], feedbackFetchSchema.prototype, "fiveStarRate", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], feedbackFetchSchema.prototype, "fourStarNum", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], feedbackFetchSchema.prototype, "fourStarRate", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], feedbackFetchSchema.prototype, "oneStarNum", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], feedbackFetchSchema.prototype, "oneStarRate", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], feedbackFetchSchema.prototype, "positiveRate", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], feedbackFetchSchema.prototype, "threeStarNum", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], feedbackFetchSchema.prototype, "threeStarRate", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], feedbackFetchSchema.prototype, "totalValidNum", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], feedbackFetchSchema.prototype, "trialReviewNum", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], feedbackFetchSchema.prototype, "twoStarNum", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], feedbackFetchSchema.prototype, "twoStarRate", void 0);
feedbackFetchSchema = __decorate([
    type_graphql_1.ObjectType()
], feedbackFetchSchema);
exports.feedbackFetchSchema = feedbackFetchSchema;
let BreadcrumSchyema = class BreadcrumSchyema {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], BreadcrumSchyema.prototype, "cateId", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], BreadcrumSchyema.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], BreadcrumSchyema.prototype, "remark", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], BreadcrumSchyema.prototype, "url", void 0);
BreadcrumSchyema = __decorate([
    type_graphql_1.ObjectType()
], BreadcrumSchyema);
let metaDataShippingModule = class metaDataShippingModule {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], metaDataShippingModule.prototype, "currencyCode", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], metaDataShippingModule.prototype, "hbaFreeShipping", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], metaDataShippingModule.prototype, "hbaFreight", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], metaDataShippingModule.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], metaDataShippingModule.prototype, "productId", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], metaDataShippingModule.prototype, "regionCountryName", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], metaDataShippingModule.prototype, "userCountryCode", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], metaDataShippingModule.prototype, "userCountryName", void 0);
metaDataShippingModule = __decorate([
    type_graphql_1.ObjectType()
], metaDataShippingModule);
let metaDataStoreModule = class metaDataStoreModule {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], metaDataStoreModule.prototype, "companyId", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], metaDataStoreModule.prototype, "countryCompleteName", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], metaDataStoreModule.prototype, "detailPageUrl", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], metaDataStoreModule.prototype, "esRetailOrConsignment", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], metaDataStoreModule.prototype, "hasStore", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], metaDataStoreModule.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], metaDataStoreModule.prototype, "openTime", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], metaDataStoreModule.prototype, "openedYear", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], metaDataStoreModule.prototype, "positiveNum", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], metaDataStoreModule.prototype, "positiveRate", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], metaDataStoreModule.prototype, "productId", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], metaDataStoreModule.prototype, "sellerAdminSeq", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], metaDataStoreModule.prototype, "sessionId", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], metaDataStoreModule.prototype, "storeName", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], metaDataStoreModule.prototype, "storeNum", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], metaDataStoreModule.prototype, "storeURL", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], metaDataStoreModule.prototype, "topBrandDescURL", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], metaDataStoreModule.prototype, "topRatedSeller", void 0);
metaDataStoreModule = __decorate([
    type_graphql_1.ObjectType()
], metaDataStoreModule);
let metaDataFectchSchema = class metaDataFectchSchema {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", metaDataShippingModule)
], metaDataFectchSchema.prototype, "shippingModule", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", metaDataStoreModule)
], metaDataFectchSchema.prototype, "storeModule", void 0);
metaDataFectchSchema = __decorate([
    type_graphql_1.ObjectType()
], metaDataFectchSchema);
let ProductDetails = class ProductDetails {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], ProductDetails.prototype, "app_sale_price", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "app_sale_price_currency", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "commission_rate", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "discount", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], ProductDetails.prototype, "first_level_category_id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "first_level_category_name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "hot_product_commission_rate", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], ProductDetails.prototype, "lastest_volume", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "original_price", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "original_price_currency", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "product_detail_url", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "product_id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "product_main_image_url", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "product_title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "promotion_link", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "relevant_market_commission_rate", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "sale_price", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "sale_price_currency", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], ProductDetails.prototype, "second_level_category_id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "second_level_category_name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], ProductDetails.prototype, "shop_id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "shop_url", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "target_app_sale_price", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "target_app_sale_price_currency", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "target_original_price", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "target_original_price_currency", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "target_sale_price", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "target_sale_price_currency", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], ProductDetails.prototype, "discount_rate", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductDetails.prototype, "evaluate_rate", void 0);
__decorate([
    type_graphql_1.Field((type) => [skuFetchSchema]),
    __metadata("design:type", Array)
], ProductDetails.prototype, "skuProperties", void 0);
__decorate([
    type_graphql_1.Field((type) => [specFetchschema]),
    __metadata("design:type", Array)
], ProductDetails.prototype, "specs", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", feedbackFetchSchema)
], ProductDetails.prototype, "feedBackRating", void 0);
__decorate([
    type_graphql_1.Field((type) => [BreadcrumSchyema]),
    __metadata("design:type", Array)
], ProductDetails.prototype, "productCategoriesBreadcrumb", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", metaDataFectchSchema)
], ProductDetails.prototype, "metadata", void 0);
ProductDetails = __decorate([
    type_graphql_1.ObjectType()
], ProductDetails);
exports.ProductDetails = ProductDetails;
//# sourceMappingURL=productDetialFetchSchema.js.map