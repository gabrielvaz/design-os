export interface Note {
  id: string
  title: string
  date: string
  preview: string
  duration: string
  speaker: string
  type: 'sermon' | 'prayer'
  tags: string[]
}

export interface LibraryViewProps {
  notes: Note[]
  onSearch: (query: string) => void
  onFilterChange: (filter: string) => void
  onSelectNote: (id: string) => void
}
