import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(name: string, description: string): Task {
    const task: Task = {
      id: uuidv4(),
      name,
      description,
      status: TaskStatus.DONE,
    };

    this.tasks.push(task);
    return task;
  }
}
