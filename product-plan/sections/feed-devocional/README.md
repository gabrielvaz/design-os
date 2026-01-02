# Feed Devocional

## Overview
A tela inicial do aplicativo, projetada para engajamento diário e inspiração. Apresenta o "Versículo do Dia" em destaque, métricas de frequência (ofensiva) e um resumo das atividades recentes.

## User Flows
- **Visualizar Versículo do Dia:** O usuário abre o app e vê imediatamente o versículo em um card visualmente atraente.
- **Checar Ofensiva:** Visualizar quantos dias consecutivos o usuário acessou o app.
- **Acesso Rápido:** Atalhos para retomar gravações recentes ou iniciar uma nova.
- **Compartilhar:** Botão para compartilhar o versículo do dia.

## Components Provided
- `FeedView` — Main dashboard component displaying user stats, daily verse, and recent items.

## Callback Props
| Callback | Description |
|----------|-------------|
| `onShareVerse` | Called when user clicks share icon on verse card |
| `onOpenNote` | Called when user clicks a recent note item |
| `onNewRecording` | Called when user clicks "Nova Gravação" |
