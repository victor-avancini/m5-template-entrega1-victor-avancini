import { prisma } from "../database/prisma";
import { TTask, TTaskCreate, TTaskUpdate } from "../interfaces/task.interfaces";

export class TaskServices {
    async create(categoryId: number, body: TTaskCreate): Promise<TTask> {
        const data = await prisma.task.create({ data: { categoryId, ...body } });

        return data;
    }

    async findMany(search?: string) {
        const data = await prisma.task.findMany({ where: { category: { name: search } }, include: { category: true } });

        return data;
    }

    async findOne(id: number) {
        const data = await prisma.task.findFirst({ where: { id }, include: { category: true } });

        return data;
    }

    async update(id: number, body: TTaskUpdate) {
        const data = await prisma.task.update({ where: { id }, data: body });

        return data;
    }

    async delete(id: number) {
        await prisma.task.delete({ where: { id } })
    }
}