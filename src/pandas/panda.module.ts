import { Module } from '@nestjs/common';
import { PandasResolver } from './panda.resolver';
import { PandasService } from './panda.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { CitiesService } from './city.service';
import { DbService } from './db.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
  ],
  controllers: [],
  providers: [PandasService, PandasResolver, CitiesService, DbService],
})
export class PandasModule {}
