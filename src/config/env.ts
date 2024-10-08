import 'dotenv/config';

import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  KAFKA_SERVERS: string[];
  POSTGRES_DB: string;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_HOST: string;
  POSTGRES_PORT: number;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    KAFKA_SERVERS: joi.array().items(joi.string()).required(),
    POSTGRES_DB: joi.string().required(),
    POSTGRES_USER: joi.string().required(),
    POSTGRES_PASSWORD: joi.string().required(),
    POSTGRES_HOST: joi.string().required(),
    POSTGRES_PORT: joi.number().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate({
  ...process.env,
  KAFKA_SERVERS: process.env.KAFKA_SERVERS?.split(','),
});

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  kafkaServers: envVars.KAFKA_SERVERS,
  postgresDB: envVars.POSTGRES_DB,
  postgresUser: envVars.POSTGRES_USER,
  postgresHost: envVars.POSTGRES_HOST,
  postgresPassword: envVars.POSTGRES_PASSWORD,
  postgresPort: envVars.POSTGRES_PORT,
};
