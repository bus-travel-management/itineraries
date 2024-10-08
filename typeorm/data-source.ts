import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { envs } from '../src/config';

const commonConfig: DataSourceOptions = {
  type: 'postgres',
  host: envs.postgresHost,
  port: envs.postgresPort,
  username: envs.postgresUser,
  password: envs.postgresPassword,
  database: envs.postgresDB,
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  migrations: [__dirname + '/../typeorm/migrations/*.ts'],
  synchronize: false,
};

export const typeOrmConfig: TypeOrmModuleOptions = commonConfig;

export const AppDataSource = new DataSource(commonConfig);

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
