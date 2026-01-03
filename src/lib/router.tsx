import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '@/components/HomePage'
import { ProductPage } from '@/components/ProductPage'
import { DataModelPage } from '@/components/DataModelPage'
import { DesignPage } from '@/components/DesignPage'
import { SectionsPage } from '@/components/SectionsPage'
import { SectionPage } from '@/components/SectionPage'
import { ScreenDesignPage, ScreenDesignFullscreen } from '@/components/ScreenDesignPage'
import { ShellDesignPage, ShellDesignFullscreen } from '@/components/ShellDesignPage'
import { ExportPage } from '@/components/ExportPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/:projectId',
    element: <ProductPage />,
  },
  {
    path: '/:projectId/data-model',
    element: <DataModelPage />,
  },
  {
    path: '/:projectId/design',
    element: <DesignPage />,
  },
  {
    path: '/:projectId/sections',
    element: <SectionsPage />,
  },
  {
    path: '/:projectId/sections/:sectionId',
    element: <SectionPage />,
  },
  {
    path: '/:projectId/sections/:sectionId/screen-designs/:screenDesignName',
    element: <ScreenDesignPage />,
  },
  {
    path: '/:projectId/sections/:sectionId/screen-designs/:screenDesignName/fullscreen',
    element: <ScreenDesignFullscreen />,
  },
  {
    path: '/:projectId/shell/design',
    element: <ShellDesignPage />,
  },
  {
    path: '/:projectId/shell/design/fullscreen',
    element: <ShellDesignFullscreen />,
  },
  {
    path: '/:projectId/export',
    element: <ExportPage />,
  },
])
