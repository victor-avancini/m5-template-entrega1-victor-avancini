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
exports.CategoryServices = void 0;
const prisma_1 = require("../database/prisma");
class CategoryServices {
    constructor() {
        this.category = prisma_1.prisma.category;
        // public create = async (body: CategoryCreate): Promise<CategoryCreate> => {
        //     return await this.category.create({ data: body })
        // }
        this.create = (body, userId) => __awaiter(this, void 0, void 0, function* () {
            const newCategory = Object.assign(Object.assign({}, body), { userId });
            return yield this.category.create({ data: newCategory });
        });
        // public delete = async (id: number): Promise<void> => {
        //     await this.category.delete({ where: { id } })
        // }
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            yield this.category.delete({ where: { id } });
        });
    }
}
exports.CategoryServices = CategoryServices;
