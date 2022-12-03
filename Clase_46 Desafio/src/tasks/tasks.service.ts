import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './schemas/task.schema';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name) private tasksModel: Model<TaskDocument>,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    return this.tasksModel.create(createTaskDto);
  }

  findAll() {
    return this.tasksModel.find().lean();
  }

  findOne(id: string) {
    return `This action delivers a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action deletes a #${id} task`;
  }
}
