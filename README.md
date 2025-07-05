# 🧱 Awesome Front-End Architecture

> A curated list of articles, tools, patterns, and principles for scalable front-end architecture.  
> Designed for developers who want to move from "just coding" to structuring robust systems with long-term maintainability.

![GitHub Stars](https://img.shields.io/github/stars/tiagovilasboas/awesome-front-end-architecture?style=social)
![GitHub Forks](https://img.shields.io/github/forks/tiagovilasboas/awesome-front-end-architecture?style=social)
![Awesome](https://awesome.re/badge.svg)

---

## 📘 TL;DR

This list is a collection of resources I've personally used, applied, or referenced across 18 years of front-end development — from startups to fintechs to scalable SaaS platforms.

It includes guides, tools, and case studies that helped me build front-end applications with **clean architecture**, **layered components**, **performance**, and a **real impact on the product**.

---

## 📚 Index

- [Component Architecture Models](#component-architecture-models)
- [Front-End Architectural Models](#front-end-architectural-models)
- [Architecture & Design Patterns](#architecture--design-patterns)
- [Monorepo & Code Organization](#monorepo--code-organization)
- [State Management](#state-management)
- [Testing & CI/CD](#testing--cicd)
- [Performance](#performance)
- [PWA & Offline Strategy](#pwa--offline-strategy)
- [Talks & Case Studies](#talks--case-studies)
- [References](#references)
- [Other Awesome Lists](#other-awesome-lists)
- [About the Author](#about-the-author)

---

## 🧩 Component Architecture Models

- **Presentational & Container** — separates UI from logic using smart containers and dumb components. Great for testability and reuse.  
  👉 [Read more](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

- **Hooks & Context Co-location** — colocates logic/styles/tests next to components. Encourages modularity and single responsibility.  
  👉 [Colocation Guide](https://tkdodo.eu/blog/colocation)

- **Feature-based / Domain-Driven Structure** — organize code by domain (e.g. `/checkout`, `/auth`, `/profile`) instead of file type.  
  👉 [Folder Structures in React](https://www.smashingmagazine.com/2021/01/structuring-react-projects-folder-structure/)

- **Component-Driven Development (CDD)** — build UI components in isolation (Storybook etc) before wiring data and logic.  
  👉 [Storybook CDD](https://storybook.js.org/blog/component-driven-dev/)

- **Atomic Design** — structure components into atoms, molecules, organisms, templates, and pages.  
  👉 [Brad Frost's Article](https://bradfrost.com/blog/post/atomic-web-design/)

---

## 🏗️ Front-End Architectural Models

- **SPA / CSR / SSR / SSG** — rendering strategies depending on SEO, TTI, interactivity and infra constraints.  
  👉 [Next.js Docs](https://nextjs.org/docs/basic-features/pages#static-generation-recommended) · [SSG vs SSR](https://www.netlify.com/blog/2020/11/30/difference-between-server-side-rendering-and-static-site-generation/)

- **Micro Frontends** — split monoliths into independently deployed micro-apps using module federation, Single-SPA, or Web Components.  
  👉 [micro-frontends.org](https://micro-frontends.org/) · [Module Federation](https://webpack.js.org/concepts/module-federation/) · [Luca Mezzalira Book](https://leanpub.com/the-micro-frontends-book)

- **Island Architecture** — server-rendered shell with dynamic “islands” hydrated client-side only when needed. Used in Astro, Qwik, etc.  
  👉 [Astro Docs](https://docs.astro.build/core-concepts/islands/) · [Builder.io](https://www.builder.io/blog/island-architecture)

- **Clean / Hexagonal / Modular Architecture** — layered front-end with domain, services, and UI layers. Promotes separation of concerns and scalability.  
  👉 [Awesome Clean Architecture](https://github.com/pvarentsov/awesome-clean-architecture) · [Scaling Projects Clean](https://indepth.dev/posts/1360/scaling-your-project-with-clean-architecture/)

---

## 🧠 Architecture & Design Patterns

- [Scalable Front-End Architecture](https://martinfowler.com/articles/scalable-frontend-architecture.html)
- [React Patterns](https://reactpatterns.com/)
- [Screaming Architecture in Frontend](https://medium.com/javascript-in-plain-english/clean-architecture-for-frontend-applications-631c7aa779c7)

---

## 📁 Monorepo & Code Organization

- [Nx Monorepo Guide](https://nx.dev/concepts/monorepos)
- [Turborepo vs Lerna](https://blog.bitsrc.io/turborepo-vs-lerna-d4beabbcd64c)
- [Monorepo Tools](https://monorepo.tools/)

---

## 🌐 State Management

- [Zustand vs Redux vs Recoil](https://dev.to/tq-bit/zustand-vs-redux-vs-recoil-2c5p)
- [Colocation Best Practice](https://tkdodo.eu/blog/colocation)
- [React Context Performance](https://kentcdodds.com/blog/how-to-optimize-your-context-value)

---

## 🧪 Testing & CI/CD

- [Testing Pyramid](https://kentcdodds.com/blog/testing-pyramid)
- [Write Tests That Matter](https://kentcdodds.com/blog/write-tests)
- [CI/CD with Vercel](https://vercel.com/blog/gitops-on-vercel)

---

## 🚀 Performance

- [Core Web Vitals](https://web.dev/vitals/)
- [Frontend Performance Checklist](https://web.dev/fast/)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

## 📦 PWA & Offline Strategy

- [Service Workers Primer](https://developers.google.com/web/fundamentals/primers/service-workers)
- [Workbox by Google](https://developer.chrome.com/docs/workbox/)
- [Offline Fallback](https://web.dev/offline-fallback-page/)

---

## 🎤 Talks & Case Studies

- [Spotify Front-End Architecture](https://engineering.atspotify.com/2020/10/04/frontend-architecture-at-spotify/)
- [Netflix Tech Blog](https://netflixtechblog.com/)
- [Scaling UI Engineering](https://www.youtube.com/watch?v=5OjqD-ow8GE)

---

## 📚 References

All articles linked throughout this list were curated from real-world experience.  
Special thanks to creators like [Martin Fowler](https://martinfowler.com), [Brad Frost](https://bradfrost.com), [Kent C. Dodds](https://kentcdodds.com), [Luca Mezzalira](https://lucamezzalira.com), and the contributors behind Storybook, Astro, and Next.js.

---

## 📎 Other Awesome Lists

- [Awesome Front-End System Design](https://github.com/greatfrontend/awesome-front-end-system-design)
- [Awesome Clean Architecture](https://github.com/pvarentsov/awesome-clean-architecture)
- [Awesome Microfrontends](https://github.com/rajasegar/awesome-micro-frontends)

---

## 👨‍💻 About the Author

Created and maintained by [**Tiago Vilas Boas**](https://github.com/tiagovilasboas) — aka **Montanha**, a front-end architect with 18+ years of experience building scalable UIs for fintechs, e-commerce, SaaS platforms and startups.

I help teams structure front-end codebases with clean architecture, business-driven decisions and performance in mind.

📌 Other projects:
- 🕒 [Ponto PJ](https://github.com/tiagovilasboas/ponto-pj) – Personal time tracker (PWA)
- 🧰 [DataForge Tools](https://github.com/tiagovilasboas/dataforge-tools) – Dev toolbox (JWT decoder, mock generator and more)
- ⚙️ [React Layered Boilerplate](https://github.com/tiagovilasboas/react-layered-boilerplate) – Scalable React boilerplate with separation of concerns

---

> 💡 Found a great resource?  
> Open a PR or issue and let’s grow this list together!