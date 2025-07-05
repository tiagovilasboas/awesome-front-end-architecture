# 🧱 Awesome Front-End Architecture

> A curated list of principles, patterns, real-world examples and tools for building scalable, maintainable, and modular front-end applications.

![GitHub Stars](https://img.shields.io/github/stars/tiagovilasboas/awesome-front-end-architecture?style=social)
![GitHub Forks](https://img.shields.io/github/forks/tiagovilasboas/awesome-front-end-architecture?style=social)
![Awesome](https://awesome.re/badge.svg)

---

## 📘 TL;DR

This is not just another list of frontend tutorials.  
It’s a curated architecture-driven guide built from real-world experience — designed to help you scale products, teams, and codebases without losing sanity.

---

## 📚 Index

- [🏗️ What is Front-End Architecture?](#-what-is-front-end-architecture)
- [⚙️ Core Architectural Principles](#️-core-architectural-principles)
- [🧩 Component Architecture](#-component-architecture)
- [🧠 Front-End Architectural Styles](#-front-end-architectural-styles)
- [🔄 State & Data Flow Architecture](#-state--data-flow-architecture)
- [🏢 Structure, Folders & Boundaries](#-structure-folders--boundaries)
- [🧪 Testing & Maintainability](#-testing--maintainability)
- [❌ Anti-Patterns to Avoid](#-anti-patterns-to-avoid)
- [📎 Real-World Examples](#-real-world-examples)
- [📚 References](#-references)
- [👨‍💻 About the Author](#-about-the-author)

---

## 🏗️ What is Front-End Architecture?

Architecture in frontend isn't just about folder structure.  
It’s about **how your app evolves, scales, and stays resilient** as complexity and teams grow.

### Key questions:

- How do you separate concerns?
- How does data flow?
- Where does business logic live?
- Can this scale across squads and products?
- Can this be tested, extended, or reused?

---

## ⚙️ Core Architectural Principles

- **Separation of Concerns (SoC)** – split UI, logic, services, domain
- **SRP / DRY / KISS / YAGNI** – design for clarity and intent
- **Unidirectional Data Flow** – predictable state and rendering
- **Layered Architecture** – UI → Service → Domain → Infra
- **Port and Adapter** (Hexagonal UI) – invert dependencies, test boundaries

> [Clean Architecture in Front-End](https://medium.com/javascript-in-plain-english/clean-architecture-for-frontend-applications-631c7aa779c7)

---

## 🧩 Component Architecture

- **Atomic Design** – atoms, molecules, organisms, templates, pages  
  [Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)

- **Feature/Domain-Driven Structure** – organize by business domain  
  [Smashing Magazine](https://www.smashingmagazine.com/2021/01/structuring-react-projects-folder-structure/)

- **Presentational vs Container Components** – separate logic from UI  
  [Dan Abramov](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

- **Component-Driven Development (CDD)** – design in isolation (Storybook)  
  [Storybook CDD](https://storybook.js.org/blog/component-driven-dev/)

- **Colocation (Hooks + Context)** – colocate logic, style, and tests  
  [Colocation Guide](https://tkdodo.eu/blog/colocation)

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

---

## 🔄 State & Data Flow Architecture

- **Colocated State** – logic and state stay close to components  
- **Layered State** – UI state vs app state vs server state
- **Data Fetching Strategies** – SWR, React Query, GraphQL caching  
- **Command vs Query separation (CQRS)**  
- **Event-driven UI** – message passing, reducers, effects

> [State Management Colocation](https://tkdodo.eu/blog/colocation)  
> [React Query Patterns](https://tkdodo.eu/blog/practical-react-query)

---

## 🏢 Structure, Folders & Boundaries

- `/features/*` → domain-based folders
- `/shared/*` → common utilities, components, hooks
- `/app/` → root composition, routes, config
- `/services/` → API, side effects, logic

📌 Use tools like **Turborepo**, **Nx**, **ESLint boundaries**, and **Storybook** to enforce architecture in practice.

---

## 🧪 Testing & Maintainability

- Unit tests per layer
- Integration tests across boundaries
- E2E for business flow validation
- Mocks vs Spies vs Real services
- CI/CD pipelines for lint/test/build before merge

> [Testing Pyramid for Front-End](https://kentcdodds.com/blog/testing-pyramid)  
> [Write Tests That Matter](https://kentcdodds.com/blog/write-tests)

---

## ❌ Anti-Patterns to Avoid

- Overengineering: abstractions that solve no real problem
- Clean Layer Hell: files with only `.index.ts` and no logic
- Reusing everything just to “not repeat”
- App state leaking into domain logic
- Global “utils” with unclear boundaries
- Putting all logic in the UI layer

---

## 📎 Real-World Examples

- [Spotify Front-End Architecture](https://engineering.atspotify.com/2020/10/04/frontend-architecture-at-spotify/)
- [Netflix UI Engineering](https://netflixtechblog.com/)
- [Zé Delivery (Monorepo, DDD, Shared Design System)](https://youtu.be/5OjqD-ow8GE)
- Your own: [React Layered Boilerplate](https://github.com/tiagovilasboas/react-layered-boilerplate)

---

## 📚 References

- [Clean Architecture by Uncle Bob](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Frontend Architecture Guide](https://martinfowler.com/articles/scalable-frontend-architecture.html)
- [Atomic Design – Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
- [Component Driven Development](https://storybook.js.org/blog/component-driven-dev/)
- [Microfrontends Handbook](https://leanpub.com/the-micro-frontends-book)

---

## 👨‍💻 About the Author

Built and curated by [**Tiago Vilas Boas**](https://github.com/tiagovilasboas) — also known as **Montanha**.

> Front-End Architect • 18+ years of experience  
> I help teams and products scale without breaking the UI, the code, or the team.

Check out my other projects:

- 🕒 [Ponto PJ](https://github.com/tiagovilasboas/ponto-pj) — Time tracking PWA for freelancers
- 🧰 [DataForge Tools](https://github.com/tiagovilasboas/dataforge-tools) — Dev toolkit (JWT, JSON, Mock data)
- ⚙️ [React Layered Boilerplate](https://github.com/tiagovilasboas/react-layered-boilerplate) — Clean architecture boilerplate for React

---

> 🙌 Contributions welcome.  
> If you know a concept, case study or tool that should be here, feel free to open a PR or drop an issue.