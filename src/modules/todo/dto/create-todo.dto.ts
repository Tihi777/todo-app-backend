import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @MinLength(2)
  @MaxLength(56)
  title: string;
}
