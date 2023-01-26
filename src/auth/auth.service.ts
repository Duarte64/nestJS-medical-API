import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/AuthLogin.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private users: AuthDto[];
  constructor(private jwtService: JwtService, private config: ConfigService) {
    this.users = [];
  }

  register(user: AuthDto): Promise<{ access_token: string }> {
    if (!this.userExists(user)) {
      this.users.push(user);
      return this.signToken(user);
    } else throw new Error('User already exists');
  }

  login(user: AuthDto): Promise<{ access_token: string }> {
    if (this.userExists(user)) {
      const registered = this.users.some(
        (u) => u.email === user.email && u.password === user.password,
      );
      if (registered) return this.signToken(user);
      else throw new Error('Invalid username or password');
    }
    throw new Error('User does not exist');
  }

  userExists(user: AuthDto): boolean {
    return this.users.some((u) => u.email === user.email);
  }

  getUserByEmail(email: string): AuthDto {
    return this.users.find((u) => u.email === email);
  }

  async signToken(user: AuthDto): Promise<{ access_token: string }> {
    const token = await this.jwtService.signAsync(
      { sub: user.email },
      { expiresIn: '15m', secret: this.config.get('JWT_SECRET') },
    );
    return { access_token: token };
  }
}
