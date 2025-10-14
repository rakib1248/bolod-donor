import { UpdateDonorDto } from './dto/update-donor.dto';
import { CreateDonorDto } from './dto/create-donor.dto';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DonorService {
  constructor(private prisma: PrismaService) {}

  /**
   * get donor
   */
  async findAll() {
    return await this.prisma.donor.findMany();
  }

  /**
   * create  donor user
   */
  async create(dto: CreateDonorDto) {
    return await this.prisma.donor.create({
      data: {
        ...dto,
        dob: dto.dob ? new Date(dto.dob) : null,
        lastDonate: dto.lastDonate ? new Date(dto.lastDonate) : null,
      },
    });
  }

  /**
   * get single Donor
   */
  async findOne(id: string) {
    return await this.prisma.donor.findUnique({
      where: { id },
    });
  }

  /**
   * update DOnor
   */
  async update(id: string, updateDonorDto: UpdateDonorDto) {
    return await this.prisma.donor.update({
      where: { id },
      data: updateDonorDto,
    });
  }
  /**
   * delete donor
   */
  async remove(id: string) {
    return await this.prisma.donor.delete({
      where: { id },
    });
  }
}
