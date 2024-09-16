import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Appointment } from './entities/appointment.entity';
import { plainToInstance } from 'class-transformer';
import { Pet } from 'src/pet/entities/pet.entity';
import { Veterinarian } from 'src/veterinarian/entities/veterinarian.entity';
import { PetService } from 'src/pet-service/entities/pet-service.entity';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>,
    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,
    @InjectRepository(Veterinarian)
    private readonly veterinarianRepository: Repository<Veterinarian>,
    @InjectRepository(PetService)
    private readonly petServiceRepository: Repository<PetService>,
  ) {}

  async create(
    createAppointmentDto: CreateAppointmentDto,
  ): Promise<Appointment> {
    const pet = await this.petRepository.findOneBy({
      id: createAppointmentDto.petId,
    });
    const veterinarian = await this.veterinarianRepository.findOneBy({
      id: createAppointmentDto.veterinarianId,
    });
    const petServices = await this.petServiceRepository.findOneBy({
      id: In(createAppointmentDto.petServicesId),
    });
    const appointment = plainToInstance(Appointment, {
      ...createAppointmentDto,
      pet,
      veterinarian,
      petServices,
    });
    return await this.appointmentRepository.create(appointment);
  }

  async findAll(): Promise<Appointment[] | null> {
    return await this.appointmentRepository.find();
  }

  async findOne(id: number): Promise<Appointment | null> {
    return await this.appointmentRepository.findOneBy({ id });
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return `This action updates a #${id} appointment`;
  }

  async remove(id: number): Promise<void> {
    await this.appointmentRepository.delete(id);
  }
}
