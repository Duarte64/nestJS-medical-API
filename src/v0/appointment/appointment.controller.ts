import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { AppointmentRequestDto } from './dto/appointment-request.dto';

@Controller('appointment')
export class AppointmentController {
  private appointments: any[];
  constructor(private readonly appointmentService: AppointmentService) {
    this.appointments = [];
  }

  @UseGuards(JwtGuard)
  @Get()
  getAppointment(@Req() req) {
    const { email } = req.user;
    return this.appointments.filter(
      (appointment) => appointment.patient.email === email,
    );
  }

  @UseGuards(JwtGuard)
  @Post()
  setAppointment(@Req() req, @Body() body: AppointmentRequestDto) {
    const newAppointment = { ...body, patient: req.user };
    return this.appointments.push(newAppointment);
  }
}
