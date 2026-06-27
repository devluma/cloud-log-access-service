export default () => ({
  port: Number(process.env.PORT || 3001),
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'dev-secret',
    expiresIn: process.env.JWT_EXPIRES_IN ?? '15m',
  },
  aws: {
    region: process.env.AWS_REGION || 'us-east-1',
    endpoint: process.env.AWS_ENDPOINT || 'http://localhost:4566',
    bucket: process.env.S3_BUCKET || 'sap-logs',
  },
});
