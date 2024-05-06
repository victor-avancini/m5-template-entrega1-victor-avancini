import { Request, Response } from "express";
import { UserServices } from "../services";

export class UserController {
    private service = new UserServices();

    public create = async (req: Request, res: Response): Promise<Response> => {
        const response = await this.service.create(req.body)

        return res.status(201).json(response)
    }

    public login = async (req: Request, res: Response): Promise<Response> => {
        const response = await this.service.login(req.body);
        
        return res.status(200).json(response);
    }

    public getUser = async (req: Request, res: Response): Promise<Response> => {
        
        const response = await this.service.getUser(req.body);

        return res.status(200).json(response);
    }
}