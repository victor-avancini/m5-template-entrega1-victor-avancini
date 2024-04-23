import { prisma } from "../database/prisma";
import { CategoryCreate } from "../interfaces/category.interfaces";

export class CategoryServices {
    public create = async (body: CategoryCreate) => {
        return await prisma.category.create({ data: body })
    }

    public delete = async (id: number) => {
        await prisma.category.delete({ where: { id } })
    }
}