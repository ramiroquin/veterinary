import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PetServiceService } from './pet-service.service';
import { CreatePetServiceDto } from './dto/create-pet-service.dto';
import { UpdatePetServiceDto } from './dto/update-pet-service.dto';

@Controller('pet-service')
export class PetServiceController {
  constructor(private readonly petServiceService: PetServiceService) {}

  @Post()
  create(@Body() createPetServiceDto: CreatePetServiceDto) {
    return this.petServiceService.create(createPetServiceDto);
  }

  @Get()
  findAll() {
    return this.petServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petServiceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePetServiceDto: UpdatePetServiceDto,
  ) {
    return this.petServiceService.update(+id, updatePetServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petServiceService.remove(+id);
  }
}
