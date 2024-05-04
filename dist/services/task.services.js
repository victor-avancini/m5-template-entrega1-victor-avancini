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
exports.TaskServices = void 0;
const prisma_1 = require("../database/prisma");
const schemas_1 = require("../schemas");
class TaskServices {
    constructor() {
        this.task = prisma_1.prisma.task;
        // public create = async (body: TaskCreate): Promise<Task> => {
        //     return await this.task.create({ data: body })
        // }
        this.create = (body, userId) => __awaiter(this, void 0, void 0, function* () {
            const newTask = Object.assign(Object.assign({}, body), { userId });
            return yield this.task.create({ data: newTask });
        });
        this.readMany = (search, userId) => __awaiter(this, void 0, void 0, function* () {
            if (!search) {
                const response = yield this.task.findMany({ where: { userId }, include: { category: true } });
                return schemas_1.taskSchemaRead.array().parse(response);
            }
            const response = yield this.task.findMany({ where: { category: { name: search } }, include: { category: true } });
            return schemas_1.taskSchemaRead.array().parse(response);
        });
        this.readOne = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.task.findFirst({ where: { id }, include: { category: true } });
        });
        this.update = (id, body) => __awaiter(this, void 0, void 0, function* () {
            return yield this.task.update({ where: { id }, data: body });
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            yield this.task.delete({ where: { id } });
        });
    }
}
exports.TaskServices = TaskServices;
