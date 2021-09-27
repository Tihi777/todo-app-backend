import { TodoStatus } from '../models/todo-status';

export class Todo {
  id: string;
  title: string;
  createdAt: Date;
  status: TodoStatus;
}
