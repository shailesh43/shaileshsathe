# Custom Hooks Deep Dive

This project includes several custom React hooks that provide reusable functionality across components. Let's explore each hook in detail.

## Available Hooks

### 1. `useControllableState` - Advanced State Management

**Location**: `src/hooks/use-controllable-state.ts`

**Purpose**: Manages state that can be either controlled (via props) or uncontrolled (internal state).

**Key Features**:
- Supports both controlled and uncontrolled modes
- Prevents switching between controlled/uncontrolled during component lifecycle
- Provides warning messages in development
- Handles function-based state updates

**Usage Example**:
```tsx
const [value, setValue] = useControllableState({
  prop: externalValue,        // Optional: controlled value
  defaultProp: "default",     // Required: default value
  onChange: handleChange,     // Optional: change handler
  caller: "MyComponent"       // Optional: for warnings
});
```

**Implementation Details**:
- Uses `useLayoutEffect` for SSR compatibility
- Implements proper cleanup and memory management
- Provides TypeScript generics for type safety

### 2. `useMediaQuery` - Responsive Design Hook

**Location**: `src/hooks/use-media-query.ts`

**Purpose**: Reactively responds to CSS media query changes.

**Key Features**:
- Real-time media query monitoring
- Proper cleanup with AbortController
- SSR-safe implementation

**Usage Example**:
```tsx
const isMobile = useMediaQuery("(max-width: 768px)");
const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

if (isMobile) {
  return <MobileLayout />;
}
```

**Implementation Details**:
- Uses `matchMedia` API
- Implements event listener for query changes
- Proper cleanup prevents memory leaks

### 3. `useIsInViewport` - Intersection Observer Hook

**Location**: `src/hooks/use-is-in-viewport.ts`

**Purpose**: Tracks when an element enters or leaves the viewport.

**Key Features**:
- Uses Intersection Observer API
- Memoized observer instance
- Automatic cleanup

**Usage Example**:
```tsx
const ref = useRef<HTMLDivElement>(null);
const isVisible = useIsInViewport(ref);

return (
  <div ref={ref} className={isVisible ? "animate-in" : "opacity-0"}>
    Content
  </div>
);
```

**Implementation Details**:
- Creates observer only on client-side
- Memoizes observer to prevent recreation
- Handles ref changes properly

### 4. `useIsClient` - SSR Safety Hook

**Location**: `src/hooks/use-is-client.ts`

**Purpose**: Determines if code is running on the client side.

**Key Features**:
- Simple boolean flag
- Prevents hydration mismatches
- Essential for client-only features

**Usage Example**:
```tsx
const isClient = useIsClient();

if (!isClient) {
  return <Skeleton />;
}

return <ClientOnlyComponent />;
```

### 5. `useLayoutEffect` - SSR-Safe Layout Effect

**Location**: `src/hooks/use-layout-effect.tsx`

**Purpose**: Provides SSR-safe version of `useLayoutEffect`.

**Key Features**:
- Falls back to `useEffect` on server
- Prevents hydration warnings
- Maintains layout effect behavior on client

**Usage Example**:
```tsx
useLayoutEffect(() => {
  // DOM measurements or mutations
  updateLayout();
}, [dependencies]);
```

### 6. `useMetaColor` - Dynamic Meta Color

**Location**: `src/hooks/use-meta-color.ts`

**Purpose**: Dynamically updates the theme color meta tag.

**Key Features**:
- Updates `<meta name="theme-color">` tag
- Supports light/dark mode switching
- SSR-safe implementation

**Usage Example**:
```tsx
const { setMetaColor } = useMetaColor();

// Update theme color
setMetaColor(isDarkMode ? "#000000" : "#ffffff");
```

### 7. `useConfig` - Configuration Hook

**Location**: `src/hooks/use-config.ts`

**Purpose**: Provides access to application configuration.

**Key Features**:
- Centralized configuration access
- Type-safe configuration values
- Easy to extend and modify

**Usage Example**:
```tsx
const config = useConfig();

return (
  <div>
    <h1>{config.site.name}</h1>
    <p>{config.site.description}</p>
  </div>
);
```

## Hook Patterns and Best Practices

### 1. SSR Safety
Most hooks include SSR safety checks:
```tsx
const isClient = typeof window !== "undefined";
```

### 2. Cleanup Functions
Hooks that create resources provide proper cleanup:
```tsx
useEffect(() => {
  // Setup
  return () => {
    // Cleanup
  };
}, []);
```

### 3. TypeScript Generics
Hooks use generics for type safety:
```tsx
function useControllableState<T>({ prop, defaultProp }: {
  prop?: T;
  defaultProp: T;
}): [T, SetStateFn<T>]
```

### 4. Development Warnings
Hooks include helpful warnings in development:
```tsx
if (process.env.NODE_ENV !== "production") {
  console.warn("Helpful warning message");
}
```

## Creating Custom Hooks

### Guidelines
1. **Single Responsibility**: Each hook should do one thing well
2. **SSR Safety**: Always consider server-side rendering
3. **Cleanup**: Provide cleanup for subscriptions, timers, etc.
4. **TypeScript**: Use proper typing for better DX
5. **Documentation**: Include JSDoc comments for complex hooks

### Example Template
```tsx
import { useEffect, useState } from "react";

interface UseCustomHookOptions {
  // Define options interface
}

export function useCustomHook(options: UseCustomHookOptions) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    // Setup logic
    return () => {
      // Cleanup logic
    };
  }, [/* dependencies */]);

  return {
    // Return values
  };
}
```

These custom hooks provide a solid foundation for building complex, interactive components while maintaining clean, reusable code patterns. 