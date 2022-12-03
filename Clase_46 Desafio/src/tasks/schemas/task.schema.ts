// We rename folder name and entity file to 'schema' just to suit mongoose style
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop({ default: 'task' })
  title: string;

  @Prop()
  description: string;

  @Prop({ default: false, required: true })
  done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
