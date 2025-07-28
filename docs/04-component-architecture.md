# Component Architecture

This project follows a well-structured component architecture that promotes reusability, maintainability, and scalability. Let's explore how components are organized and designed.

## Component Organization

### Directory Structure

```
src/
├── components/              # Shared UI components
│   ├── ui/                 # Base UI components (shadcn/ui)
│   ├── site-header.tsx     # Site navigation
│   ├── site-footer.tsx     # Site footer
│   └── ...                 # Other shared components
├── features/               # Feature-based components
│   └── profile/           # Profile feature
│       ├── components/    # Profile-specific components
│       ├── data/         # Profile data
│       └── types/        # Profile types
└── registry/              # Component registry
    ├── examples/          # Component examples
    └── ...               # Registered components
```

## Component Categories

### 1. Base UI Components (`components/ui/`)

These are foundational components built with shadcn/ui that provide consistent styling and behavior:

- **Button** - Interactive buttons with variants
- **Dialog** - Modal dialogs and overlays
- **Form** - Form components with validation
- **Typography** - Text components with consistent styling
- **Tooltip** - Hover tooltips
- **Command** - Command palette interface

**Example Usage**:
```tsx
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function MyComponent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <h2>Dialog Content</h2>
      </DialogContent>
    </Dialog>
  );
}
```

### 2. Site Components (`components/`)

These are application-specific components used across the site:

- **SiteHeader** - Main navigation and branding
- **SiteFooter** - Footer with links and information
- **CommandMenu** - Global command palette
- **ToggleTheme** - Theme switcher
- **ScrollTop** - Back to top button

**Example**: `components/site-header.tsx`
```tsx
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-edge bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-2">
            <ToggleTheme />
            <CommandMenu />
          </nav>
        </div>
      </div>
    </header>
  );
}
```

### 3. Feature Components (`features/`)

These are domain-specific components organized by feature:

#### Profile Feature (`features/profile/`)

**Components**:
- **ProfileCover** - Hero section with animations
- **ProfileHeader** - User information and avatar
- **Overview** - Contact and job information
- **About** - Personal description
- **Experiences** - Work history
- **Projects** - Portfolio projects
- **Blog** - Recent blog posts
- **SocialLinks** - Social media links

**Data Organization**:
```
features/profile/
├── components/           # UI components
├── data/               # Static data
│   ├── experiences.ts
│   ├── projects.ts
│   ├── social-links.ts
│   └── tech-stack.ts
└── types/              # TypeScript types
    ├── experiences.ts
    ├── projects.ts
    └── social-links.ts
```

**Example**: `features/profile/components/experiences/index.tsx`
```tsx
import { EXPERIENCES } from "@/features/profile/data/experiences";

export function Experiences() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Experience</h2>
      <div className="space-y-6">
        {EXPERIENCES.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}
```

### 4. Registry Components (`registry/`)

These are reusable components that can be used across projects:

- **AppleHelloEffect** - Typing animation effect
- **ThemeSwitcher** - Theme switching component
- **WheelPicker** - Custom wheel picker
- **WorkExperience** - Work experience component

**Example**: `registry/theme-switcher/theme-switcher.tsx`
```tsx
export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
```

## Component Design Patterns

### 1. Composition Pattern

Components are designed to be composable, allowing flexible combinations:

```tsx
// Parent component
export function ProfileSection() {
  return (
    <div className="space-y-8">
      <ProfileCover />
      <ProfileHeader />
      <Overview />
      <SocialLinks />
    </div>
  );
}

// Child components are self-contained
export function ProfileCover() {
  return (
    <section className="relative h-screen">
      {/* Cover content */}
    </section>
  );
}
```

### 2. Props Interface Pattern

All components use TypeScript interfaces for props:

```tsx
interface ExperienceItemProps {
  experience: Experience;
  className?: string;
}

export function ExperienceItem({ experience, className }: ExperienceItemProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <h3 className="font-semibold">{experience.title}</h3>
      <p className="text-muted-foreground">{experience.company}</p>
    </div>
  );
}
```

### 3. Data Separation Pattern

Component data is separated from UI logic:

```tsx
// Data file: features/profile/data/experiences.ts
export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "Simplamo",
    // ... other data
  },
];

// Component file: features/profile/components/experiences/index.tsx
import { EXPERIENCES } from "@/features/profile/data/experiences";

export function Experiences() {
  return (
    <section>
      {EXPERIENCES.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </section>
  );
}
```

### 4. Utility Function Pattern

Common utilities are extracted into reusable functions:

```tsx
// lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Component usage
import { cn } from "@/lib/utils";

export function MyComponent({ className }: { className?: string }) {
  return (
    <div className={cn("base-styles", className)}>
      Content
    </div>
  );
}
```

## Component Best Practices

### 1. Single Responsibility

Each component should have a single, well-defined purpose:

```tsx
// ✅ Good: Single responsibility
export function ExperienceItem({ experience }: { experience: Experience }) {
  return <div>{/* Render single experience */}</div>;
}

// ❌ Bad: Multiple responsibilities
export function ExperienceSection() {
  return (
    <div>
      <h2>Experience</h2>
      {/* Should be separate components */}
      <ExperienceList />
      <ExperienceFilters />
      <ExperienceStats />
    </div>
  );
}
```

### 2. Props Interface Design

- Use descriptive prop names
- Make props optional when appropriate
- Use union types for variants
- Provide default values when possible

```tsx
interface ButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
```

### 3. Error Boundaries

Implement error boundaries for critical components:

```tsx
export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      {children}
    </ErrorBoundary>
  );
}
```

### 4. Performance Optimization

- Use `React.memo` for expensive components
- Implement proper key props for lists
- Lazy load non-critical components
- Use `useCallback` and `useMemo` appropriately

```tsx
export const ExperienceItem = React.memo(function ExperienceItem({ 
  experience 
}: { 
  experience: Experience 
}) {
  return <div>{/* Component content */}</div>;
});
```

## Component Testing Strategy

### 1. Unit Testing

Test individual components in isolation:

```tsx
import { render, screen } from "@testing-library/react";
import { ExperienceItem } from "./experience-item";

test("renders experience title", () => {
  const experience = { title: "Developer", company: "Tech Corp" };
  render(<ExperienceItem experience={experience} />);
  expect(screen.getByText("Developer")).toBeInTheDocument();
});
```

### 2. Integration Testing

Test component interactions:

```tsx
test("experience list renders all items", () => {
  const experiences = [/* test data */];
  render(<Experiences experiences={experiences} />);
  expect(screen.getAllByRole("article")).toHaveLength(experiences.length);
});
```

## Component Documentation

### 1. JSDoc Comments

Document complex components with JSDoc:

```tsx
/**
 * ExperienceItem component displays a single work experience entry.
 * 
 * @param experience - The experience data to display
 * @param className - Optional CSS classes to apply
 * @returns JSX element representing the experience item
 */
export function ExperienceItem({ experience, className }: ExperienceItemProps) {
  // Component implementation
}
```

### 2. Storybook Integration

Use Storybook for component documentation and testing:

```tsx
// ExperienceItem.stories.tsx
export default {
  title: "Profile/ExperienceItem",
  component: ExperienceItem,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    experience: {
      title: "Senior Developer",
      company: "Tech Corp",
      // ... other props
    },
  },
};
```

This component architecture provides a solid foundation for building maintainable, scalable, and reusable UI components while following React and TypeScript best practices. 