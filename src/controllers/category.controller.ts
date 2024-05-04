import { Request, Response } from "express";
import { CategoryServices } from "../services";

export class CategoryController {
    private service = new CategoryServices();

    // public create = async (req: Request, res: Response): Promise<Response> => {
    //     const response = await this.service.create(req.body);

    //     return res.status(201).json(response);
    // }

    public create = async (req: Request, res: Response): Promise<Response> => {
        const userId = res.locals.decoded.id;

        const response = await this.service.create(req.body, userId);

        return res.status(201).json(response);
    }

    // public delete = async (req: Request, res: Response): Promise<Response> => {
    //     await this.service.delete(Number(req.params.id));

    //     return res.status(204).json();
    // }

    public delete = async (req: Request, res: Response): Promise<Response> => {
        await this.service.delete(Number(req.params.id));

        return res.status(204).json();
    }
}