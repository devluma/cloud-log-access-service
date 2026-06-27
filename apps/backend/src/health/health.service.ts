import { Injectable } from '@nestjs/common';

import configuration from '../config/configuration';

@Injectable()
export class HealthService {
  check() {
    return {
      status: 'ok',
      service: 'cloud-log-access-service',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: configuration(),
    };
  }
}
