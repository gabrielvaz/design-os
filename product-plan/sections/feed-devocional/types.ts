export interface DailyVerse {
  reference: string
  text: string
  theme: string
  imageColor: string
}

export interface NotePreview {
  id: string
  title: string
  date: string
  preview: string
  duration: string
  type: 'sermon' | 'prayer'
}

export interface UserProfile {
  name: string
  streak: number
  lastActive: string
}

export interface FeedViewProps {
  userProfile: UserProfile
  dailyVerse: DailyVerse
  recentNotes: NotePreview[]
  onShareVerse?: () => void
  onOpenNote?: (id: string) => void
  onNewRecording?: () => void
}
