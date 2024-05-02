import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import { jwtConfig } from "../configs";
import { verify } from "jsonwebtoken";

export class verifyToken {
    static async execute(req: Request, res: Response, next: NextFunction) {
        const { authorization } = req.headers;

        if (!authorization) {
            throw new AppError(401, "Token is required");
        };

        const [_, token] = authorization.split(" ");

        const { secret } = jwtConfig();
        const jwtPayload = verify(token, secret);
        console.log(jwtPayload)

        if (!jwtPayload) {
            throw new AppError(401, "Invalid token");
        }
        
        res.locals = { ...res.locals, decoded: jwtPayload };

        return next();
    }
}