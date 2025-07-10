---
layout: ../layouts/BaseLayout.astro
title: "Core Architectural Principles"
---

import Card from '../components/Card.astro'

## ⚙️ Core Architectural Principles

<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
<Card title="Separation of Concerns (SoC)" description="Split UI, logic, services and domain layers to reduce coupling." />

<Card title="SRP / DRY / KISS / YAGNI" description="Foque em clareza, reutilização consciente e simplicidade — sem over-engineering." />

<Card title="Unidirectional Data Flow" description="Fluxo de dados previsível facilita depuração, testes e escalabilidade." />

<Card title="Layered Architecture" description="UI → Service → Domain → Infra. Cada camada tem responsabilidade clara." />

<Card title="Port & Adapter (Hexagonal)" description="Inverte dependências para testar limites e isolar lógica de domínio." />
</div>

> Para aprofundar leia o artigo <a href="https://medium.com/javascript-in-plain-english/clean-architecture-for-frontend-applications-631c7aa779c7" target="_blank" rel="noopener">Clean Architecture in Front-End</a>.