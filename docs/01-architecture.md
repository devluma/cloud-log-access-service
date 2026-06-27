# Architecture

## Visão geral

O projeto é dividido em três blocos principais:

1. `apps/backend`: API NestJS responsável por autenticação, autorização e acesso aos logs.
2. `apps/frontend`: interface Next.js para login, dashboard e listagem de logs.
3. `packages/shared`: contratos compartilhados entre backend e frontend.

## Fluxo

```txt
Next.js -> NestJS BFF -> S3-compatible storage
                     -> LocalStack em desenvolvimento
                     -> AWS S3 em produção
```

## Segurança

- JWT com expiração curta.
- RBAC para separar `admin` e `user`.
- CORS restrito.
- Validação de DTOs.
- Sanitização de nomes de arquivos.
- Bucket privado em produção.
