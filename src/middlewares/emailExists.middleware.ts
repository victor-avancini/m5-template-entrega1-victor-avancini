import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";

export class emailExists {
    static async execute(req: Request, res: Response, next: NextFunction) {
        const foundEmail = await prisma.user.findFirst({ where: { email: String(req.body.email) } })

        if (foundEmail) {
            return res.status(409).json({ "message": "This email is already registered" })
        }

        return next();
    }
}