import { Router } from "express";
import { TaskController } from "../controllers";
import { validateBody, isTaskIdValid, categoryFound, verifyToken, isTaskOwner, isCategoryValid } from "../middlewares";
import { taskCreateSchema, taskUpdateSchema } from "../schemas";

export const taskRouter = Router();

const taskControllers = new TaskController();

taskRouter.post("/", verifyToken.execute, categoryFound.execute, validateBody.execute(taskCreateSchema), taskControllers.create);

taskRouter.get("/", verifyToken.execute, taskControllers.readMany);

taskRouter.get("/:id", verifyToken.execute, isTaskIdValid.execute, isCategoryValid.execute, isTaskOwner.execute, taskControllers.readOne);

taskRouter.patch("/:id", verifyToken.execute, isTaskIdValid.execute, validateBody.execute(taskUpdateSchema), isTaskOwner.execute, taskControllers.update);

taskRouter.delete("/:id", verifyToken.execute, isTaskIdValid.execute, isTaskOwner.execute, taskControllers.delete);