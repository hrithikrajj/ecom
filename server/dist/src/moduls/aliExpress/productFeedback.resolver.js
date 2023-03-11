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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackResolver = void 0;
const axios_1 = __importDefault(require("axios"));
const type_graphql_1 = require("type-graphql");
const isAuth_1 = require("../user/middleware/isAuth");
const productQuery_1 = require("./Productdetails/productQuery");
let docsDetails = class docsDetails {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], docsDetails.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], docsDetails.prototype, "displayName", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], docsDetails.prototype, "country", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], docsDetails.prototype, "rating", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], docsDetails.prototype, "date", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], docsDetails.prototype, "content", void 0);
docsDetails = __decorate([
    type_graphql_1.ObjectType()
], docsDetails);
let feedBackdata = class feedBackdata {
};
__decorate([
    type_graphql_1.Field((type) => [docsDetails]),
    __metadata("design:type", Array)
], feedBackdata.prototype, "docs", void 0);
feedBackdata = __decorate([
    type_graphql_1.ObjectType()
], feedBackdata);
let feedbackResolver = class feedbackResolver {
    getfeedback({ page, productId }) {
        return __awaiter(this, void 0, void 0, function* () {
            var options = {
                method: "GET",
                url: `https://magic-aliexpress1.p.rapidapi.com/api/product/${productId}/feedbacks`,
                params: { page: page },
                headers: {
                    "x-rapidapi-key": "9b843e17f4msh5b077960ae94ec7p139ab7jsna4cb98007ce9",
                    "x-rapidapi-host": "magic-aliexpress1.p.rapidapi.com",
                },
            };
            const res = yield axios_1.default.request(options);
            return res.data;
        });
    }
};
__decorate([
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    type_graphql_1.Mutation(() => feedBackdata),
    __param(0, type_graphql_1.Arg("options")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [productQuery_1.productQuery]),
    __metadata("design:returntype", Promise)
], feedbackResolver.prototype, "getfeedback", null);
feedbackResolver = __decorate([
    type_graphql_1.Resolver()
], feedbackResolver);
exports.feedbackResolver = feedbackResolver;
//# sourceMappingURL=productFeedback.resolver.js.map