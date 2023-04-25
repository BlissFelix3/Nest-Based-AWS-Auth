// auth.module.ts
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { LocalAuthGuard } from './local-auth.guard';
import { UserService } from './user.service';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'local' })],
  providers: [AuthService, LocalStrategy, LocalAuthGuard, UserService],
  exports: [AuthService, LocalAuthGuard],
})
export class AuthModule {}
