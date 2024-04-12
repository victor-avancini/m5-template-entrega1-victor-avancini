import { z } from "zod";

export const categotySchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1)
});

export const categoryCreateSchema = categotySchema.omit({ id: true });