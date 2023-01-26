import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class AppointmentRequestDto {
  @ApiProperty({ description: 'Specialty', required: true })
  @IsString()
  @IsNotEmpty()
  specialty: string;

  @ApiProperty({ description: 'Doctor', required: true })
  @IsString()
  @IsNotEmpty()
  doctor: string;

  @ApiProperty({ description: 'DateTime', required: true })
  @IsDateString()
  @IsNotEmpty()
  date: Date;
}
