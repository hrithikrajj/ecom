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
exports.Prices = void 0;
const type_graphql_1 = require("type-graphql");
let Prices = class Prices {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Prices.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Prices.prototype, "object", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], Prices.prototype, "active", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Prices.prototype, "billing_scheme", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], Prices.prototype, "created", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Prices.prototype, "currency", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], Prices.prototype, "livemode", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Prices.prototype, "lookup_key", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Prices.prototype, "nickname", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Prices.prototype, "product", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Prices.prototype, "tiers_mode", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Prices.prototype, "transform_quantity", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Prices.prototype, "type", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], Prices.prototype, "unit_amount", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Prices.prototype, "unit_amount_decimal", void 0);
Prices = __decorate([
    type_graphql_1.ObjectType()
], Prices);
exports.Prices = Prices;
//# sourceMappingURL=PricesFetchSchema.js.map