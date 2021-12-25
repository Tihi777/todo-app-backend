import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoService } from './todo.service';
import { UpdateTodoDto } from './dto/update-todo.dto';

@WebSocketGateway({ cors: { origin: '*' } })
export class TodoGateway {
  @WebSocketServer()
  server;

  constructor(private readonly todoService: TodoService) {}

  @SubscribeMessage('createTodo')
  create(@MessageBody() createTodoDto: CreateTodoDto) {
    this.todoService.create(createTodoDto);
    this.emitLoadTodos();
  }

  @SubscribeMessage('updateTodo')
  update(@MessageBody('id') id: string, @MessageBody('updateRequest') updateTodoDto: UpdateTodoDto) {
    this.todoService.update(id, updateTodoDto);
    this.emitLoadTodos();
  }

  @SubscribeMessage('deleteTodo')
  remove(@MessageBody('id') id: string) {
    this.todoService.remove(id);
    this.emitLoadTodos();
  }

  private emitLoadTodos() {
    const todos = this.todoService.findAll();
    this.server.emit('loadTodos', todos);
  }
}
