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
exports.categoryFound = void 0;
const prisma_1 = require("../database/prisma");
class categoryFound {
    static execute(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { categoryId } = req.body;
            if (categoryId) {
                const found = yield prisma_1.prisma.category.findUnique({
                    where: { id: categoryId }
                });
                if (!found) {
                    return res.status(404).json({ message: "Category not found" });
                }
            }
            next();
        });
    }
}
exports.categoryFound = categoryFound;
