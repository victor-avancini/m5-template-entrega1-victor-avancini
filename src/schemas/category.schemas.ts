import { z } from "zod";

const categorySchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1),
    userId: z.number().positive().nullish()
});

const categoryCreateSchema = categorySchema.omit({ id: true, userId: true });

const categoryCreateResponseSchema = categorySchema.omit({ id: true })

export { categorySchema, categoryCreateSchema, categoryCreateResponseSchema };