import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Spot from './Spot';

@Entity('air_cnc_techs')
class Tech {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  spot_id: string;

  @ManyToOne(() => Spot)
  @JoinColumn({ name: 'spot_id' })
  spot: Spot;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Tech;
