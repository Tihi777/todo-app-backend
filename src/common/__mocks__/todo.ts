import { Todo } from '../../modules/todo/entities/todo.entity';
import { TodoStatus } from '../../modules/todo/models/todo-status';

export const TODOS: Todo[] = [
  {
    title: 'Buy coffee',
    id: '7b2a464d-baac-43a0-87d6-391c184271ff',
    createdAt: new Date('2021-09-27T08:26:27.367Z'),
    status: TodoStatus.OPEN,
  },
  {
    title: 'Go gym',
    id: 'a9026d6d-075f-41b2-b511-dc2dbe4c7c42',
    createdAt: new Date('2021-09-27T08:27:02.037Z'),
    status: TodoStatus.OPEN,
  },
  {
    title: 'Feed cat',
    id: '3daa664a-aac4-4e0d-bd35-e046196e1e88',
    createdAt: new Date('2021-09-27T08:27:31.740Z'),
    status: TodoStatus.OPEN,
  },
];
