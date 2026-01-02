import { useState, useEffect } from 'react'
import { Mic, Square, Pause, Play, Sparkles } from 'lucide-react'
import type { RecordingViewProps, RecordingStatus } from '../types'
import { cn } from '@/lib/utils'

export function RecordingView({
  initialState,
  onStartRecording,
  onPauseRecording,
  onResumeRecording,
  onStopRecording,
  onCancelRecording,
}: RecordingViewProps) {
  const [status, setStatus] = useState<RecordingStatus>(initialState?.status || 'idle')
  const [duration, setDuration] = useState(initialState?.duration || '00:00:00')
  const [type, setType] = useState<'sermon' | 'prayer'>(initialState?.type || 'sermon')

  // Simulação de visualização de áudio
  const [bars, setBars] = useState<number[]>(new Array(20).fill(10))

  useEffect(() => {
    if (status === 'recording') {
      const interval = setInterval(() => {
        setBars(prev => prev.map(() => Math.random() * 80 + 10))
      }, 100)
      return () => clearInterval(interval)
    } else {
      setBars(new Array(20).fill(10))
    }
  }, [status])

  const handleStart = () => {
    setStatus('recording')
    onStartRecording?.(type)
  }

  const handleStop = () => {
    setStatus('processing')
    onStopRecording?.()
  }

  const handlePause = () => {
    setStatus('paused')
    onPauseRecording?.()
  }

  const handleResume = () => {
    setStatus('recording')
    onResumeRecording?.()
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] max-w-2xl mx-auto text-center space-y-12">
      
      {/* Header / Type Selector */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          {status === 'idle' ? 'Nova Captura' : 
           status === 'processing' ? 'Processando...' : 
           'Gravando'}
        </h1>
        
        {status === 'idle' && (
          <div className="flex items-center justify-center gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-full">
            <button
              onClick={() => setType('sermon')}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                type === 'sermon' 
                  ? "bg-white dark:bg-slate-700 shadow-sm text-indigo-600 dark:text-indigo-400" 
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-700"
              )}
            >
              Sermão
            </button>
            <button
              onClick={() => setType('prayer')}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                type === 'prayer'
                  ? "bg-white dark:bg-slate-700 shadow-sm text-indigo-600 dark:text-indigo-400"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-700"
              )}
            >
              Oração
            </button>
          </div>
        )}
      </div>

      {/* Main Visualization & Action */}
      <div className="relative">
        {/* Audio Waveform Visualization */}
        {(status === 'recording' || status === 'paused') && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-64 flex items-center justify-center gap-1 opacity-20 pointer-events-none">
            {bars.map((height, i) => (
              <div 
                key={i}
                className="w-3 bg-indigo-500 rounded-full transition-all duration-100"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        )}

        {/* Status Ring */}
        <div className={cn(
          "relative w-64 h-64 rounded-full flex items-center justify-center transition-all duration-500",
          status === 'recording' ? "bg-indigo-50 dark:bg-indigo-950/30" : "bg-transparent"
        )}>
          {status === 'recording' && (
            <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20 animate-ping" />
          )}
          
          {/* Main Button */}
          {status === 'idle' ? (
            <button
              onClick={handleStart}
              className="w-48 h-48 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex flex-col items-center justify-center gap-2 group"
            >
              <Mic className="h-16 w-16 group-hover:scale-110 transition-transform" />
              <span className="font-semibold tracking-wide">GRAVAR</span>
            </button>
          ) : status === 'processing' ? (
            <div className="w-48 h-48 rounded-full bg-white dark:bg-slate-800 border-2 border-indigo-100 dark:border-indigo-900 flex flex-col items-center justify-center gap-3 animate-pulse">
              <Sparkles className="h-12 w-12 text-indigo-500" />
              <span className="text-sm font-medium text-slate-500">IA Analisando...</span>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-2 z-10">
              <span className="text-5xl font-mono font-bold text-slate-900 dark:text-white tabular-nums tracking-wider">
                {duration}
              </span>
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-widest animate-pulse">
                {status === 'paused' ? 'Pausado' : 'Gravando'}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="h-24 flex items-center justify-center gap-6">
        {(status === 'recording' || status === 'paused') && (
          <>
            <button
              onClick={onCancelRecording}
              className="p-4 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Cancelar"
            >
              Cancelar
            </button>

            {status === 'recording' ? (
              <button
                onClick={handlePause}
                className="p-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title="Pausar"
              >
                <Pause className="h-8 w-8 fill-current" />
              </button>
            ) : (
              <button
                onClick={handleResume}
                className="p-6 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title="Retomar"
              >
                <Play className="h-8 w-8 fill-current" />
              </button>
            )}

            <button
              onClick={handleStop}
              className="p-6 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg transition-colors"
              title="Finalizar"
            >
              <Square className="h-8 w-8 fill-current" />
            </button>
          </>
        )}
      </div>

      {/* Tip */}
      <p className="text-slate-400 dark:text-slate-500 text-sm max-w-xs">
        {status === 'idle' 
          ? "Toque para começar. A tela permanecerá ligada durante a gravação."
          : "Mantenha o celular próximo para melhor qualidade de áudio."}
      </p>
    </div>
  )
}
