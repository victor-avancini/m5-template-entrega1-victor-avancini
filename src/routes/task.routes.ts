import { Router } from "express";
import { TaskControllers } from "../controllers/task.controllers";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { taskCreateSchema, taskUpdateSchema } from "../schemas/task.schemas";
import { IsTaskIdValid } from "../middlewares/isTaskIdValid.middleware";
import { CategoryFound } from "../middlewares/CategoryFound.middleware";

export const taskRouter = Router();

const taskControllers = new TaskControllers();

taskRouter.post("/", CategoryFound.execute, ValidateBody.execute(taskCreateSchema), taskControllers.create);
taskRouter.get("/", taskControllers.readMany);
taskRouter.get("/:id", IsTaskIdValid.execute, taskControllers.readOne);
taskRouter.patch("/:id", IsTaskIdValid.execute, ValidateBody.execute(taskUpdateSchema), taskControllers.update);
taskRouter.delete("/:id", IsTaskIdValid.execute, taskControllers.delete);