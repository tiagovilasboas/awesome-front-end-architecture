---
layout: ../layouts/BaseLayout.astro
title: "State & Data Flow Architecture"
---

## 🔄 State & Data Flow Architecture

- **Colocated State** – logic and state stay close to components  
- **Layered State** – UI state vs app state vs server state
- **Data Fetching Strategies** – SWR, React Query, GraphQL caching  
- **Command vs Query separation (CQRS)**  
- **Event-driven UI** – message passing, reducers, effects

> [State Management Colocation](https://tkdodo.eu/blog/colocation)  
> [React Query Patterns](https://tkdodo.eu/blog/practical-react-query)

### Por que isso importa?

Gerenciar estado é um dos maiores desafios conforme a UI cresce. Quando dados mudam em locais imprevisíveis, bugs aparecem. Ao separar claramente:

1. Estado **local** (UI) – refs, inputs, animações.
2. Estado **global** do app – autenticação, tema, carrinho.
3. Estado **remoto** – cache de rede, backend, GraphQL.

... você evita vazamentos de abstração e torna cada camada testável.

Ferramentas modernas como **React Query**, **SWR** ou **Apollo** já resolvem 80% dos problemas ao tratar servidor-state como fonte da verdade e expor cache, invalidação e refetch por hooks.

> Dica: Antes de instalar Redux, tente mover a lógica para hooks locais ou serviço de dados. Muitas vezes não é preciso um “state container” pesado.