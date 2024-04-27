import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";

export class categoryFound {
  static async execute(req: Request, res: Response, next: NextFunction) {
    const { categoryId } = req.body;

    if (categoryId) {
      const found = await prisma.category.findUnique({
        where: { id: categoryId }
      });

      if (!found) {
        return res.status(404).json({ message: "Category not found" });
      }
    }
    next()
  }
}