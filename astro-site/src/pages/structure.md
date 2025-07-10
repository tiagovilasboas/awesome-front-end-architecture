---
layout: ../layouts/BaseLayout.astro
title: "Structure, Folders & Boundaries"
---

## 🏢 Structure, Folders & Boundaries

- `/features/*` → domain-based folders
- `/shared/*` → common utilities, components, hooks
- `/app/` → root composition, routes, config
- `/services/` → API, side effects, logic

📌 Use tools like **Turborepo**, **Nx**, **ESLint boundaries**, and **Storybook** to enforce architecture in practice.

### Heurísticas para organizar pastas

1. **Domain-First vs Type-First** – Em times grandes, prefira *domain-first* (`/checkout`, `/auth`) em vez de `/components`, `/services`. Isso facilita encontrar tudo relacionado a uma feature.
2. **Camadas claras** – Dentro de cada domínio, separe `ui/`, `application/`, `infrastructure/` inspiradas em Clean Architecture.
3. **Public vs Private** – Exporte somente o que deve ser reutilizado; o resto fica encapsulado no domínio.

### Monorepo na prática

• **Turborepo** e **Nx** oferecem caching e pipelines paralelos. Configure targets `build`, `test`, `lint` por pacote.  
• Use `package.json#workspaces` para isolar dependências pesadas e reduzir tempo de CI.

> A estrutura ideal evolui com o produto. Faça *refactorings* incrementais em vez de tentar acertar tudo no início.