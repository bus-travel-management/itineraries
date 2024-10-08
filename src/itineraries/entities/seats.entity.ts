import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Itinerary } from './itinerary.entity';

@Entity('seats')
export class Seat {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  seatNumber: string;

  @Column({ default: true })
  isAvailable: boolean;

  @ManyToOne(() => Itinerary, (itinerary) => itinerary.seats)
  itinerary: Itinerary;
}
