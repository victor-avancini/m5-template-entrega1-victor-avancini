"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryCreateResponseSchema = exports.categoryCreateSchema = exports.categorySchema = void 0;
const zod_1 = require("zod");
const categorySchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    name: zod_1.z.string().min(1),
    userId: zod_1.z.number().positive().nullish()
});
exports.categorySchema = categorySchema;
const categoryCreateSchema = categorySchema.omit({ id: true, userId: true });
exports.categoryCreateSchema = categoryCreateSchema;
const categoryCreateResponseSchema = categorySchema.omit({ id: true });
exports.categoryCreateResponseSchema = categoryCreateResponseSchema;
