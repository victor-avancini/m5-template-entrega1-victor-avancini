import { prisma } from "../database/prisma";
import { TCategoryCreate } from "../interfaces/category.interfaces";

export class CategoryServices {
    async create(body: TCategoryCreate) {
        const data = await prisma.category.create({ data: body })

        return data
    }

    async delete(id: number) {
        await prisma.category.delete({ where: { id } })
    }
}