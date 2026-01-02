# Milestone 2: Feed Devocional

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) complete

## Goal

Implement the Feed Devocional feature — O ponto de entrada diário com Versículo do Dia visual e métricas de recorrência para incentivar o hábito.

## Overview

A tela inicial do aplicativo, projetada para engajamento diário e inspiração. Apresenta o "Versículo do Dia" em destaque, métricas de frequência (ofensiva) e um resumo das atividades recentes.

**Key Functionality:**
- Visualizar Versículo do Dia: O usuário abre o app e vê imediatamente o versículo em um card visualmente atraente.
- Checar Ofensiva: Visualizar quantos dias consecutivos o usuário acessou o app.
- Acesso Rápido: Atalhos para retomar gravações recentes ou iniciar uma nova.
- Compartilhar: Botão para compartilhar o versículo do dia.

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/feed-devocional/tests.md` for detailed test-writing instructions.

## What to Implement

### Components

Copy the section components from `product-plan/sections/feed-devocional/components/`:

- `FeedView.tsx`

### Data Layer

The components expect these data shapes:

- `DailyVerse`
- `NotePreview`
- `UserProfile`

You'll need to:
- Create API endpoints or data fetching logic
- Connect real data to the components

### Callbacks

Wire up these user actions:

- `onShareVerse`: Called when user wants to share the daily verse
- `onOpenNote`: Called when user clicks on a recent note
- `onNewRecording`: Called when user clicks the new recording shortcut

### Empty States

Implement empty state UI for when no records exist yet:

- **No recent notes:** Show a "Start your first recording" card instead of the list

## Files to Reference

- `product-plan/sections/feed-devocional/README.md` — Feature overview
- `product-plan/sections/feed-devocional/tests.md` — Test instructions
- `product-plan/sections/feed-devocional/components/` — React components
- `product-plan/sections/feed-devocional/types.ts` — TypeScript interfaces
- `product-plan/sections/feed-devocional/sample-data.json` — Test data

## Done When

- [ ] Tests written for key user flows
- [ ] Components render with real data
- [ ] Empty states display properly
- [ ] All user actions work
- [ ] Matches the visual design
