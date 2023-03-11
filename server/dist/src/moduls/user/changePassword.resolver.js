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
exports.ChangePasswordResolver = void 0;
const User_1 = require("../../entity/User");
const type_graphql_1 = require("type-graphql");
const ChangepasswordInput_1 = require("./changepasswordInput/ChangepasswordInput");
const redisPrefixes_1 = require("../constants/redisPrefixes");
const redis_1 = require("../../redis");
const argon2_1 = __importDefault(require("argon2"));
let ChangePasswordResolver = class ChangePasswordResolver {
    changepassword({ token, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = yield redis_1.redis.get(redisPrefixes_1.forgotpasswordPrefix + token);
            if (!userId) {
                return null;
            }
            const user = yield User_1.User.findOne({ where: { id: userId } });
            if (!user) {
                return null;
            }
            yield redis_1.redis.del(redisPrefixes_1.forgotpasswordPrefix + token);
            user.password = yield argon2_1.default.hash(password);
            yield user.save();
            return user;
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => User_1.User, { nullable: true }),
    __param(0, type_graphql_1.Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ChangepasswordInput_1.changePasswordInput]),
    __metadata("design:returntype", Promise)
], ChangePasswordResolver.prototype, "changepassword", null);
ChangePasswordResolver = __decorate([
    type_graphql_1.Resolver()
], ChangePasswordResolver);
exports.ChangePasswordResolver = ChangePasswordResolver;
//# sourceMappingURL=changePassword.resolver.js.map