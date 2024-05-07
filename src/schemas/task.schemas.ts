import { z } from "zod";
import { categorySchema } from "./index";

const taskSchema = z.object({
    id: z.number().positive(),
    title: z.string().min(1),
    content: z.string().min(1),
    finished: z.boolean().default(false),
    categoryId: z.number().positive().nullish(),
    userId: z.number().positive().nullish()
});

const taskSchemaRead = taskSchema.omit({ categoryId: true, userId: true }).extend({ category: categorySchema.nullish() })

const taskCreateSchema = taskSchema.omit({ id: true });

const taskUpdateSchema = taskSchema.partial();

export { taskSchema, taskCreateSchema, taskUpdateSchema, taskSchemaRead };