import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from '../../../../users/infra/typeorm/entities/User';

import Tech from './Tech';

@Entity('air_cnc_spots')
class Spot {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  thumbnail: string;

  @Column()
  company: string;

  @Column()
  price: number;

  @OneToMany(() => Tech, tech => tech.spot, { cascade: true })
  techs: Tech[];

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Spot;
