import { Injectable } from '@nestjs/common';
import { Prisma, Message } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class MessageService {
  constructor(private prisma: PrismaService) {}
  async createMessage(data: Prisma.MessageCreateInput): Promise<Message> {
    return this.prisma.message.create({
      data,
    });
  }
}
