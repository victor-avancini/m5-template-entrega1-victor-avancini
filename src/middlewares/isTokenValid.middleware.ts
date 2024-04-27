// import { NextFunction, Request, Response } from "express";
// import { AppError } from "../errors/appError";

// export class isTokenValid {
//     static async execute(req: Request, res: Response, next: NextFunction) {
//         const { decoded } = res.locals;
//         const { userId } = req.body.id

//         if (decoded.sub !== userId) {
//             throw new AppError (401, )
//         }
//     }
// }