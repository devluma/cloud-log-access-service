import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { LogsModule } from './logs/logs.module';
import { AwsModule } from './aws/aws.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    LogsModule,
    AwsModule,
    HealthModule,
  ],
})
export class AppModule {}
