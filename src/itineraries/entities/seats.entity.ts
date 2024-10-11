import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Bus } from './bus.entity';

@Entity('seats')
export class Seat {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  seatNumber: string;

  @ManyToOne(() => Bus, (bus) => bus.seats)
  @JoinColumn({ name: 'bus_uuid', referencedColumnName: 'uuid' })
  bus: Bus;
}
