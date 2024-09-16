import { Appointment } from 'src/appointment/entities/appointment.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Veterinarian {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  specialty: string;

  @OneToMany(() => Appointment, (appointment) => appointment.veterinarian)
  appointments: Appointment[];
}
