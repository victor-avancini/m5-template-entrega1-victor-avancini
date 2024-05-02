import { hash } from "bcrypt";
import bcrypt from "bcrypt";
import { prisma } from "../database/prisma"
import { UserBodyCreate, UserBodyLogin, UserLoginReturn, UserReturn } from "../interfaces";
import { userReturnSchema } from "../schemas";
import jwt from "jsonwebtoken";
import { AppError } from "../errors/appError";

export class UserServices {
    private user = prisma.user;

    public create = async (body: UserBodyCreate): Promise<UserReturn> => {
        body.password = await hash(body.password, 10);

        const newUser = await this.user.create({ data: body });

        return userReturnSchema.parse(newUser);
    }

    public login = async (body: UserBodyLogin): Promise<UserLoginReturn> => {
        const foundUser = await this.user.findFirst({ where: { email: body.email } });
        
        if (!foundUser) {
            throw new AppError(404, "User not exists");
        }

        const compare = await bcrypt.compare(body.password, foundUser.password)

        if(!compare) {
            throw new AppError(401, "Email and password doesn't match")
        }

        const token = jwt.sign(body, process.env.JWT_SECRET as string);

        return { accessToken: token, user: userReturnSchema.parse(foundUser) }
    }

    public getUser = async (id: number): Promise<UserReturn> => {
        const user = await this.user.findFirst({ where: { id } })

        return userReturnSchema.parse(user)
    }
}