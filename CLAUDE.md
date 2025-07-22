# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (client + server on port 8080)
- `npm run build` - Build both client and server for production
- `npm run build:client` - Build only the React SPA client
- `npm run build:server` - Build only the Express server
- `npm start` - Start production server
- `npm test` - Run Vitest tests
- `npm run typecheck` - Run TypeScript type checking
- `npm run format.fix` - Format code with Prettier

## Architecture Overview

This is a full-stack React application built on the "Fusion Starter" template with integrated Express server:

### Project Structure
- `client/` - React 18 SPA with React Router 6, TypeScript, TailwindCSS
  - `pages/` - Route components (Index.tsx = home page)
  - `components/ui/` - Radix UI component library with TailwindCSS styling
  - `App.tsx` - Main app setup with routing, Clerk auth, React Query
- `server/` - Express API backend
  - `index.ts` - Server setup with CORS, JSON middleware
  - `routes/` - API route handlers (prefixed with `/api/`)
- `shared/` - TypeScript interfaces shared between client and server

### Key Technical Details
- **Single-port development**: Vite dev server integrates Express via middleware on port 8080
- **Build system**: Dual Vite configs - main for client SPA, server config for Express build
- **Authentication**: Clerk integration with sign-in/sign-up routes
- **Styling**: TailwindCSS 3 with dark mode enabled by default, `cn()` utility for conditional classes
- **State management**: React Query for server state, built-in React state for UI
- **Path aliases**: `@/` for client code, `@shared/` for shared types

### Development Guidelines
- Keep UI components small and avoid deeply nested JSX (per .cursor rules)
- Only create API endpoints when server-side logic is required (private keys, DB operations)
- Use shared TypeScript interfaces in `shared/api.ts` for type-safe client-server communication
- New pages go in `client/pages/` and must be registered in `client/App.tsx` routes
- API routes go in `server/routes/` and are registered in `server/index.ts`

### Deployment
- Netlify-powered deployment (requires Netlify MCP tools for deployment commands)
- Production build outputs: `dist/spa/` for client, `dist/server/` for server
- Express serves the React SPA in production with fallback routing