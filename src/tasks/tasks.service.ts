import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllTasks(): Promise<Task[]> {
    return this.prisma.task.findMany({
      include: {
        user: true, // Incluye la información del usuario relacionado
      },
    });
  }

  async createTask(data: { title: string; description: string; start_time: string; end_time: string; userId: number }): Promise<Task> {
    return this.prisma.task.create({
      data: {
        title: data.title,
        description: data.description,
        start_time: data.start_time,
        end_time: data.end_time,
        userId: data.userId,
      },
    });
  }
}
