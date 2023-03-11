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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sotrebestSalesResolver = void 0;
const axios_1 = __importDefault(require("axios"));
const type_graphql_1 = require("type-graphql");
const BestProducts_1 = require("../../entity/BestProducts");
let sotrebestSalesResolver = class sotrebestSalesResolver {
    storeSalesHistory() {
        return __awaiter(this, void 0, void 0, function* () {
            const details = yield BestProducts_1.BestProducts.find({ where: {} });
            for (var p of details) {
                yield waitforme(1000);
                var options = {
                    method: "GET",
                    url: `https://magic-aliexpress1.p.rapidapi.com/api/bestSales/product/${p.product_id}/salesHistory`,
                    params: { minDate: "2020-09-28", maxDate: "2021-06-10" },
                    headers: {
                        "x-rapidapi-key": process.env.RAPID_MAGIC_API_KEY,
                        "x-rapidapi-host": "magic-aliexpress1.p.rapidapi.com",
                    },
                };
                const res = yield axios_1.default.request(options);
                const data = res.data[0].sales;
                const product = yield BestProducts_1.BestProducts.findOne({
                    where: { product_id: p.product_id },
                });
                product.sales_history = data;
                product.save();
            }
            return true;
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], sotrebestSalesResolver.prototype, "storeSalesHistory", null);
sotrebestSalesResolver = __decorate([
    type_graphql_1.Resolver()
], sotrebestSalesResolver);
exports.sotrebestSalesResolver = sotrebestSalesResolver;
function waitforme(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("");
        }, ms);
    });
}
//# sourceMappingURL=storebestsales.resolver.js.map