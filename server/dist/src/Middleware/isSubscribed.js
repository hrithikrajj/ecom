"use strict";
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
exports.isSubscribed = void 0;
const User_1 = require("../entity/User");
const isSubscribed = ({ context }, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.User.findOne({
        where: { id: context.req.session.userId },
    });
    if (!user) {
        throw new Error("Fuck off you are not autherized");
    }
    if (!user.subscribed) {
        throw new Error("Fuck off you are not autherized");
    }
    return next();
});
exports.isSubscribed = isSubscribed;
//# sourceMappingURL=isSubscribed.js.map