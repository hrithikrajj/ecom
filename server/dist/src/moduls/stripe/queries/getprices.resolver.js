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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPriceResolver = void 0;
const stripe_1 = require("../../../stripe");
const type_graphql_1 = require("type-graphql");
const PricesFetchSchema_1 = require("../../../aliExpressEntity/PricesFetchSchema");
let getPriceResolver = class getPriceResolver {
    getprice() {
        return __awaiter(this, void 0, void 0, function* () {
            const price = yield stripe_1.stripe.prices.list({
                active: true,
            });
            return price.data;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [PricesFetchSchema_1.Prices]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], getPriceResolver.prototype, "getprice", null);
getPriceResolver = __decorate([
    type_graphql_1.Resolver()
], getPriceResolver);
exports.getPriceResolver = getPriceResolver;
//# sourceMappingURL=getprices.resolver.js.map