import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/appError";

export class isTaskIdValid {
    static async execute(req: Request, res: Response, next: NextFunction) {
        const taskId = req.params.id;

        const task = await prisma.task.findUnique({ where: { id: Number(taskId) } });

        if(!task){
            throw new AppError(404, "Task not found");
        }

        res.locals.task = task;

        next();
    }
}