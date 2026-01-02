# Milestone 3: Central de Gravação

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) complete

## Goal

Implement the Central de Gravação feature — Interface simplificada para iniciar gravações de sermões e orações com apenas um toque e acompanhar o processamento.

## Overview

A interface principal de captura. Projetada para ser operada com "zero fricção" e "um toque". O usuário deve ser capaz de iniciar uma gravação instantaneamente ao chegar no culto ou iniciar seu momento de oração.

**Key Functionality:**
- Iniciar Gravação: Botão grande e central para iniciar.
- Durante a Gravação: Visualização clara do tempo decorrido e feedback visual (onda de áudio).
- Pausar/Retomar: Controle simples para interrupções.
- Finalizar: Botão de parada que leva a uma tela de confirmação/processamento.

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/central-de-gravacao/tests.md` for detailed test-writing instructions.

## What to Implement

### Components

Copy the section components from `product-plan/sections/central-de-gravacao/components/`:

- `RecordingView.tsx`

### Data Layer

The components expect these data shapes:

- `RecordingState`
- `RecordingStatus`

You'll need to:
- Implement audio recording logic (Web Audio API or MediaRecorder)
- Manage recording state (recording, paused, processing)
- Handle timer/duration

### Callbacks

Wire up these user actions:

- `onStartRecording`: Start audio capture
- `onPauseRecording`: Pause audio capture
- `onResumeRecording`: Resume audio capture
- `onStopRecording`: Stop capture and start processing
- `onCancelRecording`: Discard recording

## Files to Reference

- `product-plan/sections/central-de-gravacao/README.md` — Feature overview
- `product-plan/sections/central-de-gravacao/tests.md` — Test instructions
- `product-plan/sections/central-de-gravacao/components/` — React components
- `product-plan/sections/central-de-gravacao/types.ts` — TypeScript interfaces
- `product-plan/sections/central-de-gravacao/sample-data.json` — Test data

## Done When

- [ ] Tests written for key user flows
- [ ] Components render with real data
- [ ] Audio capture works
- [ ] Timer works accurately
- [ ] Visual feedback responds to audio levels
