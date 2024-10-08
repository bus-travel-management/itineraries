import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('itineraries')
export class ItinerariesController {
  constructor() {}

  @MessagePattern('find_all')
  findAllItineraries() {
    return 'esto es una prueba';
  }

  @MessagePattern('find_one')
  findItineraries(@Payload() payload: { uuid: string }) {
    console.log('find_one_product', payload);

    return {
      message: 'This action finds a new itinerary with a uuid: ' + payload.uuid,
    };
  }
}
