import { prisma } from "../database/prisma";
import { CategoryCreate } from "../interfaces";

export class CategoryServices {
    public create = async (body: CategoryCreate): Promise<CategoryCreate> => {
        return await prisma.category.create({ data: body })
    }

    public delete = async (id: number): Promise<void> => {
        await prisma.category.delete({ where: { id } })
    }
}