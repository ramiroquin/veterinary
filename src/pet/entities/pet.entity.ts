import { Appointment } from 'src/appointment/entities/appointment.entity';
import { Owner } from 'src/owner/entities/owner.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  species: string;

  @Column()
  breed: string;

  @Column()
  birthDate: Date;

  @ManyToOne(() => Owner, (owner) => owner.pets)
  owner: Owner;

  @OneToMany(() => Appointment, (appointment) => appointment.pet)
  appointments: Appointment[];
}
