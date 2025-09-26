import { TaskService } from "../service/taskService.js";
import type { ICreateTask, IUpdateTask } from "../types/task.type.js";

export class TaskController {
    async createTask(params: ICreateTask) {
        const task = await new TaskService().createTask(params);
        return task;
    }

    async delete(id: string, user: string) {
        const task = await new TaskService().deleteTask(id, user);
        return task;
    }

    async update(id: string, params: IUpdateTask) {
        const task = await new TaskService().updateTask(id, params);
        return task;
    }

    async get(id: string) {
        const task = await new TaskService().getTasks(id);
        return task;
    }
}
