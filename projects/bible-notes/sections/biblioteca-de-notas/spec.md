# Biblioteca de Notas Specification

## Overview
O arquivo digital de todo o conteúdo gravado. Permite navegar, filtrar e buscar notas passadas. É aqui que o usuário revisita sermões e orações.

## User Flows
- **Listar Notas:** Ver todas as notas em ordem cronológica reversa.
- **Filtrar:** Filtrar por Tipo (Sermão/Oração), Pregador ou Tema.
- **Buscar:** Campo de busca para encontrar palavras-chave nos títulos ou transcrições.
- **Visualizar Detalhes:** Clicar em uma nota para abrir a leitura completa.

## UI Requirements
- **Barra de Controle:** Campo de busca + Botões de filtro (Pills) no topo.
- **Lista de Cards:** Layout em lista vertical. Cards mostram Título, Data, Pregador e Tags.
- **Destaque de Tipo:** Diferenciação visual sutil entre Sermão (Ícone de Microfone/Púlpito) e Oração (Mãos/Brilho).
- **Infinite Scroll:** (Simulado) Carregamento suave de mais itens.
- **Design de Texto:** Títulos legíveis, datas discretas.

## Configuration
- shell: true
