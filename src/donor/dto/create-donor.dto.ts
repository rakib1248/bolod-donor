import { IsDateString, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateDonorDto {
  @IsString()
  fristName: string;

  @IsString()
  lastName: string;

  @IsOptional()
  @IsDateString() //"1999-05-21"
  dob?: string;

  @IsString()
  userId: string;

  @IsEmail()
  email: string;

  @IsString()
  cell: string;

  @IsString()
  bolodGroup: string;

  @IsOptional()
  @IsDateString()
  lastDonate?: string;
}
