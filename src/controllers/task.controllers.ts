import { Request, Response } from "express";
import { TaskServices } from "../services/task.services";
import { category } from "../tests/mocks/category.mocks";

export class TaskControllers {
    private service = new TaskServices();

    public create = async (req: Request, res: Response): Promise<Response> => {
        const response = await this.service.create(req.body);

        return res.status(201).json(response);
    }

    public readMany = async ({query}: Request, res: Response): Promise<Response> => {
        const queryParams = query.category ? String(query.category) : undefined;

        const response = await this.service.readMany(queryParams);

        return res.status(200).json(response);
    }

    public readOne = async (req: Request, res: Response): Promise<Response> => {
        const response = await this.service.readOne(Number(req.params.id));

        return res.status(200).json(response);
    }

    public update = async (req: Request, res: Response): Promise<Response> => {
        const response = await this.service.update(Number(req.params.id), req.body);

        return res.status(200).json(response);
    }

    public delete = async (req: Request, res: Response): Promise<Response> => {
        await this.service.delete(Number(req.params.id));

        return res.status(204).json();
    }
}