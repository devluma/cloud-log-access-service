import { Injectable } from '@nestjs/common';
import { S3Service } from '../aws/s3.service';

@Injectable()
export class LogsService {
  constructor(private readonly s3Service: S3Service) {}

  listLogs() {
    return this.s3Service.listLogs();
  }
}
