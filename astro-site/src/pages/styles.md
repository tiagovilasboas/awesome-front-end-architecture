---
layout: ../layouts/BaseLayout.astro
title: "Front-End Architectural Styles"
---

import Card from '../components/Card.astro'

## 🧠 Front-End Architectural Styles

<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
<Card title="SPA / CSR / SSR / SSG" href="/patterns/spa-ssr" description="Choose rendering strategy based on SEO, time-to-interactive and infrastructure." />

<Card title="Clean Architecture for UI" href="/patterns/clean-ui" description="Isolate domain logic from framework dependencies by applying Clean/Hexagonal principles." />

<Card title="Modular Front-End" href="/patterns/modular-frontend" description="Build decoupled services & shareable libraries, often in a monorepo." />

<Card title="Micro Frontends" href="/patterns/microfrontends" description="Compose independent apps via Module Federation, Single-SPA or similar runtimes." />

<Card title="Island Architecture" href="/patterns/island-architecture" description="SSR shell + hydrated interactive islands for ultra-fast performance (Astro, Qwik)." />
</div>

## Detalhes dos estilos

### SPA / CSR / SSR / SSG
* **SPA/CSR**: rápido após primeira carga, ideal para apps focados em interatividade (Gmail). SEO limitado.
* **SSR**: HTML enviado completo, ótimo para SEO e time-to-first-byte. Exige servidor Node (Next.js, Nuxt).
* **SSG**: páginas estáticas no build, CDN friendly (Astro, Hugo). Bom para blogs/docs.

### Clean Architecture para UI
Isola domínio e aplicação de detalhes de framework. Camadas:
`UI → Application → Domain ← Infrastructure`. Testes concentram-se no domínio. Facilita migração de framework (React → Vue).

### Modular Front-End
Monorepo com pacotes versionados. Uso de Nx/Turborepo para cache incremental. Compartilhamento de libs utilitárias e design system.

### Micro Frontends
Split por contexto de negócio. Cada MF deployado independentemente (Module Federation, Single-SPA). Benefícios: autonomia, risco isolado. Custo: infra + coordenação UX.

### Island Architecture
Renderiza shell no build, hidrata somente componentes interativos. Performance excepcional em sites de conteúdo. Ferramentas: Astro, Qwik, Marko.