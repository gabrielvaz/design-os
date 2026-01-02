import data from '@/../product/sections/insights-temas/data.json'
import { InsightsView } from './components/InsightsView'
import type { GeneralStats, Topic, SpeakerStat, VerseStat } from '@/../product/sections/insights-temas/types'

export default function InsightsViewPreview() {
  return (
    <InsightsView
      stats={data.stats as GeneralStats}
      topics={data.topics as Topic[]}
      speakers={data.speakers as SpeakerStat[]}
      topVerses={data.topVerses as VerseStat[]}
    />
  )
}
