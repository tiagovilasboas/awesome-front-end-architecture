---
layout: ../layouts/BaseLayout.astro
title: "Front-End Architectural Styles"
---

import Card from '../components/Card.astro'

## 🧠 Front-End Architectural Styles

<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
<Card title="SPA / CSR / SSR / SSG" href="https://nextjs.org/docs/basic-features/pages#static-generation-recommended" description="Choose rendering strategy based on SEO, time-to-interactive and infrastructure." />

<Card title="Clean Architecture for UI" href="https://github.com/pvarentsov/awesome-clean-architecture" description="Isolate domain logic from framework dependencies by applying Clean/Hexagonal principles." />

<Card title="Modular Front-End" href="https://nx.dev/concepts/monorepos" description="Build decoupled services & shareable libraries, often in a monorepo." />

<Card title="Micro Frontends" href="https://micro-frontends.org/" description="Compose independent apps via Module Federation, Single-SPA or similar runtimes." />

<Card title="Island Architecture" href="https://docs.astro.build/core-concepts/islands/" description="SSR shell + hydrated interactive islands for ultra-fast performance (Astro, Qwik)." />
</div>