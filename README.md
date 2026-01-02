# Next.js + HeroUI Starter

A modern, production-ready starter template built with Next.js 16, HeroUI, and Tailwind CSS v4. This starter provides a solid foundation for building beautiful, accessible web applications with TypeScript support.

[![GitHub](https://img.shields.io/github/license/kurkanduk/heroui-next-starter)](https://github.com/kurkanduk/heroui-next-starter)
[![GitHub stars](https://img.shields.io/github/stars/kurkanduk/heroui-next-starter)](https://github.com/kurkanduk/heroui-next-starter)

## Features

- ⚡ **Next.js 16** - Latest Next.js with App Router
- 🎨 **HeroUI** - Beautiful React components built with Tailwind CSS
- 🎯 **TypeScript** - Full type safety out of the box
- 🧩 **Custom Components** - Pre-built Stack, Typography, StaticDrawer, View, and ErrorBoundary components
- 📱 **Responsive Layouts** - Header and Drawer navigation layouts
- 🎨 **Tailwind CSS v4** - Latest Tailwind with modern features
- 🧪 **Testing** - Vitest and React Testing Library configured
- 📝 **Code Quality** - ESLint and Prettier configured
- 🌙 **Dark Theme** - Dark theme enabled by default

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/kurkanduk/heroui-next-starter.git
cd heroui-next-starter
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Copy environment variables:

```bash
cp .env.example .env.local
```

4. Update `.env.local` with your app configuration:

```env
NEXT_PUBLIC_APP_NAME="Your App Name"
NEXT_PUBLIC_APP_TITLE="Your App Title"
NEXT_PUBLIC_APP_DESCRIPTION="Your app description"
```

5. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
heroui-next-starter/
├── app/                    # Next.js App Router
│   ├── about/             # About page with component examples
│   ├── api/               # API routes
│   ├── layout/            # Layout components
│   │   ├── HeaderLayout.tsx
│   │   └── DrawerLayout.tsx
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── providers.tsx      # Client-side providers
│   └── globals.css        # Global styles
├── components/            # Custom components
│   ├── Drawer/           # StaticDrawer component
│   ├── ErrorBoundary/    # ErrorBoundary component
│   ├── Stack/            # Stack component
│   ├── Typography/       # Typography component
│   └── View/             # View component
├── hooks/                # Custom React hooks
│   ├── useMediaQuery.ts
│   ├── useLocalStorage.ts
│   ├── useDebounce.ts
│   ├── useClickOutside.ts
│   └── index.ts
├── lib/                  # Utility functions
│   └── utils.ts          # Common utilities
├── public/               # Static assets
└── ...config files
```

## Custom Components

### Stack

A flexible layout component similar to MUI's Stack, using Tailwind CSS for styling.

```tsx
import Stack from "@/components/Stack";

<Stack direction="row" spacing={4}>
  <div>Item 1</div>
  <div>Item 2</div>
</Stack>;
```

**Props:**

- `direction`: `"row" | "column" | "row-reverse" | "column-reverse"` (default: `"column"`)
- `spacing`: `number | string` (default: `0`)
- `divider`: `ReactNode` - Element to insert between children
- `component`: `ElementType` - Root element type (default: `"div"`)

### Typography

A typography component for consistent text styling.

```tsx
import Typography from "@/components/Typography";

<Typography variant="h1" color="primary">
  Heading Text
</Typography>;
```

**Props:**

- `variant`: `"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2" | "subtitle1" | "subtitle2" | "caption" | "overline"` (default: `"body1"`)
- `color`: `"default" | "primary" | "secondary" | "success" | "warning" | "danger"` (default: `"default"`)
- `align`: `"left" | "center" | "right" | "justify"` (default: `"left"`)
- `component`: `ElementType` - Override the root element

### StaticDrawer

A static sidebar component that can be placed on the left or right side.

```tsx
import StaticDrawer from "@/components/Drawer";

<StaticDrawer placement="left" width="w-64" isCollapsed={false}>
  {/* Drawer content */}
</StaticDrawer>;
```

**Props:**

- `placement`: `"left" | "right"` (default: `"left"`)
- `width`: `string` - Tailwind width class (default: `"w-64"`)
- `isCollapsed`: `boolean` - Collapse to icon-only mode (default: `false`)

### View

A component that calculates drawer and header dimensions and applies proper spacing.

```tsx
import View from "@/components/View";

<View hasDrawer drawerWidth="w-64" headerHeight={64} drawerPlacement="left">
  {/* Content */}
</View>;
```

**Props:**

- `hasDrawer`: `boolean` (default: `false`)
- `drawerWidth`: `string | number`
- `headerHeight`: `string | number`
- `drawerPlacement`: `"left" | "right"` (default: `"left"`)

### ErrorBoundary

A React Error Boundary component to catch and handle errors in the component tree.

```tsx
import ErrorBoundary from "@/components/ErrorBoundary";

<ErrorBoundary
  onError={(error, errorInfo) => {
    console.error("Error caught:", error, errorInfo);
  }}
  fallback={(error, reset) => (
    <div>
      <p>Error: {error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  )}
>
  <MyComponent />
</ErrorBoundary>;
```

**Props:**

- `children`: `ReactNode` - The children to render
- `fallback`: `ReactNode | (error: Error, resetError: () => void) => ReactNode` - Custom fallback UI
- `onError`: `(error: Error, errorInfo: React.ErrorInfo) => void` - Callback when error is caught
- `resetOnUnmount`: `boolean` - Reset error state on unmount (default: `false`)

**Note:** ErrorBoundary is a Client Component and cannot be used in Server Components. For Next.js App Router route-level error handling, use the `error.tsx` file.

## Layouts

The starter includes two layout options:

### HeaderLayout

Navigation items are displayed in the header navbar.

### DrawerLayout

Navigation items are displayed in a collapsible sidebar drawer. On desktop, the drawer is persistent and can be collapsed to show only icons.

You can switch between layouts on the About page.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage

## Hooks

The starter includes several useful React hooks located in the `hooks/` directory:

### useMediaQuery

Detect if a media query matches (useful for responsive design).

```tsx
import { useMediaQuery } from "@/hooks";

const isMobile = useMediaQuery("(max-width: 768px)");
```

### useLocalStorage

Manage localStorage with React state synchronization.

```tsx
import { useLocalStorage } from "@/hooks";

const [user, setUser] = useLocalStorage("user", { name: "Guest" });
```

### useDebounce

Debounce a value (useful for search inputs).

```tsx
import { useDebounce } from "@/hooks";

const [searchTerm, setSearchTerm] = useState("");
const debouncedSearchTerm = useDebounce(searchTerm, 300);
```

### useClickOutside

Detect clicks outside of an element (useful for modals and dropdowns).

```tsx
import { useClickOutside } from "@/hooks";

const ref = useClickOutside(() => {
  setIsOpen(false);
});
```

## Utilities

The starter includes utility functions in `lib/utils.ts`:

### cn

Merge Tailwind CSS classes properly (combines clsx and tailwind-merge).

```tsx
import { cn } from "@/lib/utils";

<div className={cn("px-2 py-1", "px-4")} />; // "py-1 px-4"
```

### Other Utilities

- `formatNumber(value)` - Format numbers with thousand separators
- `formatDate(date, style)` - Format dates to readable strings
- `debounce(func, wait)` - Debounce function calls
- `isValidEmail(email)` - Validate email addresses
- `truncate(str, length)` - Truncate strings with ellipsis

## Testing

Tests are written with Vitest and React Testing Library. Test files are located next to their components in `__tests__` directories.

```bash
npm run test
```

## Styling

The project uses Tailwind CSS v4 with HeroUI theme integration. Global styles are in `app/globals.css`. The default theme is dark mode.

To customize the theme, modify the HeroUI configuration in `hero.ts` and Tailwind classes throughout the components.

## Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
NEXT_PUBLIC_APP_NAME="Your App Name"
NEXT_PUBLIC_APP_TITLE="Your App Title"
NEXT_PUBLIC_APP_DESCRIPTION="Your app description"
```

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kurkanduk/heroui-next-starter)

For other deployment options, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [HeroUI Documentation](https://heroui.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

MIT
