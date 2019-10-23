import { Controller, Get, Req, Post, HttpCode, Header, Redirect, Query, Param, Body, Put, Delete } from '@nestjs/common';
import { Request } from 'express';
import { Observable, of } from 'rxjs';

// DTO
import { CatsDto, UpdateCatDto, ListAllEntities } from './dto/cats.dto';

// services
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {

  constructor(private readonly catsService: CatsService) {}


  @Get()
  findAll(@Query() query: ListAllEntities): string {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get('all')
  findAllReq(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  /**
   * @desc POST
   * @param createCatDto
   */
  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  async create(@Body() createCatDto: CatsDto) {
    return 'This action adds a new cat';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }

  // ======================= misc tests
  @Get('ab*cd')
  findAllMatches() {
    return 'This route uses a wildcard';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get()
  findAllCats(): Observable<any[]> {
    return of([]);
  }
}
