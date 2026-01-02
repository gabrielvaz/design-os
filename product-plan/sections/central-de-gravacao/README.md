# Central de Gravação

## Overview
A interface principal de captura. Projetada para ser operada com "zero fricção" e "um toque". O usuário deve ser capaz de iniciar uma gravação instantaneamente ao chegar no culto ou iniciar seu momento de oração.

## User Flows
- **Iniciar Gravação:** Botão grande e central para iniciar.
- **Durante a Gravação:** Visualização clara do tempo decorrido e feedback visual (onda de áudio) de que o som está sendo captado.
- **Pausar/Retomar:** Controle simples para interrupções.
- **Finalizar:** Botão de parada que leva a uma tela de confirmação/processamento.

## Components Provided
- `RecordingView` — Full screen recording interface.

## Callback Props
| Callback | Description |
|----------|-------------|
| `onStartRecording` | Start capture |
| `onStopRecording` | Stop capture and save |
| `onPauseRecording` | Pause capture |
| `onResumeRecording` | Resume capture |
| `onCancelRecording` | Cancel and discard |
