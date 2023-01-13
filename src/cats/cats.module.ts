import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
// nest는 기본적으로 캡슐화가 되있기떄문에 @Module안에 export를 설정해줘야 서비스를 내보낼 수 있음 (공식문서 참고)
