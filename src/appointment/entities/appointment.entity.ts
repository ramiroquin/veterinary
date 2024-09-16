import { PetService } from 'src/pet-service/entities/pet-service.entity';
import { Pet } from 'src/pet/entities/pet.entity';
import { Veterinarian } from 'src/veterinarian/entities/veterinarian.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @ManyToOne(() => Pet, (pet) => pet.appointments)
  pet: Pet;

  @ManyToOne(() => Veterinarian, (veterinarian) => veterinarian.appointments)
  veterinarian: Veterinarian;

  @ManyToMany(() => PetService)
  @JoinTable()
  pet_services: PetService[];
}
