import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/appError";

export class IsCategoryIdValid {
    static async execute(req: Request, res: Response, next: NextFunction) {
        const categoryId: number = req.body.categoryId;

        const category = await prisma.category.findUnique({ where: { id: Number(categoryId) } });

        if (!category) {
            throw new AppError(404, "Category not found");
        }

        res.locals.category = category;

        next();
    }
}