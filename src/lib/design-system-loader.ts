/**
 * Design system loading utilities for colors and typography
 */

import type { DesignSystem, ColorTokens, TypographyTokens } from '@/types/product'

// Load JSON files from projects/*/design-system at build time
const designSystemFiles = import.meta.glob('/projects/*/design-system/*.json', {
  eager: true,
}) as Record<string, { default: Record<string, string> }>

/**
 * Load color tokens from colors.json
 */
export function loadColorTokens(projectId: string): ColorTokens | null {
  const colorsModule = designSystemFiles[`/projects/${projectId}/design-system/colors.json`]
  if (!colorsModule?.default) return null

  const colors = colorsModule.default
  if (!colors.primary || !colors.secondary || !colors.neutral) {
    return null
  }

  return {
    primary: colors.primary,
    secondary: colors.secondary,
    neutral: colors.neutral,
  }
}

/**
 * Load typography tokens from typography.json
 */
export function loadTypographyTokens(projectId: string): TypographyTokens | null {
  const typographyModule = designSystemFiles[`/projects/${projectId}/design-system/typography.json`]
  if (!typographyModule?.default) return null

  const typography = typographyModule.default
  if (!typography.heading || !typography.body) {
    return null
  }

  return {
    heading: typography.heading,
    body: typography.body,
    mono: typography.mono || 'IBM Plex Mono',
  }
}

/**
 * Load the complete design system
 */
export function loadDesignSystem(projectId: string): DesignSystem | null {
  const colors = loadColorTokens(projectId)
  const typography = loadTypographyTokens(projectId)

  // Return null if neither colors nor typography are defined
  if (!colors && !typography) {
    return null
  }

  return { colors, typography }
}

/**
 * Check if design system has been defined (at least colors or typography)
 */
export function hasDesignSystem(projectId: string): boolean {
  return (
    `/projects/${projectId}/design-system/colors.json` in designSystemFiles ||
    `/projects/${projectId}/design-system/typography.json` in designSystemFiles
  )
}

/**
 * Check if colors have been defined
 */
export function hasColors(projectId: string): boolean {
  return `/projects/${projectId}/design-system/colors.json` in designSystemFiles
}

/**
 * Check if typography has been defined
 */
export function hasTypography(projectId: string): boolean {
  return `/projects/${projectId}/design-system/typography.json` in designSystemFiles
}
