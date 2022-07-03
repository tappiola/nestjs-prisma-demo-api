import { Test, TestingModule } from '@nestjs/testing';
import { KoalasController } from './koalas.controller';

describe('KoalasController', () => {
  let controller: KoalasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KoalasController],
    }).compile();

    controller = module.get<KoalasController>(KoalasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
