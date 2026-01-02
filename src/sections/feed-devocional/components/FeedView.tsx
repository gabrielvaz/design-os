import { Share2, Flame, PlayCircle, Mic, ArrowRight, Calendar } from 'lucide-react'
import type { FeedViewProps } from '@/../product/sections/feed-devocional/types'
import { cn } from '@/lib/utils'

export function FeedView({
  userProfile,
  dailyVerse,
  recentNotes,
  onShareVerse,
  onOpenNote,
  onNewRecording,
}: FeedViewProps) {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header with Greeting & Streak */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Bom dia, {userProfile.name}
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Pronto para ouvir a voz de Deus hoje?
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 dark:bg-orange-950/30 rounded-full border border-orange-100 dark:border-orange-900/50">
          <Flame className="h-5 w-5 text-orange-500 fill-orange-500" />
          <span className="font-bold text-orange-700 dark:text-orange-400">
            {userProfile.streak} dias
          </span>
        </div>
      </div>

      {/* Daily Verse Card */}
      <section>
        <div className={cn(
          "relative overflow-hidden rounded-2xl p-8 md:p-10 shadow-lg text-white",
          `bg-gradient-to-br ${dailyVerse.imageColor}`
        )}>
          <div className="relative z-10 space-y-6">
            <div className="flex items-center justify-between opacity-80">
              <span className="text-sm font-medium tracking-wider uppercase">Versículo do Dia</span>
              <span className="text-sm font-medium px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                {dailyVerse.theme}
              </span>
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-serif leading-relaxed font-medium">
              "{dailyVerse.text}"
            </blockquote>
            
            <div className="flex items-center justify-between pt-4">
              <cite className="not-italic font-bold text-lg tracking-wide">
                {dailyVerse.reference}
              </cite>
              <button 
                onClick={onShareVerse}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors"
                aria-label="Compartilhar versículo"
              >
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Background Decorative Pattern */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-black/10 blur-3xl" />
        </div>
      </section>

      {/* Recent Activity */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Recentes
          </h2>
          <button 
            onClick={onNewRecording}
            className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 flex items-center gap-1"
          >
            Nova Gravação <Mic className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-4">
          {recentNotes.map((note) => (
            <div 
              key={note.id}
              onClick={() => onOpenNote?.(note.id)}
              className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                  "p-3 rounded-lg flex-shrink-0",
                  note.type === 'sermon' 
                    ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400" 
                    : "bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400"
                )}>
                  {note.type === 'sermon' ? <Mic className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {note.title}
                    </h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {note.date}
                    </span>
                  </div>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-3">
                    {note.preview}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-500">
                    <PlayCircle className="h-3 w-3" />
                    <span>{note.duration}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <span className="uppercase tracking-wider">{note.type === 'sermon' ? 'Sermão' : 'Oração'}</span>
                  </div>
                </div>

                <div className="self-center opacity-0 group-hover:opacity-100 transition-opacity text-slate-400">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
