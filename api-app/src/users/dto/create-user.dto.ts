import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  fullName: string;
  @ApiProperty()
  @IsNumber()
  age: number;
}
