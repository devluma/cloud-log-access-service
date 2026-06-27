#!/bin/bash
set -e

BUCKET_NAME=${S3_BUCKET:-sap-logs}

awslocal s3 mb "s3://${BUCKET_NAME}" || true

cat > /tmp/application.log <<'EOF'
2026-06-26 10:00:00 INFO Application started
2026-06-26 10:01:00 INFO User admin@sap.local logged in
2026-06-26 10:02:00 WARN Example warning log
EOF

cat > /tmp/auth.log <<'EOF'
2026-06-26 10:00:10 INFO Auth module initialized
2026-06-26 10:02:31 INFO JWT token issued
EOF

awslocal s3 cp /tmp/application.log "s3://${BUCKET_NAME}/application/application.log"
awslocal s3 cp /tmp/auth.log "s3://${BUCKET_NAME}/application/auth.log"

echo "LocalStack S3 bucket '${BUCKET_NAME}' initialized."
