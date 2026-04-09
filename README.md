# Nova UI

> Acefone Design System — Built from scratch with React, TypeScript, and TailwindCSS v4.

## Components (15)

| Component                        | Pattern                 | Description                                           |
| -------------------------------- | ----------------------- | ----------------------------------------------------- |
| `NovaButton`                     | Polymorphic, forwardRef | Variants, sizes, loading, icons, `as` prop            |
| `NovaText`                       | Polymorphic, forwardRef | Fluid type scale, weights, colors, truncate           |
| `NovaHeading`                    | Polymorphic, forwardRef | Levels 1-6, auto semantic tag                         |
| `NovaInput`                      | forwardRef              | Label, error, helper, addons, controlled/uncontrolled |
| `NovaBadge`                      | Simple                  | Variants, sizes, dot indicator                        |
| `NovaAvatar`                     | forwardRef              | Image with fallback initials                          |
| `NovaSpinner`                    | Simple                  | Accessible loading indicator                          |
| `NovaCard`                       | Compound                | Header, Body, Footer sub-components                   |
| `NovaCheckbox`                   | forwardRef              | Label, indeterminate, a11y                            |
| `NovaRadioGroup` + `NovaRadio`   | Compound                | Context-based group, keyboard nav                     |
| `NovaSwitch`                     | forwardRef              | role="switch", sizes                                  |
| `NovaTabs`                       | Compound                | Keyboard nav, roving tabindex, auto test IDs          |
| `NovaModal`                      | Compound + Portal       | Focus trap, Escape close, overlay, scroll lock        |
| `NovaTooltip`                    | Wrapper                 | Hover/focus trigger, positions, Escape dismiss        |
| `NovaToastProvider` + `useToast` | Provider + Hook         | Auto-dismiss, variants, live regions                  |
| `NovaTable`                      | Compound                | Semantic HTML, striped, bordered                      |

## Quick Start (Git Submodule)

### 1. Add Nova UI to your project

```bash
git submodule add git@bitbucket.org:your-workspace/nova-ui.git nova-ui
cd nova-ui && git checkout v1.0.0 && cd ..
git add nova-ui .gitmodules
git commit -m "feat: add Nova UI v1.0.0"
```

### 2. Install peer dependencies

```bash
npm install clsx tailwind-merge
npm install -D tailwindcss @tailwindcss/vite   # Vite projects
# OR
npm install -D tailwindcss @tailwindcss/postcss # Next.js projects
```

### 3. Configure TypeScript

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@nova-ui": ["./nova-ui/src"],
      "@nova-ui/*": ["./nova-ui/src/*"]
    }
  }
}
```

### 4. Configure Vite (or Next.js)

**Vite:**

```typescript
// vite.config.ts
import path from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@nova-ui': path.resolve(__dirname, './nova-ui/src'),
      // Prevent React duplicate instance
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    },
  },
});
```

**Next.js:**

```typescript
// next.config.ts
const nextConfig = {
  transpilePackages: ['nova-ui'],
  webpack: (config) => {
    config.resolve.alias['@nova-ui'] = path.resolve(__dirname, './nova-ui/src');
    config.resolve.alias['react'] = path.resolve(__dirname, 'node_modules/react');
    return config;
  },
};
```

### 5. Configure Tailwind CSS

```css
/* your-app/src/index.css or globals.css */
@import 'tailwindcss';
@source '../nova-ui/src/**/*.{ts,tsx}';
@import '../nova-ui/src/css/tokens.css';
@import '../nova-ui/src/css/typography.css';
@import '../nova-ui/src/css/animations.css';
@import '../nova-ui/src/css/reset.css';
```

### 6. Use components

```tsx
import { NovaThemeProvider, NovaButton, NovaInput, NovaHeading } from '@nova-ui';

function App() {
  return (
    <NovaThemeProvider defaultTheme="system">
      <NovaHeading level={1}>Hello Nova UI</NovaHeading>
      <NovaInput label="Email" placeholder="you@example.com" />
      <NovaButton variant="primary">Get Started</NovaButton>
    </NovaThemeProvider>
  );
}
```

## Updating Nova UI

```bash
cd nova-ui
git fetch origin --tags
git checkout v1.2.0
cd ..
git add nova-ui
git commit -m "chore: update Nova UI to v1.2.0"
```

## Cloning a project with Nova UI

```bash
git clone --recurse-submodules <your-project-url>
# OR if already cloned:
git submodule update --init --recursive
```

## Recommended git config (one-time per developer)

```bash
git config --global submodule.recurse true
git config --global diff.submodule log
git config --global status.submoduleSummary true
```

## Stripping `data-nova-test` in production

Nova UI components use `data-nova-test` attributes for testing. Strip them in production:

```bash
npm install -D react-remove-attr
```

```typescript
// vite.config.ts
import removeAttr from 'react-remove-attr';

export default defineConfig({
  plugins: [removeAttr({ extensions: ['tsx', 'jsx'], attributes: ['data-nova-test'] }), react()],
});
```

## Development

```bash
cd nova-ui
npm install
npm run playground    # Vite dev server with all components
npm run test          # Vitest (watch mode)
npm run test:run      # Vitest (single run)
npm run test:coverage # Coverage report
npm run type-check    # TypeScript check
npm run lint          # Biome + ESLint + Prettier
npm run lint:fix      # Auto-fix lint issues
npm run commit        # Commitizen guided commit
```

## Stack

- React 17+ (compatible with 17, 18, 19)
- TypeScript (strict mode)
- TailwindCSS v4 (CSS-first, `@theme`)
- Vitest + React Testing Library + vitest-axe
- Biome (lint + format) + ESLint (sonarjs) + Prettier (TW class sorting)
- Husky + Commitlint (conventional commits)
- Jenkins CI/CD + Bitbucket
