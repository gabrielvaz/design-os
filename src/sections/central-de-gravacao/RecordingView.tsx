import data from '@/../product/sections/central-de-gravacao/data.json'
import { RecordingView } from './components/RecordingView'
import type { RecordingState } from '@/../product/sections/central-de-gravacao/types'

export default function RecordingViewPreview() {
  return (
    <RecordingView
      initialState={data.recordingState as RecordingState}
      onStartRecording={(type) => console.log('Started', type)}
      onStopRecording={() => console.log('Stopped')}
      onPauseRecording={() => console.log('Paused')}
      onResumeRecording={() => console.log('Resumed')}
      onCancelRecording={() => console.log('Cancelled')}
    />
  )
}
