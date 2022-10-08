import { Injectable } from '@nestjs/common';
import { Prisma, Message } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateMessageDto } from './dto/message.dto';

@Injectable()
export class MessageService {
  constructor(private prisma: PrismaService) {}

  async listMessages(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.MessageWhereUniqueInput;
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput;
  }): Promise<Message[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.message.findMany({ skip, take, cursor, where, orderBy });
  }

  async createMessage(data: CreateMessageDto): Promise<Message> {
    return this.prisma.message.create({
      data,
    });
  }
}
