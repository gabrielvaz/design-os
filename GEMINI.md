# Design OS

## Project Overview
**Design OS** is a product planning and design tool built to bridge the gap between an initial idea and the actual codebase. It provides a structured workflow for defining product vision, data models, design systems, and feature specifications before implementation begins.

The application acts as a refined interface over a set of Markdown files, which act as the source of truth for the product design.

### Tech Stack
- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **UI Library:** Radix UI (Headless) with shadcn/ui-like component structure
- **Icons:** Lucide React
- **Routing:** React Router DOM v7
- **Language:** TypeScript

## Architecture & Data Flow

The application is "server-less" in the sense that it relies on static files (Markdown) as its database.

### Data Model (The "OS")
The core data consists of Markdown files expected to be located in a `/product` directory at the project root (though this directory may not be present in a fresh clone).
- **Loaders:** `src/lib/*-loader.ts` files (e.g., `product-loader.ts`) use Vite's `import.meta.glob` to read these Markdown files.
- **Parsing:** The loaders parse the Markdown content (extracting headings, lists, etc.) into structured TypeScript objects used by the UI.
- **AI Integration:** The `.claude/commands/design-os/` directory contains the context and prompt instructions that an AI agent (like Claude or Gemini) uses to interact with the user and generate the content for these Markdown files.

### Key Directories
- **`src/components/`**: React components.
  - `ui/`: Reusable UI components (buttons, cards, etc.).
  - `*Page.tsx`: Top-level page components for each phase of the design process.
- **`src/lib/`**: Utilities and Logic.
  - `*-loader.ts`: specialized loaders for different parts of the product spec (Product, Design System, Shell, Sections).
  - `router.tsx`: Application routing configuration.
- **`.claude/`**: AI agent configuration and "skills" definitions.

## Development

### Prerequisites
- Node.js (v20+ recommended)
- npm

### Commands
- **Install Dependencies:**
  ```bash
  npm install
  ```
- **Start Development Server:**
  ```bash
  npm run dev
  ```
  Runs on `http://localhost:3000`.
- **Build for Production:**
  ```bash
  npm run build
  ```
- **Lint Code:**
  ```bash
  npm run lint
  ```

### Convention & Style
- **Components:** Functional components with Hooks.
- **Styling:** Utility-first CSS using Tailwind classes.
- **Imports:** Uses the `@/` alias to map to `src/`.
- **Formatting:** Prettier/ESLint configuration is present.
