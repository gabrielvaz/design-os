# Central de Gravação Specification

## Overview
A interface principal de captura. Projetada para ser operada com "zero fricção" e "um toque". O usuário deve ser capaz de iniciar uma gravação instantaneamente ao chegar no culto ou iniciar seu momento de oração.

## User Flows
- **Iniciar Gravação:** Botão grande e central para iniciar.
- **Durante a Gravação:** Visualização clara do tempo decorrido e feedback visual (onda de áudio) de que o som está sendo captado.
- **Pausar/Retomar:** Controle simples para interrupções.
- **Finalizar:** Botão de parada que leva a uma tela de confirmação/processamento.
- **Status do Processamento:** Se uma gravação acabou de ser feita, mostrar o progresso da IA (Transcrevendo... Resumindo...).

## UI Requirements
- **Botão Hero:** Um botão circular grande, pulsante ou com destaque de cor, impossível de errar.
- **Feedback de Áudio:** Visualização de onda (waveform) simples animada.
- **Timer:** Tipografia grande e legível (Mono).
- **Seletor de Tipo:** Toggle simples entre "Sermão" e "Oração" antes de começar.
- **Estado Vazio:** Frase inspiradora quando não está gravando.

## Configuration
- shell: true
