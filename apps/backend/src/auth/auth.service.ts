import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

const users = [
  { id: '1', email: 'admin@sap.local', password: 'admin123', role: 'admin' },
  { id: '2', email: 'user@sap.local', password: 'user123', role: 'user' },
];

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  login(dto: LoginDto) {
    const user = users.find(
      (item) => item.email === dto.email && item.password === dto.password,
    );

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    return {
      accessToken: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    };
  }
}
