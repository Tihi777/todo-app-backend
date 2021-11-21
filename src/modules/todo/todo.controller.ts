import { Body, Controller, Delete, Get, Inject, Param, Patch, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ClientProxy } from '@nestjs/microservices';

@Controller('todo')
export class TodoController {
  constructor(@Inject('TODOS_SERVICE') private readonly client: ClientProxy) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.client.send('create-todo', createTodoDto);
  }

  @Get()
  findAll() {
    return this.client.send('get-todos', '');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.client.send('get-todo', id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.client.send('update-todo', { id, updateTodoDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.client.send('remove-todo', id);
  }
}
