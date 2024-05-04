import { prisma } from "../database/prisma";
import { Task, TaskCreate, TaskSchemaRead, TaskUpdate } from "../interfaces";
import { taskSchemaRead } from "../schemas";

export class TaskServices {
    private task = prisma.task;
    // public create = async (body: TaskCreate): Promise<Task> => {
    //     return await this.task.create({ data: body })
    // }

    public create = async (body: TaskCreate, userId: number): Promise<Task> => {
        const newTask = { ...body, userId };

        return await this.task.create({ data: newTask })
    }

    public readMany = async (search?: string, userId?: number): Promise<Array<TaskSchemaRead>> => {
        if (!search) {
            const response = await this.task.findMany({ where: { userId }, include: { category: true } })

            return taskSchemaRead.array().parse(response)
        }

        const response = await this.task.findMany({ where: { category: { name: search } }, include: { category: true } })

        return taskSchemaRead.array().parse(response)
    }

    public readOne = async (id: number): Promise<Task | null> => {
        return await this.task.findFirst({ where: { id }, include: { category: true } })
    }

    public update = async (id: number, body: TaskUpdate): Promise<Task> => {
        return await this.task.update({ where: { id }, data: body })
    }

    public delete = async (id: number): Promise<void> => {
        await this.task.delete({ where: { id } })
    }
}