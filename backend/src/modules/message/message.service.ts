import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class MessageService {
  async create(data: Prisma.MessageCreateInput) {}
}
