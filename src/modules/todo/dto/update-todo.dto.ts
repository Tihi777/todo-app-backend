import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { IsEnum } from 'class-validator';
import { TodoStatus } from '../models/todo-status';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsEnum(TodoStatus)
  status: TodoStatus;
}
