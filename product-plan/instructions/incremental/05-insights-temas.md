# Milestone 5: Insights & Temas

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) complete

## Goal

Implement the Insights & Temas feature — Área analítica onde o conteúdo é agrupado automaticamente por tópicos bíblicos e pregadores para estudo aprofundado.

## Overview

Uma visão analítica e espiritual do progresso do usuário. Esta seção utiliza a IA para agregar o conteúdo de todas as notas, identificando padrões, temas recorrentes e fornecendo estatísticas de crescimento devocional.

**Key Functionality:**
- Visualizar Estatísticas: Ver total de horas ouvidas, número de sermões e orações.
- Explorar Temas: Ver uma lista ou "nuvem" de tópicos que foram mais frequentes nas notas (ex: Fé, Família, Esperança).
- Análise de Pregadores: Ver quais vozes o usuário mais tem ouvido.
- Versículos Citados: Lista dos versículos que mais apareceram nas transcrições recentes.

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/insights-temas/tests.md` for detailed test-writing instructions.

## What to Implement

### Components

Copy the section components from `product-plan/sections/insights-temas/components/`:

- `InsightsView.tsx`

### Data Layer

The components expect these data shapes:

- `GeneralStats`
- `Topic`
- `SpeakerStat`
- `VerseStat`

You'll need to:
- Aggregate data from your database to calculate these stats
- Implement caching for performance (stats can be expensive)

### Callbacks

Wire up these user actions:

- (None currently defined in spec, mostly read-only, but consider time range filters)

### Empty States

Implement empty state UI for when no records exist yet:

- **No data yet:** "Start recording to see your insights"

## Files to Reference

- `product-plan/sections/insights-temas/README.md` — Feature overview
- `product-plan/sections/insights-temas/tests.md` — Test instructions
- `product-plan/sections/insights-temas/components/` — React components
- `product-plan/sections/insights-temas/types.ts` — TypeScript interfaces
- `product-plan/sections/insights-temas/sample-data.json` — Test data

## Done When

- [ ] Tests written for key user flows
- [ ] Components render with real data
- [ ] Stats calculations are accurate
- [ ] Matches visual design
