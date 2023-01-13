import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

//express use와 비슷, 공급자 생성
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP'); //log로 찍히는 방식

  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(`${req.ip} ${req.method}`, req.originalUrl);

    res.on('finish', () => {
      this.logger.log(`마무리 후에 다시 콘솔 ${req.ip}`);
    });

    console.log(req.ip);
    next();
  }
}
