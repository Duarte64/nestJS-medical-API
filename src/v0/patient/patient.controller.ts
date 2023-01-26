import { Controller, Req, UseGuards, Get } from '@nestjs/common';
import { PatientService } from './patient.service';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @UseGuards(JwtGuard)
  @Get()
  getPatient(@Req() req) {
    return req.user;
  }
}
