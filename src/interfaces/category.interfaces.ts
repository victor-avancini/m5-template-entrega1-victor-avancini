import { z } from "zod";
import { categoryCreateSchema, categotySchema } from "../schemas/category.schema";

export type Category = z.infer<typeof categotySchema>

export type CategoryCreate = z.infer<typeof categoryCreateSchema>;