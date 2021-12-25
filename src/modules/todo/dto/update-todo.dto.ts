import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { TodoStatus } from '../models/todo-status';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsOptional()
  @IsEnum(TodoStatus)
  status?: TodoStatus;
}
