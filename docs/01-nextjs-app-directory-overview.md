# Next.js App Directory Overview

## Project Structure

This portfolio website uses Next.js 15 with the App Router, which is the latest routing system introduced by Next.js. The app directory structure follows the new conventions and provides a more intuitive way to organize your application.

### Key Directories

```
src/
├── app/                    # App Router directory (Next.js 13+)
│   ├── (app)/             # Route groups (parentheses = no URL segment)
│   │   ├── (docs)/        # Documentation pages
│   │   └── (root)/        # Main portfolio page
│   ├── (llms)/            # LLM API routes
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   ├── not-found.tsx      # 404 page
│   ├── robots.ts          # SEO robots.txt
│   └── sitemap.ts         # SEO sitemap
├── components/            # Reusable UI components
├── features/              # Feature-based components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
├── config/                # Configuration files
├── data/                  # Static data
└── types/                 # TypeScript type definitions
```

## App Router Concepts

### 1. Route Groups `(app)`, `(docs)`, `(root)`

Route groups are created by wrapping folder names in parentheses. They don't affect the URL structure but help organize related routes:

- `(app)` - Groups the main application routes
- `(docs)` - Groups documentation-related routes  
- `(root)` - Contains the main portfolio page at `/`

### 2. Layouts

- **Root Layout** (`app/layout.tsx`): Wraps all pages, defines HTML structure, metadata, and global providers
- **App Layout** (`app/(app)/layout.tsx`): Specific layout for the main app routes
- **Docs Layout** (`app/(app)/(docs)/layout.tsx`): Layout for documentation pages

### 3. Pages

- **Home Page** (`app/(app)/(root)/page.tsx`): The main portfolio page at `/`
- **Blog Pages** (`app/(app)/(docs)/blog/`): Blog-related pages
- **Component Pages** (`app/(app)/(docs)/components/`): Component documentation

### 4. API Routes

- **GitHub API** (`app/api/stargazers_count/route.ts`): Fetches GitHub repository data
- **LLM Routes** (`app/(llms)/`): AI-powered content generation

## Key Features

### 1. Server Components by Default
All components in the app directory are React Server Components by default, providing better performance and SEO.

### 2. Built-in SEO
- `robots.ts` - Generates robots.txt
- `sitemap.ts` - Generates XML sitemap
- `manifest.ts` - PWA manifest
- Metadata API in layouts

### 3. Route Handlers
API routes use the new Route Handlers API instead of the older Pages API.

### 4. Streaming and Suspense
Built-in support for streaming and React Suspense for better loading experiences.

## Configuration

### Next.js Config (`next.config.ts`)
- **Turbopack**: Enabled for faster development
- **Image Optimization**: Configured for remote images
- **Rewrites**: URL rewriting for blog posts
- **Security Headers**: Commented out but available

### TypeScript
- Strict mode enabled
- Custom type definitions in `/types`
- Path aliases configured for clean imports

### Styling
- Tailwind CSS v4
- Custom CSS variables for theming
- Responsive design patterns

## Development Workflow

### Scripts
- `pnpm dev` - Development server with Turbopack
- `pnpm build` - Production build
- `pnpm lint` - ESLint checking
- `pnpm format:write` - Prettier formatting

### Code Quality
- ESLint with custom rules
- Prettier for formatting
- Husky for git hooks
- TypeScript strict checking

This structure provides a modern, scalable foundation for the portfolio website with excellent developer experience and performance optimizations. 