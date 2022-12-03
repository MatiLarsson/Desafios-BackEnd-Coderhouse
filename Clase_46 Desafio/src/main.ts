import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

// To start new nest project: nest new [name of project]

// To create a new resource: nest g resource [name of resource ex: tasks]

// To work with mongoose in nestjs: npm install @nestjs/mongoose mongoose

// To manage .env files we install: npm i @nestjs/config
