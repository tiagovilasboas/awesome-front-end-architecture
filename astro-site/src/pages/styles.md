---
layout: ../layouts/BaseLayout.astro
title: "Front-End Architectural Styles"
---

## 🧠 Front-End Architectural Styles

- **SPA / CSR / SSR / SSG** – choose based on SEO, TTI, and infra  
  [Next.js Rendering](https://nextjs.org/docs/basic-features/pages#static-generation-recommended)

- **Clean Architecture for UI** – isolate domain logic from framework dependencies  
  [Awesome Clean Architecture](https://github.com/pvarentsov/awesome-clean-architecture)

- **Modular Front-End** – build decoupled services and shareable libraries  
  [Nx Docs](https://nx.dev/concepts/monorepos)

- **Micro Frontends** – compose independent apps via Module Federation, Single-SPA  
  [micro-frontends.org](https://micro-frontends.org/)

- **Island Architecture** – SSR shell + hydrated interactive islands (Astro, Qwik)  
  [Astro Docs](https://docs.astro.build/core-concepts/islands/)