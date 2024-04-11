import { prisma } from "../database/prisma";
import { TCategoryCreate } from "../schemas/category.schema";

export class CategoryServices {
    async create(body: TCategoryCreate) {
        const data = await prisma.category.create({ data: body })

        return data
    }

    delete() {

    }
}