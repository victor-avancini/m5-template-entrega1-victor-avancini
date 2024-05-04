import { z } from "zod";
import { taskSchema, taskCreateSchema, taskUpdateSchema, taskSchemaRead } from "../schemas";

type Task = z.infer<typeof taskSchema>

type TaskSchemaRead = z.infer<typeof taskSchemaRead>;

type TaskCreate = z.infer<typeof taskCreateSchema>;

type TaskUpdate = z.infer<typeof taskUpdateSchema>;

export { Task, TaskCreate, TaskUpdate, TaskSchemaRead };