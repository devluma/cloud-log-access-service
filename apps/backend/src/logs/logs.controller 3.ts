import { Controller, Get } from '@nestjs/common';
import { LogsService } from './logs.service';

@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Get('public')
  publicLogs() {
    return {
      message: 'Public logs endpoint',
      example: ['application/app.log'],
    };
  }

  @Get()
  listLogs() {
    return this.logsService.listLogs();
  }
}
