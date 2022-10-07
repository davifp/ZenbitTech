import { Body, Controller, Post } from '@nestjs/common';
import { MessageService } from './message.service';
import { Message as MessageModel } from '@prisma/client';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('post')
  async createMessage(
    @Body()
    messageData: {
      name: string;
      email: string;
      message: string;
    },
  ): Promise<MessageModel> {
    return this.messageService.createMessage(messageData);
  }
}
