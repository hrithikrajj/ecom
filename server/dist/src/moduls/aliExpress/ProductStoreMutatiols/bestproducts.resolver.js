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
exports.storebestProductResolver = void 0;
const type_graphql_1 = require("type-graphql");
const axios_1 = __importDefault(require("axios"));
const BestProducts_1 = require("../../../entity/BestProducts");
let storebestProductResolver = class storebestProductResolver {
    storebestProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            yield BestProducts_1.BestProducts.delete({});
            for (let i = 1; i < 11; i++) {
                var options = {
                    method: "GET",
                    url: "https://magic-aliexpress1.p.rapidapi.com/api/bestSales/products",
                    params: {
                        page: i,
                        searchName: "",
                    },
                    headers: {
                        "x-rapidapi-key": process.env.RAPID_MAGIC_API_KEY,
                        "x-rapidapi-host": "magic-aliexpress1.p.rapidapi.com",
                    },
                };
                const res = yield axios_1.default.request(options);
                const data = res.data.docs;
                data.map((p) => __awaiter(this, void 0, void 0, function* () {
                    yield BestProducts_1.BestProducts.create({
                        _id: p._id,
                        first_level_category_id: p.first_level_category_id,
                        first_level_category_name: p.first_level_category_name,
                        product_detail_url: p.product_detail_url,
                        product_id: p.product_id,
                        product_main_image_url: p.product_main_image_url,
                        product_title: p.product_title,
                        second_level_category_id: p.second_level_category_id,
                        second_level_category_name: p.second_level_category_name,
                        app_sale_price: p.app_sale_price,
                        original_price: p.original_price,
                        sale_price: p.sale_price,
                        sale_price_currency: p.sale_price_currency,
                        evaluate_rate: p.evaluate_rate,
                        lastest_volume: p.lastest_volume,
                        price_trend: p.price_trend,
                        review_trend: p.price_trend,
                        sale_trend: p.sale_price,
                    }).save();
                }));
            }
            return yield BestProducts_1.BestProducts.find({ where: {} });
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => [BestProducts_1.BestProducts]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], storebestProductResolver.prototype, "storebestProducts", null);
storebestProductResolver = __decorate([
    type_graphql_1.Resolver()
], storebestProductResolver);
exports.storebestProductResolver = storebestProductResolver;
//# sourceMappingURL=bestproducts.resolver.js.map