import { hash, compare } from "bcryptjs";
import { prisma } from "../database/prisma"
import { UserBodyCreate, UserBodyGet, UserBodyLogin, UserLoginReturn, UserReturn } from "../interfaces";
import { userReturnSchema } from "../schemas";
import { sign } from "jsonwebtoken";
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

        const samePassword = await compare(body.password, foundUser.password)

        if (!samePassword) {
            throw new AppError(401, "Email and password doesn't match")
        }

        const secret = process.env.JWT_SECRET!;

        const token = sign({ name: foundUser.name }, secret, {
            expiresIn: "1h",
            subject: foundUser.id.toString()
        });

        return { accessToken: token, user: userReturnSchema.parse(foundUser) }
    }

    public getUser = async (body: UserBodyGet): Promise<UserReturn> => {
        const userEmail = body.email;

        const user = await this.user.findFirst({ where: { email: userEmail } })

        return userReturnSchema.parse(user)
    }
}