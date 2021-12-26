import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createHash } from 'crypto';

import { USERS } from '../../common/__mocks__/user';
import { User } from './entities/user.entity';
import jwtConstants from './constants/jwt-constants';

@Injectable()
export class AuthService {
  private users = USERS;

  constructor(private jwtService: JwtService) {}

  public authorizeByCredentials(email: string, password: string) {
    const user = this.findUserByAuth(email, password);

    if (!user) {
      throw new ForbiddenException("Email and password doesn't match");
    }

    return this.createJWTToken(user);
  }

  private findUserByAuth(email: string, password: string) {
    const hash = this.hashCredentials(email, password);
    return this.users.find((user) => user.email === email && user.password === hash);
  }

  private createJWTToken(user: User): string {
    const issues = { email: user.email, sub: user.id, sec: Date.now() };
    return this.jwtService.sign(issues, jwtConstants.tokenSettings);
  }

  private hashCredentials(email: string, password: string) {
    const saltedString = this.saltString(email, password);
    return createHash('sha256').update(saltedString).digest('hex');
  }

  private saltString(email: string, password: string) {
    return `${email}:${jwtConstants.salt}:${password}`;
  }
}
