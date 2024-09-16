import { Module } from '@nestjs/common';
import { PetServiceService } from './pet-service.service';
import { PetServiceController } from './pet-service.controller';

@Module({
  controllers: [PetServiceController],
  providers: [PetServiceService],
})
export class PetServiceModule {}
