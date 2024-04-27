import { Request, Response } from "express";
import { UserServices } from "../services";

export class UserController {
    private service = new UserServices();

    public create = async (req: Request, res: Response): Promise<Response> => {
        const user = await this.service.create(req.body)

        return res.status(201).json(user)
    }

    public login = async (req: Request, res: Response): Promise<Response> => {
        const user = await this.service.login(req.body);
        
        return res.status(200).json(user);
    }

    public getUser = async (req: Request, res: Response): Promise<Response> => {
        const user = await this.service.getUser(req.body)

        return res.status(200).json(user)
    }
}