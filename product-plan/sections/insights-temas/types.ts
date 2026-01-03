export interface Topic {
  name: string
  count: number
  color: string
}

export interface SpeakerStat {
  name: string
  count: number
}

export interface VerseStat {
  reference: string
  count: number
}

export interface GeneralStats {
  totalHours: number
  totalNotes: number
  sermonsCount: number
  prayersCount: number
  currentStreak: number
}

export interface InsightsViewProps {
  stats: GeneralStats
  topics: Topic[]
  speakers: SpeakerStat[]
  topVerses: VerseStat[]
}
