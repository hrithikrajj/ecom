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
exports.createSubsciptionResolver = void 0;
const User_1 = require("../../../entity/User");
const type_graphql_1 = require("type-graphql");
const isAuth_1 = require("../../user/middleware/isAuth");
const stripe_1 = require("../../../stripe");
const subscriptionFetchSchema_1 = require("../../../aliExpressEntity/subscriptionFetchSchema");
let createSubsciptionResolver = class createSubsciptionResolver {
    createsubsctiption(priceid, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.session.userId || !req.session) {
                return null;
            }
            const user = yield User_1.User.findOne(req.session.userId);
            if (!user) {
                return null;
            }
            const customer = yield stripe_1.stripe.customers.create({
                email: user.email,
            });
            user.stripeId = customer.id;
            const subscription = yield stripe_1.stripe.subscriptions.create({
                customer: customer.id,
                items: [
                    {
                        price: priceid,
                    },
                ],
                payment_behavior: "default_incomplete",
                expand: ["latest_invoice.payment_intent"],
            });
            user.subscriptionId = subscription.id;
            user.save();
            return subscription;
        });
    }
};
__decorate([
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    type_graphql_1.Mutation(() => subscriptionFetchSchema_1.subscriptionSchema, { nullable: true }),
    __param(0, type_graphql_1.Arg("priceid")),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], createSubsciptionResolver.prototype, "createsubsctiption", null);
createSubsciptionResolver = __decorate([
    type_graphql_1.Resolver()
], createSubsciptionResolver);
exports.createSubsciptionResolver = createSubsciptionResolver;
//# sourceMappingURL=createsubscription.resolver.js.map