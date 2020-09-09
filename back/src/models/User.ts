import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  nickname: string;

  @Column()
  name: string;

  @Column()
  password: string;
}

export default User;
