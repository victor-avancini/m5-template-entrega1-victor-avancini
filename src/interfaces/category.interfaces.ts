import { z } from "zod";
import { categorySchema, categoryCreateSchema, categoryCreateResponseSchema } from "../schemas";

type Category = z.infer<typeof categorySchema>

type CategoryCreate = z.infer<typeof categoryCreateSchema>;

type CategoryCreateResponse = z.infer<typeof categoryCreateResponseSchema>;

export { Category, CategoryCreate, CategoryCreateResponse }