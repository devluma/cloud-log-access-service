# Cloud Log Access Service

Boilerplate inicial para uma aplicação de acesso seguro a logs em object storage usando:

- NestJS + TypeScript
- Next.js + React + TypeScript
- Docker Compose
- LocalStack S3
- JWT
- RBAC
- Monorepo com Yarn Workspaces

> Este boilerplate não contém `node_modules` e não instala dependências automaticamente.

## Estrutura

```txt
apps/
  backend/      API NestJS
  frontend/     Web app Next.js
packages/
  shared/       Tipos, DTOs e constantes compartilhadas
infrastructure/
  localstack/   Scripts de inicialização do S3 local
docs/           Documentação técnica
scripts/        Scripts auxiliares
```

## Pré-requisitos

- Node.js 22 LTS
- Yarn via Corepack
- Docker Desktop
- AWS CLI, opcional para testes manuais

## Instalação

```bash
corepack enable
yarn install
```

## Rodar com Docker

```bash
docker compose up --build
```

## URLs locais

```txt
Frontend:   http://localhost:3000
Backend:    http://localhost:3001
LocalStack: http://localhost:4566
Swagger:    http://localhost:3001/docs
```

## Usuários mockados sugeridos

```txt
admin@sap.local / admin123
user@sap.local  / user123
```
