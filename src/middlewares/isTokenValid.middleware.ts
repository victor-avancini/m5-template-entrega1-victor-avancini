import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import jwt from "jsonwebtoken";

export class isTokenValid {
    static async execute(req: Request, res: Response, next: NextFunction) {
        const authorization = req.headers.authorization;

        const token = authorization?.replace("Bearer ","");

        if (!token) {
            throw new AppError(403, "Token is required");
        };

        jwt.verify(token, process.env.JWT_SECRET as string);

        res.locals.decode = jwt.decode(token);

        next();
    }
}