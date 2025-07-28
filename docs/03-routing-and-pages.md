# Routing and Pages Structure

This project uses Next.js 15 App Router, which provides a file-system based routing system. Let's explore how routing is organized and how pages are structured.

## App Router Fundamentals

### File-Based Routing
In the App Router, the file system directly maps to URL routes:
- `page.tsx` = Route segment
- `layout.tsx` = Shared UI for routes
- `loading.tsx` = Loading UI
- `error.tsx` = Error UI
- `not-found.tsx` = 404 page

## Route Structure

### Root Level Routes

```
app/
├── layout.tsx              # Root layout (applies to all routes)
├── page.tsx               # Home page (/)
├── not-found.tsx          # 404 page
├── robots.ts              # SEO: robots.txt
├── sitemap.ts             # SEO: sitemap.xml
└── manifest.ts            # PWA: web app manifest
```

### Route Groups

Route groups (folders with parentheses) organize routes without affecting the URL structure:

```
app/
├── (app)/                 # Route group - no URL segment
│   ├── layout.tsx         # Layout for app routes
│   ├── (docs)/           # Another route group
│   │   ├── layout.tsx     # Layout for docs
│   │   ├── blog/          # Blog routes (/blog)
│   │   └── components/    # Component docs (/components)
│   └── (root)/           # Root route group
│       └── page.tsx       # Home page (/)
└── (llms)/               # LLM API routes
    ├── about.md/          # API route (/about.md)
    ├── blog.md/           # API route (/blog.md)
    └── [slug]/            # Dynamic route (/blog.md/[slug])
```

## Page Types and Their Purposes

### 1. Main Portfolio Page
**Location**: `app/(app)/(root)/page.tsx`
**URL**: `/`
**Purpose**: The main portfolio homepage

**Features**:
- Structured data (JSON-LD) for SEO
- Profile components composition
- Responsive design with separators

```tsx
export default function Page() {
  return (
    <>
      <script type="application/ld+json" />
      <div className="mx-auto md:max-w-3xl">
        <ProfileCover />
        <ProfileHeader />
        <Overview />
        <SocialLinks />
        <About />
        <TeckStack />
        <Blog />
        <Experiences />
        <Projects />
        <Awards />
        <Certifications />
        <Brand />
      </div>
    </>
  );
}
```

### 2. Documentation Pages
**Location**: `app/(app)/(docs)/`
**URLs**: `/blog`, `/components`
**Purpose**: Blog posts and component documentation

**Features**:
- MDX support for rich content
- Dynamic routing with `[slug]`
- SEO optimization
- Code syntax highlighting

### 3. API Routes
**Location**: `app/api/` and `app/(llms)/`
**Purpose**: Backend functionality

#### GitHub API Route
**Location**: `app/api/stargazers_count/route.ts`
**URL**: `/api/stargazers_count`
**Purpose**: Fetches GitHub repository data

```tsx
export async function GET() {
  const data = await fetch("https://api.github.com/repos/ncdai/chanhdai.com", {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
    next: { revalidate: 86400 }, // Cache for 1 day
  });
  const json = await data.json();
  return Response.json({
    stargazers_count: json?.stargazers_count ?? -1,
  });
}
```

#### LLM Routes
**Location**: `app/(llms)/`
**Purpose**: AI-powered content generation
- Dynamic content based on user queries
- Markdown response format
- SEO-friendly URLs

## Layout Hierarchy

### 1. Root Layout (`app/layout.tsx`)
**Purpose**: Global HTML structure and metadata

**Features**:
- HTML document structure
- Global metadata and SEO
- Theme color management
- Font loading
- Global providers

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
      <head>
        {/* Theme scripts and metadata */}
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

### 2. App Layout (`app/(app)/layout.tsx`)
**Purpose**: Layout for main application routes

**Features**:
- Navigation components
- Site header and footer
- Common UI elements

### 3. Docs Layout (`app/(app)/(docs)/layout.tsx`)
**Purpose**: Layout for documentation pages

**Features**:
- Documentation-specific styling
- Sidebar navigation
- Code block styling

```tsx
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto border-x border-edge md:max-w-3xl">
      <div className="screen-line-after" />
      {children}
    </div>
  );
}
```

## Dynamic Routing

### Blog Posts
**Pattern**: `app/(app)/(docs)/blog/[slug]/page.tsx`
**URL**: `/blog/[slug]`
**Purpose**: Individual blog post pages

**Features**:
- Dynamic slug parameter
- MDX content rendering
- SEO metadata
- Related posts

### Component Documentation
**Pattern**: `app/(app)/(docs)/components/[slug]/page.tsx`
**URL**: `/components/[slug]`
**Purpose**: Individual component documentation

## SEO and Metadata

### Static Metadata
**Location**: `app/layout.tsx`
**Purpose**: Global SEO settings

```tsx
export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  title: {
    template: `%s | ${SITE_INFO.name}`,
    default: `${USER.displayName} - ${USER.jobTitle}`,
  },
  description: SITE_INFO.description,
  openGraph: {
    // Open Graph metadata
  },
  twitter: {
    // Twitter Card metadata
  },
};
```

### Dynamic Metadata
**Location**: Individual pages
**Purpose**: Page-specific SEO

```tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  };
}
```

## Route Handlers

### API Routes
- Use the new Route Handlers API
- Support GET, POST, PUT, DELETE methods
- Built-in request/response handling
- TypeScript support

### Example Route Handler
```tsx
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  return Response.json({ data: id });
}

export async function POST(request: Request) {
  const body = await request.json();
  
  return Response.json({ success: true });
}
```

## Performance Optimizations

### 1. Route Prefetching
Next.js automatically prefetches routes in the viewport for faster navigation.

### 2. Static Generation
Pages are statically generated by default for better performance.

### 3. Incremental Static Regeneration
API routes use `revalidate` for data freshness.

### 4. Streaming
Support for React Suspense and streaming for better loading experiences.

## Best Practices

### 1. Route Organization
- Use route groups for logical organization
- Keep related routes together
- Use descriptive folder names

### 2. Layout Composition
- Keep layouts focused and reusable
- Use nested layouts for complex UI
- Avoid layout prop drilling

### 3. SEO Optimization
- Provide comprehensive metadata
- Use structured data (JSON-LD)
- Implement proper Open Graph tags

### 4. Performance
- Use static generation when possible
- Implement proper caching strategies
- Optimize images and assets

This routing structure provides a clean, scalable foundation for the portfolio website with excellent SEO, performance, and developer experience. 