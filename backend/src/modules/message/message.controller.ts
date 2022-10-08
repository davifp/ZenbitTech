import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MessageService } from './message.service';
import { Message as MessageModel } from '@prisma/client';
import { CreateMessageDto } from './dto/message.dto';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async createMessage(
    @Body()
    createMessageDto: CreateMessageDto,
  ): Promise<MessageModel> {
    return this.messageService.createMessage(createMessageDto);
  }

  @Get()
  async getMessage(): Promise<MessageModel[]> {
    return this.messageService.listMessages({});
  }
}
