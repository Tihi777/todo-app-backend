import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { TodoStatus } from './models/todo-status';
import { v4 as uuidv4 } from 'uuid';
import { TODOS } from '../../common/__mocks__/todo';

@Injectable()
export class TodoService {
  todos: Todo[] = TODOS;

  create(createTodoDto: CreateTodoDto) {
    const id: string = uuidv4();
    const createdAt = new Date();
    const status = TodoStatus.OPEN;

    const createdTodo = { ...createTodoDto, id, createdAt, status };

    this.todos.push(createdTodo);

    return createdTodo;
  }

  findAll() {
    return this.todos;
  }

  findOne(id: string) {
    return this.todos.find((todo) => todo.id === id);
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    this.todos = this.todos.map((todo) => (todo.id === id ? { ...todo, ...updateTodoDto } : todo));

    return this.findOne(id);
  }

  remove(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);

    return null;
  }
}
