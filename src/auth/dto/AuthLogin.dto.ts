import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @ApiProperty({ description: 'Username', required: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description:
      'Password, must contain at least 1 number and 1 special character',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
