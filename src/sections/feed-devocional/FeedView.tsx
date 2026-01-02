import data from '@/../product/sections/feed-devocional/data.json'
import { FeedView } from './components/FeedView'
import type { NotePreview } from '@/../product/sections/feed-devocional/types'

export default function FeedViewPreview() {
  return (
    <FeedView
      userProfile={data.userProfile}
      dailyVerse={data.dailyVerse}
      recentNotes={data.recentNotes as NotePreview[]}
      onShareVerse={() => alert('Compartilhar versículo')}
      onOpenNote={(id) => console.log('Abrir nota:', id)}
      onNewRecording={() => console.log('Nova gravação')}
    />
  )
}
