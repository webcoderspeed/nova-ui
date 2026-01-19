# Nova UI

A modern, accessible, and highly customizable UI component library built with React, TypeScript, and Tailwind CSS. Nova UI provides a comprehensive set of beautifully designed components that follow modern design principles and accessibility standards.

## ✨ Features

- **Modern Design**: Clean, minimalist components with smooth animations
- **Accessibility First**: WCAG 2.1 compliant with proper ARIA attributes
- **TypeScript Ready**: Fully typed components for better development experience
- **Tailwind CSS**: Built with Tailwind CSS for easy customization
- **Dark Mode**: Built-in dark mode support with seamless switching
- **Responsive**: Mobile-first design that works on all screen sizes
- **Customizable**: Easy theming and customization options

## 🚀 Installation

Nova UI is designed to be installed as a Git submodule, giving you full control over the source code and easy version management.

### Prerequisites

- Node.js 18.0 or later
- Git installed and configured
- Next.js 14+ or React 18+
- Tailwind CSS 3.4+
- TypeScript (recommended)

### Quick Start

The easiest way to get started is using our automated installation script:

```bash
# Download the installation script
curl -O https://raw.githubusercontent.com/acefone/nova-ui/main/install-nova.sh
chmod +x install-nova.sh

# Run the installation
./install-nova.sh https://bitbucket.org/acefone/nova-ui.git src/nova-ui v1.0.0
```

### Manual Installation

If you prefer manual setup, follow these steps:

1. **Add as Git Submodule**:
   ```bash
   git submodule add https://bitbucket.org/acefone/nova-ui.git src/nova-ui
   cd src/nova-ui
   git checkout v1.0.0  # Optional: specify version
   ```

2. **Install Dependencies**:
   ```bash
   cd src/nova-ui
   node scripts/setup-submodule.mjs
   ```

3. **Configure Tailwind CSS**:
   Add the following to your `tailwind.config.js`:
   ```javascript
   module.exports = {
     content: [
       // ... your existing content
       "./src/nova-ui/components/**/*.{ts,tsx}",
     ],
   }
   ```

4. **Configure TypeScript Paths** (optional):
   Add to your `tsconfig.json`:
   ```json
   {
     "compilerOptions": {
       "paths": {
         "@/nova-ui": ["./src/nova-ui"],
         "@/nova-ui/*": ["./src/nova-ui/*"]
       }
     }
   }
   ```

## 📦 Usage

### Importing Components

```tsx
import { NovaButton } from "@/nova-ui"
import { NovaCard, NovaCardHeader, NovaCardContent } from "@/nova-ui"
import { NovaInput } from "@/nova-ui"

export function MyComponent() {
  return (
    <NovaCard>
      <NovaCardHeader>Welcome to Nova UI</NovaCardHeader>
      <NovaCardContent>
        <NovaInput placeholder="Enter your name" floatingLabel />
        <NovaButton variant="glow" className="mt-4">
          Get Started
        </NovaButton>
      </NovaCardContent>
    </NovaCard>
  )
}
```

### Theme Provider

Wrap your application with the ThemeProvider for dark mode support:

```tsx
import { ThemeProvider } from "@/nova-ui/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="nova-ui-theme">
      <YourApp />
    </ThemeProvider>
  )
}
```

## 🎨 Components

Nova UI includes a comprehensive set of components:

### Basic Components
- **Button** (`NovaButton`) - Various styles and variants
- **Input** (`NovaInput`) - Form inputs with floating labels
- **Card** (`NovaCard`) - Container components
- **Badge** (`NovaBadge`) - Status indicators
- **Avatar** (`NovaAvatar`) - User profile images

### Navigation
- **Tabs** (`NovaTabs`) - Tabbed navigation
- **Dropdown** (`NovaDropdown`) - Context menus
- **Navigation Menu** (`NovaNavigationMenu`) - Complex navigation

### Data Display
- **Table** (`NovaTable`) - Data tables
- **Dialog** (`NovaDialog`) - Modal dialogs
- **Tooltip** (`NovaTooltip`) - Information tooltips
- **Alert** (`NovaAlert`) - Notification alerts

### Utilities
- **Skeleton** (`NovaSkeleton`) - Loading states
- **Separator** (`NovaSeparator`) - Visual separators
- **Scroll Area** (`NovaScrollArea`) - Custom scroll areas

## 🔧 Customization

### Theming

Nova UI uses CSS variables for theming. You can customize the theme by overriding these variables:

```css
:root {
  --nova-primary: 222.2 84% 4.9%;
  --nova-primary-foreground: 210 40% 98%;
  --nova-background: 0 0% 100%;
  --nova-foreground: 222.2 84% 4.9%;
  /* ... more variables */
}

.dark {
  --nova-primary: 210 40% 98%;
  --nova-primary-foreground: 222.2 84% 4.9%;
  --nova-background: 222.2 84% 4.9%;
  --nova-foreground: 210 40% 98%;
  /* ... more variables */
}
```

### Component Styling

All components can be styled using Tailwind CSS classes:

```tsx
<NovaButton 
  className="bg-custom-blue text-white hover:bg-custom-blue-dark"
  variant="glow"
>
  Custom Button
</NovaButton>
```

## 📖 Documentation

For detailed documentation and examples, visit our documentation site:

- [Component Documentation](https://nova-ui-docs.vercel.app)
- [Getting Started Guide](https://nova-ui-docs.vercel.app/docs/installation)
- [API Reference](https://nova-ui-docs.vercel.app/docs/components)

## 🚀 Development

### Project Structure

```
nova-ui/
├── components/          # React components
├── libs/               # Utility libraries
├── hooks/              # Custom React hooks
├── styles/             # Global styles and CSS
├── scripts/            # Build and setup scripts
├── package.json        # Dependencies and scripts
├── postcss.config.mjs   # PostCSS configuration
└── tsconfig.json      # TypeScript configuration
```

### Building for Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run type checking
npm run type-check

# Run linting
npm run lint
```

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://bitbucket.org/your-username/nova-ui.git`
3. Install dependencies: `npm install`
4. Create a feature branch: `git checkout -b feature/amazing-feature`
5. Make your changes and commit: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [documentation](https://nova-ui-docs.vercel.app)
2. Search existing [issues](https://bitbucket.org/acefone/nova-ui/issues)
3. Create a new issue with detailed information
4. Join our [Discord community](https://discord.gg/nova-ui) for help

## 🎯 Roadmap

- [ ] More component variants
- [ ] Advanced theming system
- [ ] Component playground
- [ ] Storybook integration
- [ ] Performance optimizations
- [ ] Internationalization (i18n)
- [ ] Server-side rendering improvements

---

Built with ❤️ by the Acefone Team