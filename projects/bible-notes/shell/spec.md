# Application Shell Specification

## Overview
O layout utiliza uma barra lateral (Sidebar) persistente para navegação rápida entre as principais seções do aplicativo. O design é limpo e focado no conteúdo, minimizando distrações para manter o foco espiritual.

## Navigation Structure
- **Feed Devocional** → `/feed-devocional` (Home)
- **Gravar** → `/central-de-gravacao`
- **Biblioteca** → `/biblioteca-de-notas`
- **Insights** → `/insights-temas`

## User Menu
- Localização: Parte inferior da barra lateral.
- Conteúdo: Avatar do usuário, Nome e botão de logout/configurações.

## Layout Pattern
- **Desktop:** Barra lateral fixa à esquerda com largura de 64 (256px).
- **Mobile:** Menu inferior fixo (Bottom Navigation) para fácil acesso com o polegar, ou Menu Hamburger que abre a sidebar (Drawer). Vamos priorizar o Drawer para manter a consistência.

## Responsive Behavior
- **Desktop:** Sidebar sempre visível.
- **Mobile:** Header com título da seção e botão para abrir o menu (Sheet/Drawer).
