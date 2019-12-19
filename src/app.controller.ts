import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import G = require('glob');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('cats')
export class CatsController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
