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
exports.salesFetch = void 0;
const type_graphql_1 = require("type-graphql");
let salesHistory = class salesHistory {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], salesHistory.prototype, "_id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], salesHistory.prototype, "lastest_volume", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], salesHistory.prototype, "modificationDate", void 0);
salesHistory = __decorate([
    type_graphql_1.ObjectType()
], salesHistory);
let salesFetch = class salesFetch {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], salesFetch.prototype, "_id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], salesFetch.prototype, "product_id", void 0);
__decorate([
    type_graphql_1.Field((type) => [salesHistory]),
    __metadata("design:type", Array)
], salesFetch.prototype, "sales", void 0);
salesFetch = __decorate([
    type_graphql_1.ObjectType()
], salesFetch);
exports.salesFetch = salesFetch;
//# sourceMappingURL=salesHistoryFetchSchema.js.map