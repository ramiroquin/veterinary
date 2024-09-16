import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetModule } from './pet/pet.module';
import { OwnerModule } from './owner/owner.module';
import { VeterinarianModule } from './veterinarian/veterinarian.module';
import { AppointmentModule } from './appointment/appointment.module';
import { PetServiceModule } from './pet-service/pet-service.module';
import { Appointment } from './appointment/entities/appointment.entity';
import { Owner } from './owner/entities/owner.entity';
import { Pet } from './pet/entities/pet.entity';
import { PetService } from './pet-service/entities/pet-service.entity';
import { Veterinarian } from './veterinarian/entities/veterinarian.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'admin123',
      database: 'veterinary',
      entities: [PetService, Appointment, Owner, Pet, Veterinarian],
      synchronize: true,
      autoLoadEntities: true,
    }),
    PetModule,
    OwnerModule,
    VeterinarianModule,
    AppointmentModule,
    PetServiceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
