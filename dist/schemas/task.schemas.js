"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskSchemaRead = exports.taskUpdateSchema = exports.taskCreateSchema = exports.taskSchema = void 0;
const zod_1 = require("zod");
const index_1 = require("./index");
const taskSchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    title: zod_1.z.string().min(1),
    content: zod_1.z.string().min(1),
    finished: zod_1.z.boolean().default(false),
    categoryId: zod_1.z.number().positive().nullish(),
    userId: zod_1.z.number().positive().nullish()
});
exports.taskSchema = taskSchema;
const taskSchemaRead = taskSchema.omit({ categoryId: true, userId: true }).extend({ category: index_1.categorySchema });
exports.taskSchemaRead = taskSchemaRead;
const taskCreateSchema = taskSchema.omit({ id: true });
exports.taskCreateSchema = taskCreateSchema;
const taskUpdateSchema = taskSchema.partial();
exports.taskUpdateSchema = taskUpdateSchema;
