import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [UserModule, PrismaModule, TasksModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
