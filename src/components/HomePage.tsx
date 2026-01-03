import { useNavigate } from 'react-router-dom'
import { Plus, BookOpen, ChevronRight, Terminal } from 'lucide-react'
import { listProjects } from '@/lib/product-loader'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'

export function HomePage() {
  const navigate = useNavigate()
  const projects = listProjects()

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <header className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-stone-900 dark:bg-stone-100 p-2 rounded-lg">
              <BookOpen className="w-6 h-6 text-stone-100 dark:text-stone-900" />
            </div>
            <h1 className="text-xl font-bold text-stone-900 dark:text-stone-100">Design OS</h1>
          </div>
          <ThemeToggle />
        </header>

        {/* Hero Section */}
        <section className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
            Seus Projetos
          </h2>
          <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl">
            Bem-vindo ao Design OS. Organize suas ideias, modelos de dados e sistemas de design em um só lugar.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/${project.id}`)}
              className="group cursor-pointer bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 hover:border-stone-400 dark:hover:border-stone-600 transition-all shadow-sm hover:shadow-md"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="bg-stone-100 dark:bg-stone-800 p-3 rounded-xl group-hover:bg-stone-900 dark:group-hover:bg-stone-100 transition-colors">
                  <BookOpen className="w-6 h-6 text-stone-600 dark:text-stone-400 group-hover:text-stone-100 dark:group-hover:text-stone-900" />
                </div>
                <ChevronRight className="w-5 h-5 text-stone-300 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                {project.name}
              </h3>
              <p className="text-stone-600 dark:text-stone-400 text-sm line-clamp-2">
                {project.description || 'Nenhuma descrição fornecida.'}
              </p>
            </div>
          ))}

          {/* New Project Placeholder */}
          <div className="border-2 border-dashed border-stone-200 dark:border-stone-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4 min-h-[200px]">
            <div className="bg-stone-100 dark:bg-stone-800 p-4 rounded-full">
              <Plus className="w-8 h-8 text-stone-400" />
            </div>
            <div className="space-y-1">
              <p className="font-medium text-stone-900 dark:text-stone-100">Novo Projeto</p>
              <p className="text-xs text-stone-500">Siga as instruções abaixo para adicionar</p>
            </div>
          </div>
        </section>

        {/* Instructions */}
        <section className="bg-stone-900 text-stone-100 rounded-2xl p-8 space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <Terminal className="w-6 h-6 text-lime-400" />
            <h3 className="text-lg font-bold">Como criar um novo projeto</h3>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-stone-400 text-sm">Use o Gemini CLI para gerar a estrutura inicial:</p>
              <div className="bg-stone-950 p-4 rounded-lg font-mono text-sm border border-stone-800 text-lime-400 overflow-x-auto">
                gemini /new-project --name "NOME_DO_PROJETO"
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mt-4">
              <div className="space-y-1">
                <span className="text-stone-500 font-bold block">1. Gere o Spec</span>
                <p className="text-stone-300">A IA criará a pasta em `/projects/` com os arquivos base.</p>
              </div>
              <div className="space-y-1">
                <span className="text-stone-500 font-bold block">2. Personalize</span>
                <p className="text-stone-300">Edite os arquivos Markdown para definir seu produto.</p>
              </div>
              <div className="space-y-1">
                <span className="text-stone-500 font-bold block">3. Visualize</span>
                <p className="text-stone-300">O projeto aparecerá automaticamente nesta lista.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8">
          <p className="text-sm text-stone-500">
            Powered by <span className="font-bold text-stone-900 dark:text-stone-100">Design OS</span>
          </p>
        </footer>
      </div>
    </div>
  )
}
