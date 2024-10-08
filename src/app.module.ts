import { Module } from '@nestjs/common';
import { ItinerariesModule } from './itineraries/itineraries.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../typeorm/data-source';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ItinerariesModule],
})
export class AppModule {}
