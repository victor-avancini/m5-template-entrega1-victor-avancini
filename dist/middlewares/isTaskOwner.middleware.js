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
exports.isTaskOwner = void 0;
const prisma_1 = require("../database/prisma");
const appError_1 = require("../errors/appError");
class isTaskOwner {
    static execute(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = res.locals.decoded.id;
            const taskId = req.params.id;
            const task = yield prisma_1.prisma.task.findFirst({ where: { id: Number(taskId) } });
            if ((task === null || task === void 0 ? void 0 : task.userId) !== userId) {
                throw new appError_1.AppError(403, "This user is not the task owner");
            }
            return next();
        });
    }
}
exports.isTaskOwner = isTaskOwner;
