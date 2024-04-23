import { z } from "zod";
import { taskCreateSchema, taskSchema, taskUpdateSchema } from "../schemas/task.schemas";

export type Task = z.infer<typeof taskSchema>

export type TaskCreate = z.infer<typeof taskCreateSchema>;

export type TaskUpdate = z.infer<typeof taskUpdateSchema>;