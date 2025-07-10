---
layout: ../layouts/BaseLayout.astro
title: "Anti-Patterns to Avoid"
---

## ❌ Anti-Patterns to Avoid

| Anti-pattern | Sintoma | Por que é ruim? | Como corrigir |
|--------------|---------|-----------------|--------------|
| **Over-engineering** | Classes/abstrações sem uso real | Impossibilita mudanças e assusta novos devs | Aplique YAGNI e remova código morto |
| **Clean Layer Hell** | Pasta `core/domain/use-cases` vazia | Camadas vazias adicionam atrito | Comece simples, extraia camadas ao surgir complexidade |
| **Reuse for the sake of reuse** | Hooks/componentes hiper-genéricos | API confusa, acoplamentos implícitos | Foque em DRY de comportamento, não de texto |
| **Estado global no domínio** | `cartContext` importado em service | Quebra testabilidade e reuso | Injete state via parâmetros ou eventos |
| **Utils globais sem dono** | Diretório `/utils` com tudo | Dependências circulares e falta de ownership | Mova funções para domínios/ camadas específicas |
| **Toda lógica na UI** | `useEffect` com fetch/transform | UI difícil de testar e migrar | Extraia para camada de serviços ou hooks de dados |