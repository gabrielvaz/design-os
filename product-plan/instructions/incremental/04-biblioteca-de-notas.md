# Milestone 4: Biblioteca de Notas

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) complete

## Goal

Implement the Biblioteca de Notas feature — Repositório pesquisável de todo o conteúdo gravado, permitindo leitura de transcrições e resumos gerados pela IA.

## Overview

O arquivo digital de todo o conteúdo gravado. Permite navegar, filtrar e buscar notas passadas. É aqui que o usuário revisita sermões e orações.

**Key Functionality:**
- Listar Notas: Ver todas as notas em ordem cronológica reversa.
- Filtrar: Filtrar por Tipo (Sermão/Oração), Pregador ou Tema.
- Buscar: Campo de busca para encontrar palavras-chave nos títulos ou transcrições.
- Visualizar Detalhes: Clicar em uma nota para abrir a leitura completa.

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/biblioteca-de-notas/tests.md` for detailed test-writing instructions.

## What to Implement

### Components

Copy the section components from `product-plan/sections/biblioteca-de-notas/components/`:

- `LibraryView.tsx`

### Data Layer

The components expect these data shapes:

- `Note`

You'll need to:
- Create API endpoints for listing notes
- Implement server-side filtering and search
- Handle pagination (infinite scroll logic)

### Callbacks

Wire up these user actions:

- `onSearch`: Trigger search query
- `onFilterChange`: Update active filter
- `onSelectNote`: Navigate to note details

### Empty States

Implement empty state UI for when no records exist yet:

- **No notes found:** When search returns 0 results
- **Library empty:** When user has no recordings yet

## Files to Reference

- `product-plan/sections/biblioteca-de-notas/README.md` — Feature overview
- `product-plan/sections/biblioteca-de-notas/tests.md` — Test instructions
- `product-plan/sections/biblioteca-de-notas/components/` — React components
- `product-plan/sections/biblioteca-de-notas/types.ts` — TypeScript interfaces
- `product-plan/sections/biblioteca-de-notas/sample-data.json` — Test data

## Done When

- [ ] Tests written for key user flows
- [ ] Components render with real data
- [ ] Search works
- [ ] Filtering works
- [ ] Navigation to details works
