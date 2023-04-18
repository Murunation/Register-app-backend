import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Appservice } from './app.service';

@Controller(`Products`)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('SingleProduct')
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller(`Products`)
export class AppControl {
  constructor(private readonly appService: Appservice) {}
  @Get('Single')
  getHi(): string {
    return this.appService.getHi();
  }
}
