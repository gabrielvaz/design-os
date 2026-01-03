# Biblioteca de Notas

## Overview
O arquivo digital de todo o conteúdo gravado. Permite navegar, filtrar e buscar notas passadas. É aqui que o usuário revisita sermões e orações.

## User Flows
- **Listar Notas:** Ver todas as notas em ordem cronológica reversa.
- **Filtrar:** Filtrar por Tipo (Sermão/Oração), Pregador ou Tema.
- **Buscar:** Campo de busca para encontrar palavras-chave nos títulos ou transcrições.
- **Visualizar Detalhes:** Clicar em uma nota para abrir a leitura completa.

## Components Provided
- `LibraryView` — Main list component with search and filters.

## Callback Props
| Callback | Description |
|----------|-------------|
| `onSearch` | Called when search input changes |
| `onFilterChange` | Called when filter pill selected |
| `onSelectNote` | Called when a note card is clicked |
