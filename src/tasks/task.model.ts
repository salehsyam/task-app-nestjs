export interface Task {
  id: string;
  name: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = 'open',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
}
