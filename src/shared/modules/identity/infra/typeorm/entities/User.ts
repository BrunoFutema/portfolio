import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  email_confirmed: boolean;

  @Column()
  phone_number: number;

  @Column()
  phone_number_confirmed: boolean;

  @Column()
  password_hash: string;

  @Column()
  security_stamp: string;

  @Column()
  two_factor_enabled: boolean;

  @Column()
  access_failed_count: number;

  @Column()
  lockout_enabled: boolean;

  @Column()
  lockout_end_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}

export default User;
