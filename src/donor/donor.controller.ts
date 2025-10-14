import { DonorService } from './donor.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateDonorDto } from './dto/create-donor.dto';
import { UpdateDonorDto } from './dto/update-donor.dto';

@Controller('donor')
export class DonorController {
  constructor(private readonly donorService: DonorService) {}

  @Get()
  findAll() {
    return this.donorService.findAll();
  }

  @Post()
  create(@Body(ValidationPipe) dto: CreateDonorDto) {
    return this.donorService.create(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donorService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) updateDonorDto: UpdateDonorDto,
  ) {
    return this.donorService.update(id, updateDonorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donorService.remove(id);
  }
}
