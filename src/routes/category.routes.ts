import { Router } from "express";
import { CategoryController } from "../controllers";
import { validateBody, isCategoryValid, verifyToken } from "../middlewares";
import { categoryCreateSchema } from "../schemas";

export const categoryRouter = Router();

const categoryController = new CategoryController();

categoryRouter.post("/", verifyToken.execute, validateBody.execute(categoryCreateSchema), categoryController.create);
categoryRouter.delete("/:id", verifyToken.execute, isCategoryValid.execute, categoryController.delete);