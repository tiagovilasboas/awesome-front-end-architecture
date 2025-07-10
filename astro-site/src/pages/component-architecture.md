---
layout: ../layouts/BaseLayout.astro
title: "Component Architecture"
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

### Quando escolher cada padrão?

| Padrão | Quando usar | Pontos fortes | Armadilhas |
|--------|-------------|---------------|------------|
| **Atomic Design** | Design system em fase inicial ou quando há necessidade de vocabulário comum entre designers e devs | Clareza na granularidade, reuso alto | Pode gerar excesso de camadas se aplicado ao pé da letra |
| **Feature/Domain‐Driven** | Times múltiplos trabalhando em domínios independentes | Facilita ownership, encapsula dependências | Pode gerar duplicação de código compartilhado │
| **Presentational vs Container** | Apps React antigos migrando para hooks ou quando lógica é muito complexa | Separa UI de lógica (testável) | Overhead de arquivos, tendência a criar “component hell” │
| **Component‐Driven Dev (CDD)** | Uso de Storybook e design review async | Feedback rápido, documentação viva | Requer disciplina, config inicial |
| **Colocation** | Apps modernos com hooks/context | Melhora legibilidade, reduz prop drilling | Pode dificultar reuse se ultra específico |

> Dica: combine padrões — ex.: CDD + Domain folders + Atomic somente para o design system.