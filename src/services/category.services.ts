import { prisma } from "../database/prisma";
import { CategoryCreate, CategoryCreateResponse } from "../interfaces";

export class CategoryServices {
    private category = prisma.category;

    public create = async (body: CategoryCreate, userId: number): Promise<CategoryCreateResponse> => {
        const newCategory = { ...body, userId };
        // console.log(newCategory)

        return await this.category.create({ data: newCategory });
    }

    public delete = async (id: number): Promise<void> => {
        await this.category.delete({ where: { id } })
    }
}