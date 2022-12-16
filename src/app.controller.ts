import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/agent')
  getAgent(): any {
    return { name: 'Abello Kings', msg: 'Hello World' };
  }
}
