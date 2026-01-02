import data from '@/../product/sections/biblioteca-de-notas/data.json'
import { LibraryView } from './components/LibraryView'
import type { Note } from '@/../product/sections/biblioteca-de-notas/types'

export default function LibraryViewPreview() {
  return (
    <LibraryView
      notes={data.notes as Note[]}
      onSearch={(q) => console.log('Searching:', q)}
      onFilterChange={(f) => console.log('Filter:', f)}
      onSelectNote={(id) => console.log('Select:', id)}
    />
  )
}
