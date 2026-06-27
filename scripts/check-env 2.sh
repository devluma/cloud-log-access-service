#!/bin/bash
set -e

echo "Node: $(node -v)"
echo "Yarn: $(yarn -v)"
echo "Docker: $(docker -v)"
echo "Docker Compose: $(docker compose version)"
