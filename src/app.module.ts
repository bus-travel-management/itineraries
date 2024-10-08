import { Module } from '@nestjs/common';
import { ItinerariesModule } from './itineraries/itineraries.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../typeorm/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ItinerariesModule],
})
export class AppModule {}
