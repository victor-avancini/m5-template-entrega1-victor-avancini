import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";

export class validateBody {
    static execute(schema: ZodSchema) {
        return async (req: Request, res: Response, next: NextFunction) => {

            try {
                req.body = schema.parse(req.body);
                return next()
            } catch (error) {
                if (error instanceof ZodError) {
                    return res.status(400).json({error: "invalid body"})
                } else {
                    return next(error)
                }
            }
        }
    }
}