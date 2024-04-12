import { z } from "zod";
import { taskCreateSchema, taskSchema, taskUpdateSchema } from "../schemas/task.schemas";

export type TTask = z.infer<typeof taskSchema>

export type TTaskCreate = z.infer<typeof taskCreateSchema>;

export type TTaskUpdate = z.infer<typeof taskUpdateSchema>;