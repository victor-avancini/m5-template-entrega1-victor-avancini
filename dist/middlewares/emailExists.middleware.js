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
exports.emailExists = void 0;
const prisma_1 = require("../database/prisma");
class emailExists {
    static execute(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundEmail = yield prisma_1.prisma.user.findFirst({ where: { email: String(req.body.email) } });
            if (foundEmail) {
                return res.status(409).json({ "message": "This email is already registered" });
            }
            return next();
        });
    }
}
exports.emailExists = emailExists;
