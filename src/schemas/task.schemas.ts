import { z } from "zod";

export const taskSchema = z.object({
    id: z.number().positive(),
    title: z.string().min(1),
    content: z.string().min(1),
    finished: z.boolean().default(false),
    categoryId: z.number().positive().nullish()
});

export const taskCreateSchema = taskSchema.omit({ id: true });

export const taskUpdateSchema = taskCreateSchema.partial();

export type TTask = z.infer<typeof taskCreateSchema>

export type TTaskCreate = z.infer<typeof taskCreateSchema>;

export type TTaskUpdate = z.infer<typeof taskUpdateSchema>;