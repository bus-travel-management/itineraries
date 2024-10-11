import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Itinerary } from './itinerary.entity';
import { Seat } from './seats.entity';

@Entity('buses')
export class Bus {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ unique: true })
  plate: string;

  @Column()
  operator: string;

  @Column()
  seatType: string;

  @Column()
  seatCount: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => Itinerary, (itinerary) => itinerary.bus)
  itineraries: Itinerary[];

  @OneToMany(() => Seat, (seat) => seat.bus)
  seats: Seat[];
}
