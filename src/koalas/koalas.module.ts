import { Module } from '@nestjs/common';
import { KoalasController } from './koalas.controller';
import { KoalasService } from './koalas.service';

@Module({
  imports: [],
  controllers: [KoalasController],
  providers: [KoalasService],
})
export class KoalasModule {}
