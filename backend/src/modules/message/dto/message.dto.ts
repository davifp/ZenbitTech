import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsEmail,
} from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty({ message: 'Name cannot be empty' })
  @MinLength(3, { message: 'Name must have at least 3 characters' })
  @ApiProperty()
  name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'E-mail cannot be empty' })
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Message cannot be empty' })
  @MinLength(5, { message: 'Message must have at least 5 characters' })
  @MaxLength(500, { message: 'Max characters allowed is 500' })
  @ApiProperty()
  message: string;
}
