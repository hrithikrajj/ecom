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
exports.subscriptionSchema = void 0;
const type_graphql_1 = require("type-graphql");
let clientSercet = class clientSercet {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], clientSercet.prototype, "client_secret", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], clientSercet.prototype, "id", void 0);
clientSercet = __decorate([
    type_graphql_1.ObjectType()
], clientSercet);
let paymentIntent = class paymentIntent {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], paymentIntent.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", clientSercet)
], paymentIntent.prototype, "payment_intent", void 0);
paymentIntent = __decorate([
    type_graphql_1.ObjectType()
], paymentIntent);
let subscriptionSchema = class subscriptionSchema {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], subscriptionSchema.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], subscriptionSchema.prototype, "object", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], subscriptionSchema.prototype, "billing_cycle_anchor", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], subscriptionSchema.prototype, "cancel_at_period_end", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], subscriptionSchema.prototype, "collection_method", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], subscriptionSchema.prototype, "created", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], subscriptionSchema.prototype, "current_period_end", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], subscriptionSchema.prototype, "current_period_start", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], subscriptionSchema.prototype, "customer", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", paymentIntent)
], subscriptionSchema.prototype, "latest_invoice", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], subscriptionSchema.prototype, "start_date", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], subscriptionSchema.prototype, "status", void 0);
subscriptionSchema = __decorate([
    type_graphql_1.ObjectType()
], subscriptionSchema);
exports.subscriptionSchema = subscriptionSchema;
//# sourceMappingURL=subscriptionFetchSchema.js.map