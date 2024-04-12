import { Request, Response } from "express";
import { TaskServices } from "../services/task.services";
import { category } from "../tests/mocks/category.mocks";

export class TaskControllers {
    async create(req: Request, res: Response) {
        const taskServices = new TaskServices();

        const response = await taskServices.create(Number(req.params.id), req.body);

        return res.status(201).json(response);
    }

    async findMany(req: Request, res: Response) {
        const taskServices = new TaskServices();

        const response = await taskServices.findMany();

        return res.status(200).json(response);
    }

    async findOne(req: Request, res: Response) {
        const taskServices = new TaskServices();

        const response = await taskServices.findOne(Number(req.params.id));

        return res.status(200).json(response);
    }

    async update(req: Request, res: Response) {
        const taskServices = new TaskServices();

        const response = await taskServices.update(Number(req.params.id), req.body);

        return res.status(200).json(response);
    }

    async delete(req: Request, res: Response) {
        const taskServices = new TaskServices();

        await taskServices.delete(Number(req.params.id));

        return res.status(204).json();
    }
}