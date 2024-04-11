import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppErrors";
import { ZodError } from "zod";

export class HandleErrors {
    public static execute(error: Error, req: Request, res: Response, next: NextFunction) {
        if (error instanceof AppError) {
            return res.status(error.status).json({ message: error.message })
        }
        if (error instanceof ZodError) {
            return res.status(400).json({ message: error.flatten().fieldErrors })
        }
        console.log(error)

        return res.status(500).json({message: 'Internal server error'})
    }
}