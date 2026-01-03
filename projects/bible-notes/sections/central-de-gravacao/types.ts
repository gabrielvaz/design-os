export type RecordingStatus = 'idle' | 'recording' | 'paused' | 'processing'

export interface RecordingState {
  status: RecordingStatus
  duration: string
  type: 'sermon' | 'prayer'
  audioLevel: number // 0-100 para visualização
}

export interface RecordingViewProps {
  initialState?: RecordingState
  onStartRecording?: (type: 'sermon' | 'prayer') => void
  onPauseRecording?: () => void
  onResumeRecording?: () => void
  onStopRecording?: () => void
  onCancelRecording?: () => void
}
