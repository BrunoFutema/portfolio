import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Spot;
