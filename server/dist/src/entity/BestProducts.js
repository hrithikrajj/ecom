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
exports.BestProducts = void 0;
const sales_1 = require("../aliExpressEntity/sales");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
let BestProducts = class BestProducts extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], BestProducts.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], BestProducts.prototype, "_id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], BestProducts.prototype, "first_level_category_id", void 0);
__decorate([
    typeorm_1.Column(),
    type_graphql_1.Field(),
    __metadata("design:type", String)
], BestProducts.prototype, "first_level_category_name", void 0);
__decorate([
    typeorm_1.Column(),
    type_graphql_1.Field(),
    __metadata("design:type", String)
], BestProducts.prototype, "product_detail_url", void 0);
__decorate([
    typeorm_1.PrimaryColumn({ type: "float" }),
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], BestProducts.prototype, "product_id", void 0);
__decorate([
    typeorm_1.Column(),
    type_graphql_1.Field(),
    __metadata("design:type", String)
], BestProducts.prototype, "product_main_image_url", void 0);
__decorate([
    typeorm_1.Column(),
    type_graphql_1.Field(),
    __metadata("design:type", String)
], BestProducts.prototype, "product_title", void 0);
__decorate([
    typeorm_1.Column(),
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], BestProducts.prototype, "second_level_category_id", void 0);
__decorate([
    typeorm_1.Column(),
    type_graphql_1.Field(),
    __metadata("design:type", String)
], BestProducts.prototype, "second_level_category_name", void 0);
__decorate([
    typeorm_1.Column({ type: "float" }),
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], BestProducts.prototype, "app_sale_price", void 0);
__decorate([
    typeorm_1.Column({ type: "float" }),
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], BestProducts.prototype, "original_price", void 0);
__decorate([
    typeorm_1.Column({ type: "float" }),
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], BestProducts.prototype, "sale_price", void 0);
__decorate([
    typeorm_1.Column(),
    type_graphql_1.Field(),
    __metadata("design:type", String)
], BestProducts.prototype, "sale_price_currency", void 0);
__decorate([
    typeorm_1.Column({ type: "float" }),
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], BestProducts.prototype, "evaluate_rate", void 0);
__decorate([
    typeorm_1.Column({ type: "float" }),
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], BestProducts.prototype, "lastest_volume", void 0);
__decorate([
    typeorm_1.Column({ type: "float" }),
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], BestProducts.prototype, "price_trend", void 0);
__decorate([
    typeorm_1.Column({ type: "float" }),
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], BestProducts.prototype, "review_trend", void 0);
__decorate([
    typeorm_1.Column({ type: "float" }),
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], BestProducts.prototype, "sale_trend", void 0);
__decorate([
    typeorm_1.Column("simple-json", { nullable: true }),
    type_graphql_1.Field((type) => [sales_1.salesSchema], { nullable: true }),
    __metadata("design:type", Array)
], BestProducts.prototype, "sales_history", void 0);
BestProducts = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], BestProducts);
exports.BestProducts = BestProducts;
//# sourceMappingURL=BestProducts.js.map