import express, { json } from "express";
import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import helmet from "helmet";
import { taskRouter } from "./routes/task.routes";
import { categoryRouter } from "./routes/category.routes";
import { HandleErrors } from "./middleweres/HandleErrors";

export const app = express();

app.use(helmet());
app.use(json());
app.use("/tasks", taskRouter)
app.use("/categories", categoryRouter)
app.use(HandleErrors.execute);