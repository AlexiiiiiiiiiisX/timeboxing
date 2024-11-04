import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post('create')
  async createTask(@Body() data: { title: string; description: string; start_time: string; end_time: string; userId: number }) {
    return this.tasksService.createTask(data);
  }
}
