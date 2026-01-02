# Bible Notes — Product Overview

## Summary

O Bible Notes é um "segundo cérebro" espiritual focado em áudio. Ele permite que cristãos capturem sermões e momentos de oração com um único toque, transformando áudio em transcrições e resumos organizados via IA, eliminando a distração de digitar durante o culto.

## Planned Sections

1. **Feed Devocional** — O ponto de entrada diário com Versículo do Dia visual e métricas de recorrência para incentivar o hábito.
2. **Central de Gravação** — Interface simplificada para iniciar gravações de sermões e orações com apenas um toque e acompanhar o processamento.
3. **Biblioteca de Notas** — Repositório pesquisável de todo o conteúdo gravado, permitindo leitura de transcrições e resumos gerados pela IA.
4. **Insights & Temas** — Área analítica onde o conteúdo é agrupado automaticamente por tópicos bíblicos e pregadores para estudo aprofundado.

## Data Model

**Entities:** User, Note, Transcript, Summary, BibleVerse, Tag, Speaker

## Design System

**Colors:**
- Primary: indigo
- Secondary: sky
- Neutral: slate

**Typography:**
- Heading: Inter
- Body: Inter
- Mono: JetBrains Mono

## Implementation Sequence

Build this product in milestones:

1. **Foundation** — Set up design tokens, data model types, and application shell
2. **Feed Devocional** — Daily engagement feed with verse of the day and streaks
3. **Central de Gravação** — Core recording functionality with audio visualization
4. **Biblioteca de Notas** — Searchable archive of sermons and prayers
5. **Insights & Temas** — Analytics dashboard for spiritual habits

Each milestone has a dedicated instruction document in `product-plan/instructions/`.
