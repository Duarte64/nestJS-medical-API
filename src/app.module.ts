import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PatientModule } from './v0/patient/patient.module';
import { ConfigModule } from '@nestjs/config';
import { AppointmentModule } from './v0/appointment/appointment.module';

@Module({
  imports: [
    AuthModule,
    PatientModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AppointmentModule,
  ],
})
export class AppModule {}
