import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
  imports: [PrismaModule]
})
export class UsersModule {}
