import { Appointment } from 'src/appointment/entities/appointment.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PetService {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @ManyToMany(() => Appointment, (appointment) => appointment.pet_services)
  appointments: Appointment[];
}
