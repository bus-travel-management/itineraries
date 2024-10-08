import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { envs } from '../src/config';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: envs.postgresHost,
  port: envs.postgresPort,
  username: envs.postgresUser,
  password: envs.postgresPassword,
  database: envs.postgresDB,
  entities: [],
  synchronize: false,
};
