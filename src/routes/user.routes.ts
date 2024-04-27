import { Router } from "express";
import { UserController } from "../controllers";
import { emailExists, validateBody, verifyToken } from "../middlewares";
import { userBodyCreateSchema } from "../schemas";


export const userRouter = Router();

const userControllers = new UserController();

userRouter.post("/", emailExists.execute, validateBody.execute(userBodyCreateSchema), userControllers.create);
userRouter.get("/profile", verifyToken.execute, userControllers.getUser)
userRouter.post("/login", userControllers.login)