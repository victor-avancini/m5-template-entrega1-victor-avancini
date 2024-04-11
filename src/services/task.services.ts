import { prisma } from "../database/prisma";
import { TTask, TTaskCreate, TTaskUpdate } from "../schemas/task.schemas";

export class TaskServices {
    async create(body: TTaskCreate) {
        const data = await prisma.task.create({ data: body });

        return data;
    }

    async findMany() {
        const data = await prisma.task.findMany();

        return data;
    }

    async findOne(id: number) {
        const data = await prisma.task.findFirst({ where: { id } });

        return data;
    }

    async update(id: number, body: TTaskUpdate): Promise<TTask> {
        const data = await prisma.task.update({ where: { id }, data: body });

        return data;
    }

    async delete(id: number): Promise<void> {
        await prisma.task.delete({ where: { id } })
    }
}