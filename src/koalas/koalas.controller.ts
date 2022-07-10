import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { KoalasService } from './koalas.service';
import { Koala } from './koalas.interface';

@Controller('koalas')
export class KoalasController {
  constructor(private koalaService: KoalasService) {}

  @Get()
  async findAll(): Promise<Koala[]> {
    return this.koalaService.findAll();
  }

  @Get('first')
  getFirst(): Koala {
    return this.koalaService.getFirst();
  }

  @Get(':id')
  getKoala(@Param('id') id): Koala {
    return this.koalaService.getOne(id);
  }

  @Post()
  create(@Body() koala: Koala): string {
    this.koalaService.create(koala);
    return 'OK';
  }
}
