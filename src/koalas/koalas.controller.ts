import {
  Controller,
  Get,
  Req,
  Post,
  Headers,
  Param,
  Body,
} from '@nestjs/common';
import { Request } from 'express';
import { KoalasService } from './koalas.service';
import { Koala } from './koalas.interface';

export class CreateKoalaDto {
  name: string;
  age: number;
  softness: number;
}

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

  // or
  // @Get(':id')
  // getKoala(@Param('id') id): string {
  //   return `This action returns a #${id} koala`;
  // }

  @Post()
  create(@Body() koala: Koala): string {
    this.koalaService.create(koala);
    return 'OK';
  }
}
