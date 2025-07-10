export interface ArchitectureItem {
  slug: string;
  title: string;
  description: string;
}

export const architectures: ArchitectureItem[] = [
  {
    slug: "component-architecture",
    title: "Component Architecture",
    description: "Atomic design, Feature-driven structure, Presentational vs Container, Component-Driven Development and Colocation.",
  },
  {
    slug: "front-end-architectural-styles",
    title: "Front-End Architectural Styles",
    description: "SPA/CSR/SSR/SSG, Clean Architecture, Modular Front-End, Micro-frontends, Island Architecture.",
  },
  {
    slug: "state-and-data-flow",
    title: "State & Data Flow Architecture",
    description: "Colocated state, layered state, data-fetching strategies, CQRS, event-driven UIs.",
  },
];