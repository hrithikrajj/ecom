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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.productResolver = void 0;
const BestProducts_1 = require("../../entity/BestProducts");
const type_graphql_1 = require("type-graphql");
const productQuery_1 = require("./Productdetails/productQuery");
let productResolver = class productResolver {
    product({ productId }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pro = yield BestProducts_1.BestProducts.findOne({
                    where: { product_id: productId },
                });
                if (!pro) {
                    console.log("hiiii");
                }
                return pro;
            }
            catch (error) {
                console.error(error);
            }
            return null;
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => BestProducts_1.BestProducts, { nullable: true }),
    __param(0, type_graphql_1.Arg("options")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [productQuery_1.productQuery]),
    __metadata("design:returntype", Promise)
], productResolver.prototype, "product", null);
productResolver = __decorate([
    type_graphql_1.Resolver()
], productResolver);
exports.productResolver = productResolver;
//# sourceMappingURL=product.resolver.js.map