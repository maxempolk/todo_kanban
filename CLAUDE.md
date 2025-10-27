# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kanban task management application built with React 19, TypeScript, Vite, and Tailwind CSS v4. Uses Bun as the package manager and employs the React Compiler for optimized performance.

## Development Commands

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Lint code
bun run lint

# Format code with Prettier
bun run format

# Preview production build
bun run preview
```

## Architecture

### Tech Stack

- **Build Tool**: Vite (using rolldown-vite fork for improved performance)
- **React**: v19 with React Compiler enabled (babel-plugin-react-compiler)
- **Styling**: Tailwind CSS v4 with @tailwindcss/vite plugin
- **TypeScript**: Strict mode enabled with path aliases
- **Code Quality**: ESLint + Prettier integration

### Key Configuration

- **Path Alias**: `@/` maps to `./src/` (configured in vite.config.ts and tsconfig.app.json)
- **React Compiler**: Enabled via Babel plugin for automatic performance optimizations
- **Prettier**: Single quotes, 80 char width, arrow parens avoided, trailing commas ES5 style

### Project Structure

- `src/components/CreateTaskForm/` - Task creation form with nested components
- `src/types/` - TypeScript type definitions (e.g., TaskPriority)
- Component organization: Each feature has a main component with subcomponents in a nested structure

### Component Architecture

The application uses a component composition pattern where complex features (like CreateTaskForm) are broken down into smaller, focused subcomponents:

- Main form component manages state and orchestrates child components
- Child components receive state and callbacks via props
- UI responsiveness is handled with Tailwind's responsive utilities (sm:, etc.)

### Type System

- TaskPriority: Union type for 'low' | 'medium' | 'high'
- Use TypeScript path alias (@/) for imports instead of relative paths
- Props interfaces are defined inline with components
