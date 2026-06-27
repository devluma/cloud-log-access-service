import { Injectable } from '@nestjs/common';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

import configuration from '../config/configuration';

const s3Config = {
  region: configuration().aws.region,
  endpoint: configuration().aws.endpoint,
  forcePathStyle: true,
  credentials: {
    accessKeyId: configuration().aws.bucket,
    secretAccessKey: configuration().jwt.secret,
  },
};

@Injectable()
export class S3Service {
  private readonly client = new S3Client(s3Config);

  private readonly bucket = configuration().aws.bucket;

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
