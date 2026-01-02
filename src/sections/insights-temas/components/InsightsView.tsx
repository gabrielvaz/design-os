import { Clock, Library, Mic, Sparkles, TrendingUp, BookOpen, User } from 'lucide-react'
import type { InsightsViewProps } from '@/../product/sections/insights-temas/types'
import { cn } from '@/lib/utils'

export function InsightsView({ stats, topics, speakers, topVerses }: InsightsViewProps) {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Insights Espirituais</h1>
          <p className="text-slate-500 dark:text-slate-400">Uma visão do seu crescimento e temas recorrentes.</p>
        </div>
        <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <button className="px-3 py-1.5 text-xs font-semibold bg-white dark:bg-slate-700 shadow-sm rounded-md text-slate-900 dark:text-white">Este Mês</button>
          <button className="px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 dark:text-slate-400">Este Ano</button>
          <button className="px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 dark:text-slate-400">Total</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total de Notas', value: stats.totalNotes, icon: Library, color: 'text-indigo-600', bg: 'bg-indigo-50' },
          { label: 'Horas Ouvidas', value: `${stats.totalHours}h`, icon: Clock, color: 'text-sky-600', bg: 'bg-sky-50' },
          { label: 'Sermões', value: stats.sermonsCount, icon: Mic, color: 'text-violet-600', bg: 'bg-violet-50' },
          { label: 'Orações', value: stats.prayersCount, icon: Sparkles, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        ].map((item, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-4", item.bg, "dark:bg-opacity-10")}>
              <item.icon className={cn("h-5 w-5", item.color)} />
            </div>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{item.value}</p>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Topics Cloud/List */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-indigo-500" />
            Temas Recorrentes
          </h2>
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <div className="flex flex-wrap gap-3">
              {topics.map((topic, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-900 transition-all flex-1 min-w-[140px]"
                >
                  <div className={cn("w-2 h-10 rounded-full", topic.color)} />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{topic.name}</p>
                    <p className="text-xs text-slate-500">{topic.count} notas</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Speakers & Verses */}
        <div className="space-y-8">
          {/* Top Speakers */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <User className="h-5 w-5 text-indigo-500" />
              Pregadores
            </h2>
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm space-y-4">
              {speakers.map((speaker, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{speaker.name}</span>
                  <span className="text-xs font-bold px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-500">{speaker.count}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Top Verses */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-indigo-500" />
              Versículos Citados
            </h2>
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm space-y-4">
              {topVerses.map((verse, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{verse.reference}</span>
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{verse.count}x</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
