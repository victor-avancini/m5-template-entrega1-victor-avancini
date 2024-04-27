import { z } from "zod";
import { taskSchema, taskCreateSchema, taskUpdateSchema } from "../schemas";

type Task = z.infer<typeof taskSchema>

type TaskCreate = z.infer<typeof taskCreateSchema>;

type TaskUpdate = z.infer<typeof taskUpdateSchema>;

export { Task, TaskCreate, TaskUpdate };