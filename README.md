# 🧱 Awesome Front-End Architecture

[![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/tiago.boas/awesome-front-end-architecture/pulls)
[![License: CC0](https://img.shields.io/badge/License-CC0-blue.svg)](#license)

> A curated collection of **scalable architectures**, **modern best practices**, and **battle-tested
> patterns** for building robust front-end applications.
>
> Written by someone who has untangled legacy monoliths, modularized design systems, and knows that a
> front-end **repository layer** isn't over-engineering—it's survival.

---

## Contents

- [Architecture Patterns](#architecture-patterns)
- [Folder Structures](#folder-structures)
- [Best Practices & Clean Code](#best-practices--clean-code)
- [Design Systems & Componentization](#design-systems--componentization)
- [Layers & Abstractions](#layers--abstractions)
- [Build & Monorepo Tooling](#build--monorepo-tooling)
- [State Management & Data Fetching](#state-management--data-fetching)
- [Performance & Web Vitals](#performance--web-vitals)
- [Accessibility & Inclusive Design](#accessibility--inclusive-design)
- [Security](#security)
- [CSS Architecture & Styling](#css-architecture--styling)
- [Testing & Observability](#testing--observability)
- [Real-World Projects & References](#real-world-projects--references)
- [Articles & Deep Dives](#articles--deep-dives)
- [Talks & Videos](#talks--videos)
- [Related](#related)
- [Contributing](#contributing)
- [License](#license)

---

## 🧩 Architecture Patterns

- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) — _Interface design via atoms,
  molecules, organisms, templates, pages._
- [Clean Architecture for Front-End](https://medium.com/@matheusfelipeog/clean-architecture-aplicada-no-front-end-8d8dc0b9f5b6)
  — _Decouple UI from business rules using layers & boundaries._
- [Component-Driven Development (CDD)](https://www.componentdriven.org/) — _Build UIs from the
  component up, not pages down._
- [Feature-Sliced Design (FSD)](https://feature-sliced.design) — _Scalable, domain-oriented folder
  convention for React & beyond._

## 📁 Folder Structures

- [Domain-driven front-end](https://betterprogramming.pub/scalable-frontend-folder-structure-2021-37b3b1cc7efe)
  — _Group by bounded context instead of tech._
- [Feature-based structure (Redux FAQ)](https://redux.js.org/faq/code-structure#how-do-i-organize-files)
  — _Recommended approach straight from Redux docs._
- [Folder architecture — Bruno Antunes 🎥](https://www.youtube.com/watch?v=GmZp_5pNS0I) — _Real project
  walk-through (YouTube)._

## 💡 Best Practices & Clean Code

- [Common React Code Smells](https://dev.to/jbranchaud/common-react-code-smells-2b74) — _Antipatterns
  and how to fix them._
- [Rodrigo Branas — Code Quality for Front-End 🎥](https://www.youtube.com/watch?v=0k8aTzEONnI) —
  _Pragmatic tips in PT-BR._
- [SOLID Principles in JavaScript](https://medium.com/welldone-software/an-overview-of-solid-principles-in-javascript-73f63c7e1dbf)
  — _OOP fundamentals applied to JS._

## 🎨 Design Systems & Componentization

- [shadcn/ui](https://ui.shadcn.dev/) — _Headless, customizable React component collection._
- [Component reusability with Storybook](https://storybook.js.org/docs/react/writing-stories/introduction)
  — _Isolate & document components._
- [Design tokens & theming at scale](https://uxdesign.cc/creating-your-first-design-system-6120ea0c67c6)
  — _Bridge design & code with a shared source of truth._

## 🔌 Layers & Abstractions

Typical stack: **Repository → Service → Store → UI**

- [`tiagovilasboas/react-layered-boilerplate`](https://github.com/tiagovilasboas/react-layered-boilerplate)
  — _Opinionated starter demonstrating the stack above._
- [AHA Programming — Kent C. Dodds](https://kentcdodds.com/blog/aha-programming) — _Avoid
  Hasty Abstractions._

## 🧰 Build & Monorepo Tooling

- [esbuild](https://github.com/evanw/esbuild) — _Ultra-fast bundler written in Go._
- [Nx](https://github.com/nrwl/nx) — _Full-featured monorepo toolkit with smart caching._
- [Turborepo](https://turbo.build/) — _High-performance build system for JS/TS monorepos._
- [Vite](https://vitejs.dev/) — _Next-gen frontend tooling powered by ESM & esbuild._

## 🌀 State Management & Data Fetching

- [React Query](https://tanstack.com/query/latest) — _Server-state management and caching._
- [Redux Toolkit](https://redux-toolkit.js.org/) — _Standard, batteries-included Redux._
- [XState](https://xstate.js.org/) — _State machines & statecharts for predictable UI._
- [Zustand](https://github.com/pmndrs/zustand) — _Minimalistic global state for React._

## 🎯 Performance & Web Vitals

- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) — _Track perf budgets in CI._
- [react-window](https://github.com/bvaughn/react-window) — _List virtualization for massive data._
- [web-vitals](https://github.com/GoogleChrome/web-vitals) — _Measure Core Web Vitals in your app._

## ♿️ Accessibility & Inclusive Design

- [axe-core](https://www.deque.com/axe/) — _Automated accessibility testing engine._
- [Inclusive Components](https://inclusive-components.design/) — _Practical a11y patterns & code._
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) — _Official ARIA usage guide._

## 🔒 Security

- [Content Security Policy (CSP) cheatsheet](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
  — _Prevent XSS & data injection._
- [DOMPurify](https://github.com/cure53/DOMPurify) — _Fast, tolerant XSS sanitizer._
- [OWASP Top 10 for Front-End](https://owasp.org/www-project-top-10/) — _Most critical web risks._

## 🎨 CSS Architecture & Styling

- [BEM Methodology](http://getbem.com/) — _Block-Element-Modifier naming convention._
- [ITCSS — Harry Roberts](https://www.creativebloq.com/features/itcss) — _Layered CSS architecture._
- [Tailwind CSS](https://tailwindcss.com/docs/utility-first) — _Utility-first CSS framework._

## 🧪 Testing & Observability

- [Integration Testing with Jest + MSW](https://mswjs.io/docs/getting-started/integrate/node)
  — _Mock server for realistic tests._
- [React Testing Library Philosophy](https://testing-library.com/docs/react-testing-library/intro/)
  — _Test UI the way users interact with it._
- [Sentry for Front-End](https://sentry.io/for/frontend/) — _Error tracking & performance._

## 🧠 Real-World Projects & References

- [`doczjs/docz`](https://github.com/doczjs/docz) — _MDX-powered documentation for design systems._
- [`tiagovilasboas/ponto-pj`](https://github.com/tiagovilasboas/ponto-pj) — _Time-tracking PWA with
  layered architecture._
- [`vercel/turbo`](https://github.com/vercel/turbo) — _Monorepo build & cache engine._

## 📚 Articles & Deep Dives

- [Domain-Driven Front-End Design](https://khalilstemmler.com/articles/frontend-architecture/ddd-intro/)
  — _Apply DDD concepts to the UI layer._
- [Layered Architecture in React Apps](https://dev.to/thekashey/coding-like-it-s-1984-1mjg) — _Retro
  but effective layering._
- [Micro Frontends — Martin Fowler](https://martinfowler.com/articles/micro-frontends.html) — _Scale
  teams & code via composition._

## 🎥 Talks & Videos

- [How to Scale React Apps — Willian Justen 🎥](https://www.youtube.com/watch?v=NaXs5EvFQW8)
  — _Practical guide to structuring large React codebases._
- [Real-world Refactors — Tiago Montanha (coming soon)](#) — _Case studies from the trenches._
- [Scaling Front-End Architecture — Felipe Deschamps 🎥](https://www.youtube.com/watch?v=PyBr_rG0Z7c)
  — _High-level strategy in PT-BR._

## 🔗 Related

- [Awesome React](https://github.com/enaqx/awesome-react)
- [Awesome JavaScript](https://github.com/sorrycc/awesome-javascript)
- [Awesome Design Systems](https://github.com/alexpate/awesome-design-systems)

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

1. **Fork** the project.
2. **Add** your resource in alphabetical order with a short, objective description.
3. **Submit** a PR — make sure `awesome-lint` passes.

Quality > quantity. No spam, only clean architecture.

## 📜 License

Creative Commons **Zero v1.0 Universal** — see [LICENSE](LICENSE).

## 🙏 Acknowledgements

Inspired by [Awesome](https://awesome.re) guidelines and the amazing community pushing front-end
engineering forward.

## 🌍 Internationalization (i18n)

- [FormatJS / react-intl](https://formatjs.io/) — _Industry-standard message formatting & plurals._
- [i18next](https://www.i18next.com/) — _Framework-agnostic internationalization with rich ecosystem._
- [LinguiJS](https://lingui.dev/) — _Minimalist library with code-splitting & extraction CLI._

## 📈 Analytics & Experimentation

- [PostHog](https://posthog.com/) — _Open-source product analytics & feature flags._
- [GrowthBook](https://growthbook.io/) — _Auditable A/B testing & remote config._
- [Plausible Analytics](https://plausible.io/) — _Privacy-focused, script < 1 KB._

## 📡 GraphQL & API Layer

- [Apollo Client](https://www.apollographql.com/docs/react/) — _Caching, local state & devtools out of the box._
- [urql](https://formidable.com/open-source/urql/) — _Lightweight & extensible GraphQL client._
- [GraphQL Code Generator](https://www.graphql-code-generator.com/) — _Type-safe hooks & SDKs from schema._

## 🚢 CI/CD & DevOps

- [GitHub Actions](https://docs.github.com/actions) — _Native CI for build, test & deploy._
- [Lighthouse CI Action](https://github.com/GoogleChrome/lighthouse-ci) — _Track performance budgets in the pipeline._
- [Vercel Deploy Hooks](https://vercel.com/docs/projects/deploy-hooks) — _Trigger atomic deploys from any CI._

## 📲 Mobile Web & PWAs

- [Workbox](https://developer.chrome.com/docs/workbox/) — _Service Worker toolkit for offline & caching._
- [Capacitor](https://capacitorjs.com/) — _Bridge web apps to iOS/Android APIs._
- [PWA Asset Generator](https://github.com/onderceylan/pwa-asset-generator) — _CLI to create icons & splash screens._

## 📚 Books, Newsletters & Podcasts

- _Designing Front-End Architecture_ — **Micah Godbolt** (O'Reilly) — _Field guide to structuring large-scale UIs._
- _Design Systems_ — **Alla Kholmatova** — _Principles & patterns for cohesive products._
- [CSS-Tricks Newsletter](https://css-tricks.com/newsletter/) — _Weekly front-end tips in your inbox._
- [Syntax FM](https://syntax.fm/) — _Fun, technical front-end podcast hosted by Wes Bos & Scott Tolinski._ 