import { Module } from '@nestjs/common';
import { AwsModule } from '../aws/aws.module';
import { LogsController } from './logs.controller';
import { LogsService } from './logs.service';

@Module({
  imports: [AwsModule],
  controllers: [LogsController],
  providers: [LogsService],
})
export class LogsModule {}
