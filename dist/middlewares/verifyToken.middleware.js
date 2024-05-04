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
exports.verifyToken = void 0;
const appError_1 = require("../errors/appError");
const configs_1 = require("../configs");
const jsonwebtoken_1 = require("jsonwebtoken");
class verifyToken {
    static execute(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { authorization } = req.headers;
            if (!authorization) {
                throw new appError_1.AppError(401, "Token is required");
            }
            ;
            const [_, token] = authorization.split(" ");
            const { secret } = (0, configs_1.jwtConfig)();
            const jwtPayload = (0, jsonwebtoken_1.verify)(token, secret);
            console.log(jwtPayload);
            if (!jwtPayload) {
                throw new appError_1.AppError(401, "Invalid token");
            }
            res.locals = Object.assign(Object.assign({}, res.locals), { decoded: jwtPayload });
            console.log(res.locals.decoded.sub);
            return next();
        });
    }
}
exports.verifyToken = verifyToken;
