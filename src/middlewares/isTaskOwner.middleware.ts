import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import { prisma } from "../database/prisma";

export class isTaskOwner {
    static async execute(req: Request, res: Response, next: NextFunction) {
        const { decoded } = res.locals;
        const { userId } = req.body.id;

        if (decoded.sub !== userId) {
            throw new AppError(403, "This user is not the task owner");
        }

        const user = await prisma.user.findFirst({ where: { id: Number(decoded.sub) } });

        res.locals = { ...res.locals, user };

        return next();
    }
}