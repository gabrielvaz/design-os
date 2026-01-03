/**
 * Product data loading and markdown parsing utilities
 */

import type { ProductOverview, ProductRoadmap, Problem, Section, ProductData } from '@/types/product'
import { loadDataModel, hasDataModel } from './data-model-loader'
import { loadDesignSystem, hasDesignSystem } from './design-system-loader'
import { loadShellInfo, hasShell } from './shell-loader'

// Load markdown files from /projects/ directory at build time
const projectFiles = import.meta.glob('/projects/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

// Load zip files from projects directory at build time
const exportZipFiles = import.meta.glob('/projects/**/*.zip', {
  query: '?url',
  import: 'default',
  eager: true,
}) as Record<string, string>

/**
 * List all available projects based on directories in /projects/
 */
export function listProjects() {
  const projects = new Set<string>()
  
  Object.keys(projectFiles).forEach(path => {
    const match = path.match(/\/projects\/([^/]+)\//)
    if (match?.[1]) {
      projects.add(match[1])
    }
  })
  
  const projectList = Array.from(projects).map(id => {
    const overviewPath = `/projects/${id}/product-overview.md`
    const overviewMd = projectFiles[overviewPath]
    const overview = overviewMd ? parseProductOverview(overviewMd) : null
    
    return {
      id,
      name: overview?.name || id,
      description: overview?.description || ''
    }
  })

  // Ensure "bible-notes" is first if it exists
  projectList.sort((a, b) => {
    if (a.id === 'bible-notes') return -1
    if (b.id === 'bible-notes') return 1
    return a.id.localeCompare(b.id)
  })

  return projectList
}

/**
 * Slugify a string for use as an ID
 * Converts " & " to "-and-" to maintain semantic meaning
 */
function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+&\s+/g, '-and-') // Convert " & " to "-and-" first
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/**
 * Parse product-overview.md content into ProductOverview structure
 */
export function parseProductOverview(md: string): ProductOverview | null {
  if (!md || !md.trim()) return null

  try {
    // Extract product name from first # heading
    const nameMatch = md.match(/^#\s+(.+)$/m)
    const name = nameMatch?.[1]?.trim() || 'Product Overview'

    // Extract description - content between ## Description and next ##
    const descMatch = md.match(/## Description\s*\n+([\s\S]*?)(?=\n## |\n#[^#]|$)/)
    const description = descMatch?.[1]?.trim() || ''

    // Extract problems - ### Problem N: Title pattern
    const problemsSection = md.match(/## Problems & Solutions\s*\n+([\s\S]*?)(?=\n## |\n#[^#]|$)/)
    const problems: Problem[] = []

    if (problemsSection?.[1]) {
      const problemMatches = [...problemsSection[1].matchAll(/### Problem \d+:\s*(.+)\n+([\s\S]*?)(?=\n### |\n## |$)/g)]
      for (const match of problemMatches) {
        problems.push({
          title: match[1].trim(),
          solution: match[2].trim(),
        })
      }
    }

    // Extract features - bullet list after ## Key Features
    const featuresSection = md.match(/## Key Features\s*\n+([\s\S]*?)(?=\n## |\n#[^#]|$)/)
    const features: string[] = []

    if (featuresSection?.[1]) {
      const lines = featuresSection[1].split('\n')
      for (const line of lines) {
        const trimmed = line.trim()
        if (trimmed.startsWith('- ')) {
          features.push(trimmed.slice(2).trim())
        }
      }
    }

    // Return null if we couldn't parse anything meaningful
    if (!description && problems.length === 0 && features.length === 0) {
      return null
    }

    return { name, description, problems, features }
  } catch {
    return null
  }
}

/**
 * Parse product-roadmap.md content into ProductRoadmap structure
 */
export function parseProductRoadmap(md: string): ProductRoadmap | null {
  if (!md || !md.trim()) return null

  try {
    const sections: Section[] = []

    // Match sections with pattern ### N. Title
    const sectionMatches = [...md.matchAll(/### (\d+)\.\s*(.+)\n+([\s\S]*?)(?=\n### |\n## |\n#[^#]|$)/g)]

    for (const match of sectionMatches) {
      const order = parseInt(match[1], 10)
      const title = match[2].trim()
      const description = match[3].trim()

      sections.push({
        id: slugify(title),
        title,
        description,
        order,
      })
    }

    // Sort by order
    sections.sort((a, b) => a.order - b.order)

    if (sections.length === 0) {
      return null
    }

    return { sections }
  } catch {
    return null
  }
}

/**
 * Load all project data from markdown files and other sources
 */
export function loadProjectData(projectId: string): ProductData {
  const overviewPath = `/projects/${projectId}/product-overview.md`
  const roadmapPath = `/projects/${projectId}/product-roadmap.md`
  
  const overviewContent = projectFiles[overviewPath]
  const roadmapContent = projectFiles[roadmapPath]

  return {
    overview: overviewContent ? parseProductOverview(overviewContent) : null,
    roadmap: roadmapContent ? parseProductRoadmap(roadmapContent) : null,
    dataModel: loadDataModel(projectId),
    designSystem: loadDesignSystem(projectId),
    shell: loadShellInfo(projectId),
  }
}

/**
 * Check if product overview has been defined
 */
export function hasProductOverview(projectId: string): boolean {
  return `/projects/${projectId}/product-overview.md` in projectFiles
}

/**
 * Check if product roadmap has been defined
 */
export function hasProductRoadmap(projectId: string): boolean {
  return `/projects/${projectId}/product-roadmap.md` in projectFiles
}

/**
 * Check if export zip file exists
 */
export function hasExportZip(projectId: string): boolean {
  return `/projects/${projectId}/product-plan.zip` in exportZipFiles
}

/**
 * Get the URL of the export zip file (if it exists)
 */
export function getExportZipUrl(projectId: string): string | null {
  return exportZipFiles[`/projects/${projectId}/product-plan.zip`] || null
}

/**
 * Get all files for a project (for individual downloads)
 */
export function getProjectFiles(projectId: string) {
  const files: { path: string; name: string }[] = []
  const prefix = `/projects/${projectId}/`
  
  Object.keys(projectFiles).forEach(path => {
    if (path.startsWith(prefix)) {
      files.push({
        path,
        name: path.replace(prefix, '')
      })
    }
  })

  return files
}

/**
 * Legacy alias for loadProjectData
 */
export const loadProductData = loadProjectData

// Re-export utility functions for checking individual pieces
export { hasDataModel, hasDesignSystem, hasShell }
