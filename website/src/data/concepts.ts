export interface ConceptItem {
  slug: string;
  title: string;
  description: string;
}

export const concepts: ConceptItem[] = [
  {
    slug: "core-principles",
    title: "Core Architectural Principles",
    description: "Separation of Concerns, SRP/DRY/KISS/YAGNI, unidirectional data flow, layered architecture, ports & adapters.",
  },
  {
    slug: "structure-folders",
    title: "Structure, Folders & Boundaries",
    description: "Feature folders, shared libraries, app root, services, enforcing boundaries with tooling.",
  },
  {
    slug: "testing-maintainability",
    title: "Testing & Maintainability",
    description: "Unit tests, integration tests, E2E, mocks vs spies, CI/CD pipelines.",
  },
  {
    slug: "anti-patterns",
    title: "Anti-Patterns to Avoid",
    description: "Overengineering, global utils misuse, clean layer hell, leaking app state into domain logic.",
  },
];