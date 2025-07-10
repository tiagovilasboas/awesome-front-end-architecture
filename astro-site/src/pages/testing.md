---
layout: ../layouts/BaseLayout.astro
title: "Testing & Maintainability"
---

## 🧪 Testing & Maintainability

- Unit tests per layer
- Integration tests across boundaries
- E2E for business flow validation
- Mocks vs Spies vs Real services
- CI/CD pipelines for lint/test/build before merge

> [Testing Pyramid for Front-End](https://kentcdodds.com/blog/testing-pyramid)  
> [Write Tests That Matter](https://kentcdodds.com/blog/write-tests)

### Estratégia pirâmide × trophy

A “pirâmide de testes” tradicional sugere muitos unit tests e poucos E2E. No front-end moderno, **Kent C. Dodds** propõe o modelo “Trophy” onde testes de integração em componentes têm mais valor que unidades isoladas.

| Tipo | Ferramentas | Propósito |
|------|-------------|-----------|
| Unit | Vitest, Jest | Testar funções puras, hooks sem dependências |
| Integration | Testing Library | Assegurar componentes e fluxo juntos |
| E2E | Cypress, Playwright | Validar jornada real do usuário |

### Boas práticas

1. **Testar comportamento, não implementação** – Evite testar detalhes de DOM ou mocks demais.  
2. **Fast feedback** – Rode unit/integration localmente, E2E em CI paralelizado.  
3. **Mocks realistas** – Use MSW para simular API em vez de stubs manuais.