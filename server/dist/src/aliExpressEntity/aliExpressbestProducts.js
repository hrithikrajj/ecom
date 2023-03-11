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
exports.bestProduct = void 0;
const type_graphql_1 = require("type-graphql");
let docsmembers = class docsmembers {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], docsmembers.prototype, "_id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], docsmembers.prototype, "first_level_category_id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], docsmembers.prototype, "first_level_category_name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], docsmembers.prototype, "product_detail_url", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], docsmembers.prototype, "product_id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], docsmembers.prototype, "product_main_image_url", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], docsmembers.prototype, "product_title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], docsmembers.prototype, "promotion_link", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], docsmembers.prototype, "second_level_category_id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], docsmembers.prototype, "second_level_category_name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], docsmembers.prototype, "app_sale_price", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], docsmembers.prototype, "app_sale_price_currency", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], docsmembers.prototype, "original_price", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], docsmembers.prototype, "sale_price", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], docsmembers.prototype, "sale_price_currency", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], docsmembers.prototype, "evaluate_rate", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], docsmembers.prototype, "lastest_volume", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], docsmembers.prototype, "price_trend", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], docsmembers.prototype, "review_trend", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], docsmembers.prototype, "sale_trend", void 0);
docsmembers = __decorate([
    type_graphql_1.ObjectType()
], docsmembers);
let bestProduct = class bestProduct {
};
__decorate([
    type_graphql_1.Field((type) => [docsmembers]),
    __metadata("design:type", Array)
], bestProduct.prototype, "docs", void 0);
bestProduct = __decorate([
    type_graphql_1.ObjectType()
], bestProduct);
exports.bestProduct = bestProduct;
//# sourceMappingURL=aliExpressbestProducts.js.map