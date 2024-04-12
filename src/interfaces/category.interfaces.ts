import { z } from "zod";
import { categoryCreateSchema, categotySchema } from "../schemas/category.schema";

export type TCategory = z.infer<typeof categotySchema>

export type TCategoryCreate = z.infer<typeof categoryCreateSchema>;