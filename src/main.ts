import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { envs } from './config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: envs.kafkaServers,
        },
        consumer: {
          groupId: 'itineraries',
        },
      },
    },
  );

  await app.listen();

  console.log(`Kafka Microservice is running`);
}
bootstrap();
