import { Router } from "express";
import { TaskControllers } from "../controllers/task.controllers";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { taskCreateSchema, taskUpdateSchema } from "../schemas/task.schemas";
import { IsCategoryIdValid } from "../middlewares/isCategoryIdValid.middleware";
import { IsTaskIdValid } from "../middlewares/isTaskIdValid.middleware";

export const taskRouter = Router();

const taskControllers = new TaskControllers();

taskRouter.post("/", ValidateBody.execute(taskCreateSchema), IsCategoryIdValid.execute, taskControllers.create);
taskRouter.get("/", taskControllers.findMany);
taskRouter.get("/:id", IsTaskIdValid.execute, taskControllers.findOne);
taskRouter.patch("/:id", IsTaskIdValid.execute, ValidateBody.execute(taskUpdateSchema), taskControllers.update);
taskRouter.delete("/:id", IsTaskIdValid.execute, taskControllers.delete);