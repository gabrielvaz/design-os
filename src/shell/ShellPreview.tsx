import { AppShell } from './components/AppShell'

export default function ShellPreview() {
  return (
    <AppShell user={{ name: 'Gabriel Vaz' }}>
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Conteúdo da Seção</h2>
        <p className="text-slate-600 dark:text-slate-400">
          As telas de design de cada seção serão renderizadas aqui dentro.
        </p>
      </div>
    </AppShell>
  )
}
