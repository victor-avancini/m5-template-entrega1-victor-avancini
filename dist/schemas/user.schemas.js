"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userBodyLoginSchema = exports.userReturnSchema = exports.userBodyCreateSchema = exports.userSchema = void 0;
const zod_1 = require("zod");
const userSchema = zod_1.z.object({
    id: zod_1.z.number().positive(),
    name: zod_1.z.string().min(1),
    email: zod_1.z.string().email().min(1),
    password: zod_1.z.string().max(255),
});
exports.userSchema = userSchema;
const userBodyCreateSchema = userSchema.omit({ id: true });
exports.userBodyCreateSchema = userBodyCreateSchema;
const userReturnSchema = userSchema.omit({ password: true });
exports.userReturnSchema = userReturnSchema;
const userBodyLoginSchema = userSchema.omit({ id: true, name: true });
exports.userBodyLoginSchema = userBodyLoginSchema;
