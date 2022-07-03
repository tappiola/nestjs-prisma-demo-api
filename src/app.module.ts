import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KoalasModule } from './koalas/koalas.module';
import { PandasModule } from './pandas/panda.module';

@Module({
  imports: [KoalasModule, PandasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
