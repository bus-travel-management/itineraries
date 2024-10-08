import { Injectable } from '@nestjs/common';

@Injectable()
export class ItinerariesService {
  findOne(id: number) {
    return `This action returns a #${id} itinerary`;
  }
}
