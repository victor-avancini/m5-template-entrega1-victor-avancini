import { z } from "zod";

const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1),
    email: z.string().email().min(1),
    password: z.string().max(255),
});

const userBodyCreateSchema = userSchema.omit({ id: true });
const userReturnSchema = userSchema.omit({ password: true });
const userBodyLoginSchema = userSchema.omit({ id: true, name: true });
const userBodyGetSchema = userSchema.omit({ id: true, password: true })

export { userSchema, userBodyCreateSchema, userReturnSchema, userBodyLoginSchema, userBodyGetSchema };