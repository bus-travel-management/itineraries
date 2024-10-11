import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Bus } from './bus.entity';
import { Seat } from './seats.entity';

@Entity('itineraries')
export class Itinerary {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  originCity: string;

  @Column()
  destinationCity: string;

  @Column({ type: 'timestamp' })
  departureTime: Date;

  @Column({ type: 'timestamp' })
  arrivalTime: Date;

  @Column('decimal')
  price: number;

  @ManyToOne(() => Bus, (bus) => bus.itineraries)
  @JoinColumn({ name: 'bus_uuid', referencedColumnName: 'uuid' })
  bus: Bus;

  @ManyToOne(() => Seat)
  @JoinColumn({ name: 'seat_uuid', referencedColumnName: 'uuid' })
  seat: Seat;
}
