import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {} //의존성 주입 (express에서는 파일을 import함)

  @Get('hello/:id/:name') // 기능첨가
  getHello(@Req() req: Request, @Body() Body, @Param() param): string {
    console.log(Body, param);
    return this.appService.getHello();
  }
}

// @ : 데코레이터로 함수나 클래스에 기능첨가해주는것, 재사용성에 좋음
// router.get('/', ...) => @Get('/') getHello()
