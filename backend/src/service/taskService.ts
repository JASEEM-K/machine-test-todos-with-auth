import { ErrorMessage } from "../lib/error.js";
import TaskModel from "../model/TaskModel.js";
import type { ICreateTask, IUpdateTask } from "../types/task.type.js";

export class TaskService {
    async createTask(params: ICreateTask) {
        const task = await TaskModel.create(params);
        return task;
    }
    async deleteTask(id: string) {
        return await TaskModel.findById(id);
    }
    async updateTask(id: string, params: IUpdateTask) {
        const task = await TaskModel.findById(id);
        if (!task) {
            throw new ErrorMessage("Task not found", "task-serv-update", 404);
        }
        const newTask = await TaskModel.findByIdAndUpdate(id, params);
        return newTask;
    }
    async getTasks(user: string) {
        const tasks = await TaskModel.find({ user });
        return tasks;
    }
}
