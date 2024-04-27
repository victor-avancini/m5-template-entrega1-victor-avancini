import { prisma } from "../database/prisma";
import { Task, TaskCreate, TaskUpdate } from "../interfaces";

export class TaskServices {
    public create = async (body: TaskCreate): Promise<Task> => {
        return await prisma.task.create({ data: body })
    }

    public readMany = async (search?: string): Promise<Array<Task>> => {
        return await prisma.task.findMany({ where: { category: { name: search } }, include: { category: true } })
    }

    public readOne = async (id: number): Promise<Task | null> => {
        return await prisma.task.findFirst({ where: { id }, include: { category: true } })
    }

    public update = async (id: number, body: TaskUpdate): Promise<Task> => {
        return await prisma.task.update({ where: { id }, data: body })
    }

    public delete = async (id: number): Promise<void> => {
        await prisma.task.delete({ where: { id } })
    }
}