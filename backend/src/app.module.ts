import { Module } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';
import { ModuleModule } from './message/module/module.module';
import { MessageModule } from './modules/message/message.module';

@Module({
  imports: [MessagesModule, ModuleModule, MessageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
