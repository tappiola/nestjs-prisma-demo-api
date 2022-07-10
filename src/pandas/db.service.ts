import {
  BeforeApplicationShutdown,
  INestApplication,
  INestApplicationContext,
  Injectable,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '.prisma/client';

export const configureForPrisma = (
  app: INestApplication | INestApplicationContext,
) => {
  const dbService: DbService = app.get(DbService);
  dbService.enableShutdownHooks(app);
};

@Injectable()
export class DbService
  extends PrismaClient
  implements OnModuleInit, BeforeApplicationShutdown
{
  async onModuleInit() {
    await this.$connect();
  }

  async beforeApplicationShutdown() {
    await this.$disconnect();
  }

  async enableShutdownHooks(app: INestApplication | INestApplicationContext) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
