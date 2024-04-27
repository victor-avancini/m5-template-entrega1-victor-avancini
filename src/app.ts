import express, { json } from "express";
import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import helmet from "helmet";
import { taskRouter, categoryRouter, userRouter } from "./routes";
import { handleErrors } from "./middlewares";

export const app = express();

app.use(helmet());
app.use(json());
app.use("/tasks", taskRouter);
app.use("/categories", categoryRouter);
app.use("/users", userRouter);
app.use(handleErrors.execute);