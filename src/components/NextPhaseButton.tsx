import { useNavigate, useParams } from 'react-router-dom'
import { FileText, Boxes, Layout, LayoutList, Package, ArrowRight } from 'lucide-react'
import type { Phase } from './PhaseNav'

interface NextPhaseButtonProps {
  nextPhase: Exclude<Phase, 'product'> // Can't navigate "next" to product since it's first
}

const phaseConfig: Record<Exclude<Phase, 'product'>, { label: string; icon: typeof FileText; path: (projectId: string) => string }> = {
  'data-model': { label: 'Data Model', icon: Boxes, path: (pid) => `/${pid}/data-model` },
  'design': { label: 'Design', icon: Layout, path: (pid) => `/${pid}/design` },
  'sections': { label: 'Sections', icon: LayoutList, path: (pid) => `/${pid}/sections` },
  'export': { label: 'Export', icon: Package, path: (pid) => `/${pid}/export` },
}

export function NextPhaseButton({ nextPhase }: NextPhaseButtonProps) {
  const navigate = useNavigate()
  const { projectId } = useParams()
  const config = phaseConfig[nextPhase]
  const Icon = config.icon

  if (!projectId) return null

  return (
    <button
      onClick={() => navigate(config.path(projectId))}
      className="w-full flex items-center justify-between gap-4 px-6 py-4 bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 rounded-lg hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors group"
    >
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5" strokeWidth={1.5} />
        <span className="font-medium">Continue to {config.label}</span>
      </div>
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
    </button>
  )
}
