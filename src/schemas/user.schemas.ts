import { z } from "zod";

const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(50),
    email: z.string().max(255),
    password: z.string().max(255),
});

const userBodyCreateSchema = userSchema.omit({ id: true });
const userReturnSchema = userSchema.omit({ password: true });
const userBodyLoginSchema = userSchema.omit({ id: true, name: true })

export { userSchema, userBodyCreateSchema, userReturnSchema, userBodyLoginSchema };