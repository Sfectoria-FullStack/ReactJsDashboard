import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Interface } from 'readline';
const prisma = new PrismaService()
@Injectable()
export class UsersService {
  constructor(private readonly prisma:PrismaService){

  }
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data : createUserDto
    });
  }

  findAll() {
    return this.prisma.user.findMany({});
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

