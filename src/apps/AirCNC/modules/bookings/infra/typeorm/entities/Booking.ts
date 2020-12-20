import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from '../../../../users/infra/typeorm/entities/User';
import Spot from '../../../../spots/infra/typeorm/entities/Spot';

@Entity('air_cnc_bookings')
class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  date: Date;

  @Column()
  approved: boolean;

  @Column()
  spot_id: string;

  @ManyToOne(() => Spot, { eager: true })
  @JoinColumn({ name: 'spot_id' })
  spot: Spot;

  @Column()
  user_id: string;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Booking;
