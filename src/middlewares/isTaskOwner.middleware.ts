import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/appError";

export class isTaskOwner {
    static async execute(req: Request, res: Response, next: NextFunction) {
        const userId = Number(res.locals.decoded.sub);
        
        const taskId = Number(req.params.id);

        const task = await prisma.task.findFirst({ where: { id: Number(taskId) } });

        if (task?.userId !== userId) {
            throw new AppError(403, "This user is not the task owner")
        }

        return next();
    }
}