import { Injectable } from '@nestjs/common';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

@Injectable()
export class S3Service {
  private readonly client = new S3Client({
    region: process.env.AWS_REGION || 'us-east-1',
    endpoint: process.env.AWS_ENDPOINT || 'http://localhost:4566',
    forcePathStyle: true,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'test',
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'test',
    },
  });

  private readonly bucket = process.env.S3_BUCKET || 'sap-logs';

  async listLogs() {
    const result = await this.client.send(
      new ListObjectsV2Command({
        Bucket: this.bucket,
      }),
    );

    return result.Contents?.map((item) => ({
      key: item.Key,
      size: item.Size,
      lastModified: item.LastModified,
    })) ?? [];
  }
}
