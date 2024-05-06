import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import { verify } from "jsonwebtoken";

export class verifyToken {
    static async execute(req: Request, res: Response, next: NextFunction) {
        const { authorization } = req.headers;

        if (!authorization) {
            throw new AppError(401, "Token is required");
        };

        const [_, token] = authorization.split(" ");

        const secret = process.env.JWT_SECRET!;

        if (!token) {
            throw new AppError(401, "Token is required");
        }

        const jwtPayload = verify(token, secret)

        res.locals = { ...res.locals, decoded: jwtPayload };

        return next();
    }
}