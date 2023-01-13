import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

// Exception filters모듈 사용
// 간단처리용이

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const error = exception.getResponse(); //내가생성한 error 메세지

    // express와 같음 => res.status(400).send({ssaㄹㅁㅇㄹd;}) json형식
    response.status(status).json({
      message: error,
      success: false, //바꿔도됌
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
//response 순서  미들웨어 -> 컨트롤러 -> 서비스 -> exception순서로
