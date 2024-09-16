import { Injectable } from '@nestjs/common';
import { CreatePetServiceDto } from './dto/create-pet-service.dto';
import { UpdatePetServiceDto } from './dto/update-pet-service.dto';

@Injectable()
export class PetServiceService {
  create(createPetServiceDto: CreatePetServiceDto) {
    return 'This action adds a new petService';
  }

  findAll() {
    return `This action returns all petService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} petService`;
  }

  update(id: number, updatePetServiceDto: UpdatePetServiceDto) {
    return `This action updates a #${id} petService`;
  }

  remove(id: number) {
    return `This action removes a #${id} petService`;
  }
}
