import { Module } from '@nestjs/common';
import { TodoModule } from './modules/todo/todo.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [TodoModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
