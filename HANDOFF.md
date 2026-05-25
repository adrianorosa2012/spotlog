# HANDOFF — Continuação do projeto Spotlog

> Este arquivo é a passagem de bastão entre sessões do Claude.
> Se você (Claude) acabou de abrir uma sessão nova nesta pasta, **leia este arquivo até o fim** antes de qualquer coisa.

## Contexto

- **Projeto**: Spotlog — SaaS de prospecção, CRM e propostas com agente SDR IA.
- **Stack**: Next.js 15 + TS + Tailwind + Supabase + Vercel.
- **Multi-tenant** por `organization_id` com RLS.
- **Memória global** completa em `~/.claude/projects/C--Users-user-Downloads/memory/spotlog_project.md`.

## Estado atual (atualizado a cada sessão)

### ✅ Pronto
- Código base completo: site público, auth, dashboard, CRM, pipeline, prospecção, cadências, propostas, painel de integrações, adapters plugáveis (IA, e-mail, WhatsApp, Apollo, Google Places).
- `.env.local` com `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` do projeto `rzwynleqbuwnzeahgmzp`.
- `.mcp.json` configurado pro Supabase Spotlog (já aprovado e autenticado pelo user).
- Git inicializado, 3 commits no `main`, remote `origin → https://github.com/adrianorosa2012/spotlog.git`.
- Branding 100% renomeado pra **Spotlog** (header, footer, hero, README, package.json).

### ⏳ Próximos passos prioritários (NESTA ORDEM)

#### 1. Rodar a migration SQL no Supabase Spotlog
- Você (Claude) agora tem MCP do Supabase Spotlog ativo. Use `mcp__supabase__list_tables` pra confirmar que o projeto é o certo (deve estar VAZIO ou com pouca coisa — não pode aparecer `appointments`/`clinics` que é do Agendai).
- Conteúdo da migration: `supabase/migrations/20260101000000_init_schema.sql` (925 linhas).
- Aplica em chunks via `mcp__supabase__apply_migration` (o arquivo todo de uma vez pode estourar limite).
- Divide assim:
  1. Extensões + enums + helper functions (linhas ~1-130)
  2. Tabelas core: organizations, profiles, members, companies, contacts, leads (linhas ~131-300)
  3. Pipelines + deals + activities (linhas ~301-400)
  4. Sequences + enrollments + messages (linhas ~401-520)
  5. Price tables + products + proposals (linhas ~521-650)
  6. Prospecting + integrations + webhooks + notifications + audit (linhas ~651-770)
  7. Triggers + RLS policies + seed_default_pipeline + create_organization RPC (linhas ~771-925)

#### 2. Validar
- `mcp__supabase__list_tables` → deve listar ~30 tabelas (organizations, profiles, contacts, deals, etc.)
- `mcp__supabase__get_advisors` → verificar warnings de RLS (esperado: tudo OK pq RLS já está habilitado e com policies).

#### 3. Push GitHub
- Repo `adrianorosa2012/spotlog` está VAZIO esperando push.
- User não tem `gh` CLI. Caminhos:
  - **A**: User cria PAT em https://github.com/settings/tokens/new?scopes=repo,workflow → cola pra você → você roda push com URL `https://USER:TOKEN@github.com/adrianorosa2012/spotlog.git`.
  - **B**: User roda `git push -u origin main` no PowerShell → popup do GCM autentica com conta `adrianorosa2012`.
- IMPORTANTE: GCM tinha credencial em cache de `adrianrosa1` (conta do Sorteio) → já foi limpa com `cmdkey /delete:LegacyGeneric:target=git:https://github.com`. Próximo push deve abrir popup limpo.

#### 4. Deploy Vercel
- User já tem aba aberta em vercel.com/new com o repo `adrianorosa2012/spotlog` colado (deu erro de "repository has no files" — vai resolver com o push).
- Time/org Vercel: `onlogjf-1751's projects` (visível na aba do browser do user).
- **Env vars pra configurar na Vercel** (copia exatamente do `.env.local`):
  - `NEXT_PUBLIC_SUPABASE_URL=https://rzwynleqbuwnzeahgmzp.supabase.co`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY=` (anon do `.env.local`)
  - `SUPABASE_SERVICE_ROLE_KEY=` (service_role do `.env.local`)
  - `NEXT_PUBLIC_APP_URL=https://<dominio-vercel>.vercel.app` (vai sair no deploy)
  - `WEBHOOK_SECRET=` (gera uma string aleatória grande)

#### 5. Pós-deploy
- Cron `/api/cadence/tick` (15min) e `/api/prospecting/run` (6h) já configurados em `vercel.json`.
- User precisa abrir o app em produção, criar conta, e configurar integrações em `/app/admin/integracoes` (OpenAI, Resend, Evolution, Apollo etc.).

## Regras do user (NÃO ESQUECER — estão na memória global)

- **Não-dev** — sempre WHERE TO CLICK, passo numerado, sem jargão.
- **NUNCA simulações/demos** — só features end-to-end reais com dados/chaves reais.
- **NUNCA quebrar o que funciona** — SELECT OK; UPDATE/DELETE no banco/código de prod precisa aprovação.
- **Discutir antes de construir** tarefa não-trivial.
- **Autonomia após plano aprovado** — não fica reperguntando passos óbvios.
- **NUNCA inventar nem afirmar com dúvida** — se não sei, dizer "não sei".

## Confirmação que a sessão nova está no projeto certo

Antes de qualquer ação no banco, rodar:
```
mcp__supabase__list_tables(schemas=["public"])
```

Se aparecer `appointments`, `clinics`, `professionals` → MCP está apontando pro Agendai, ABORTAR.
Se aparecer vazio ou só `migrations` → MCP correto no Spotlog, prosseguir.

---

**Última atualização**: 2026-05-25 18:35 (sessão #1, no chat `.claude/Spotlog`).
