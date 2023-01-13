import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { CatsModule } from './cats/cats.module';
import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CatsModule], //유저, cats모듈 추가
  controllers: [AppController],
  providers: [AppService],
})

//미들웨어 configure 메서드로 모듈입력함
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //소비자
    consumer.apply(LoggerMiddleware).forRoutes('*'); //바인딩
  }
}
