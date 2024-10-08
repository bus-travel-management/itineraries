import { Module } from '@nestjs/common';
import { ItinerariesModule } from './itineraries/itineraries.module';

@Module({
  imports: [ItinerariesModule],
})
export class AppModule {}
