import { CatsService } from './cats.service';
import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';

// @UseFilters(HttpExceptionFilter)
// @UseInterceptors()
@Controller('cats')
export class CatsController {
  constructor(private readonly CatsService: CatsService) {}

  // Exception filter & Pipes => 에러처리!?
  @Get()
  getAllCat() {
    throw new HttpException('api is broken', 401); //nest 에러 인터페이스 -> json 형식으로 프론트와 협의를 할때는 에러처리를 디테일하게 다룰수도 있음
    //아예 json형식으로 커스텀도 가능
    return 'all cat';
  }

  //   동적라우팅 cats/:id, @Param 예시
  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe) param: number) {
    console.log(param);
    console.log(typeof param); //type지정 parseIntPipe -> 타입다르면 오류 (데이터유호성검사, 데이터 변환에 사용)
    return 'one cat';
  }

  @Post()
  @UseFilters(HttpExceptionFilter)
  createCat() {
    throw new HttpException('api is broken', 401); //HttpExceptionFilter필터링을 걸치고 시간이 나옴 json형식으로 나옴
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return;
  }

  @Delete(':id')
  deleteCat() {
    return 'delete service';
  }
}
