# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Agroptima Design System is a React component library built with Next.js, TypeScript, and SCSS. It follows atomic design principles and uses Storybook for component documentation and development. The design system supports multiple themes (Pistachio and Strawberry) through CSS custom properties.

**Repository**: https://github.com/agroptima/design-system
**Published Documentation**: https://agroptima.github.io/design-system/

## Common Development Commands

### Development & Storybook

```bash
npm run dev              # Start Storybook dev server (port 6006)
npm run build-storybook  # Build static Storybook documentation
npm run chromatic        # Run visual regression testing with Chromatic
```

### Code Quality

```bash
npm run lint             # Run ESLint on all files
npm run lint:fix         # Fix ESLint issues automatically
npm run types            # Type check with TypeScript (no emit)
```

### Testing

```bash
npm run test             # Run Jest test suite
npm run test-coverage    # Run tests with coverage report
npm test -- --testNamePattern="ModalProps"  # Run single test by pattern
npm test -- src/atoms/Button/Button.test.tsx  # Run tests for specific file
npm test -- --watch     # Run tests in watch mode
```

### Publishing

```bash
npm publish --tag beta   # Publish beta version to npm
```

## Architecture & Code Organization

### Directory Structure

```
src/
├── atoms/               # 22 UI components (Button, Modal, Form, DatePicker, etc.)
├── icons/               # 70+ SVG icons as React components via @svgr/webpack
├── settings/            # Design tokens (colors, typography, spacing, breakpoints)
├── generic/             # Global styles (reset, base, themes, fonts)
├── utils/               # Utility functions (classNames, dateHelpers, buildHelpText, etc.)
├── hooks/               # Custom React hooks (useOpen, useOutsideClick, useSearch)
├── stories/             # Storybook stories and documentation
├── docs/                # Additional documentation
├── examples/            # Usage examples
└── index.scss           # Main stylesheet entry point
```

### Component Structure

Each component in `/src/atoms/` follows a consistent pattern:

```
ComponentName/
├── index.ts              # Export types and component
├── ComponentName.tsx     # Main component implementation
├── [Variant].tsx         # Additional component variants
└── ComponentName.scss    # Component styles
```

**Key patterns:**
- Components export TypeScript interfaces for full type safety
- Each component has its own dedicated SCSS file (no global styles)
- Use BEM-like naming convention for CSS classes
- Props extend from appropriate HTML elements (e.g., `ButtonHTMLAttributes`)
- SVG icons are used via the `Icon` component for consistency

### Design Tokens System

**Location**: `/src/settings/`

- **colors.css** - Base color palette: 11 color families (Red, Green, Blue, Orange, Yellow, Purple, Brown, Gray, Teal, Neutral, Turquoise) at 11 shade levels (50-1000)
- **color_alias.css** - Theme-specific color mappings (Strawberry & Pistachio)
- **typography/** - SCSS mixins for typography styles:
  - `_content.scss` - Headings (H1-H4), Body, Footnote sizes and weights
  - `_form.scss` - Form-specific typography
  - `_cards_table.scss` - Table typography
- **_config.scss** - Spacing scale, border radius, responsive breakpoints
- **_breakpoints.scss** - Breakpoints: 375px (mobile), 900px (tablet), 1200px (desktop)
- **_depth.scss** - Z-index scale
- **_mixins.scss** - Reusable SCSS utilities

### Theme Management

- **Two themes**: Pistachio (default) and Strawberry
- Theme switching via CSS class selectors: `.pistachio` or `.strawberry`
- Colors defined as CSS custom properties in `/src/generic/themes.css`
- Theme-specific colors alias to base color tokens for flexibility
- Currently on branch `BOD-1389-add-themes-management` for ongoing theme improvements
- Managed in Storybook via `@storybook/addon-themes`

### Icon System

- Located in `/src/icons/`
- 70+ SVG icons imported as React components via `@svgr/webpack`
- Central export in `icons/index.tsx` provides all icons as named imports
- Components use the `Icon` component wrapper for consistent sizing and styling
- SVG webpack configuration in `.storybook/main.ts` handles conversion

### State Management & Utilities

**Custom Hooks** (`/src/hooks/`):
- `useOpen.ts` - Toggle open/close state with callback support
- `useOutsideClick.ts` - Detect clicks outside a component (for modals, popovers)
- `useSearch.ts` - Search input handling and filtering

**Utilities** (`/src/utils/`):
- `classNames.ts` - Conditional class name builder (similar to npm `classnames`)
- `buildHelpText.ts` - Format help text with error states
- `dateHelpers.ts` - Date manipulation utilities
- `normalizeSearch.ts` - Normalize search strings

No Redux/Zustand - state is kept lightweight and component-specific.

## Configuration Reference

### TypeScript (`tsconfig.json`)

- **Target**: ES5 for broad browser compatibility
- **Mode**: Strict mode enabled for type safety
- **JSX**: Preserve (Next.js handles transformation)
- **Module Resolution**: Bundler mode for modern imports

### Jest (`jest.config.ts`)

- **Environment**: jsdom for DOM testing
- **SVG Handling**: SVG files mocked (module mapper in jest.config.ts)
- **Setup**: `jest.setup.ts` runs after environment setup
- Tests use React Testing Library (recommended over Enzyme)

### ESLint (`eslint.config.mjs`)

- **Extends**: Next.js core-web-vitals and Prettier
- **Plugins**: simple-import-sort (enforces import ordering), prettier (code formatting)
- **Key Rules**:
  - Import sorting: External packages → relative imports
  - Prettier format enforcement (`prettier/prettier: error`)
  - Exports must be sorted

### Storybook (`.storybook/main.ts` & `.storybook/preview.tsx`)

- **Story Discovery**: Finds all `.mdx` and `.stories.tsx` files in `/src/`
- **Addons**: a11y (accessibility), designs, docs, themes, tag-badges
- **SVG Handling**: Special webpack configuration for `@svgr/webpack` in `/src/icons`
- **Auto Docs**: TypeScript props auto-documented via react-docgen-typescript
- **Viewport Options**: Responsive design testing configurations
- **Story Sort Order**: Welcome → Changelog → Component creation workflow → Programmers start guide → rest
- **Default Theme**: Pistachio (switchable to Strawberry via UI)

## Development Workflow

### Adding a New Component

1. Create a new directory in `/src/atoms/ComponentName/`
2. Export the component and types from `index.ts`
3. Implement component in `ComponentName.tsx` with TypeScript props interface
4. Create `ComponentName.scss` with BEM-like class naming
5. Create `ComponentName.stories.tsx` for Storybook documentation
6. Add tests in `/tests/ComponentName.test.tsx`
7. Use existing components as reference (Button, Modal, etc.)

### Styling Conventions

- Use modular SCSS with dedicated component files
- Leverage design tokens from `/src/settings/`
- Apply typography mixins for consistent text styles
- Use CSS custom properties for colors (enables theming)
- Class naming: `.component-name`, `.component-name--variant`, `.component-name__element`

### Adding Design Tokens

- Colors go in `/src/settings/colors.css` (base) and `/src/settings/color_alias.css` (theme-specific)
- Spacing, sizing, shadows in `/src/settings/_config.scss`
- Typography in `/src/settings/typography/` SCSS mixins
- Update Storybook documentation to reflect new tokens

### Testing Best Practices

- Use React Testing Library (queries: getByRole, getByLabelText preferred over getByTestId)
- Test component behavior, not implementation
- Include accessibility tests with jest-axe
- Test component variants and states
- Mock external dependencies

### Type Safety

- All components export TypeScript interfaces
- Enable strict TypeScript mode
- Use generics for composable components
- Props should extend base HTML attributes when applicable

## Storybook Documentation

### Story File Format

```typescript
import type { Meta, StoryObj } from '@storybook/nextjs'
import { ComponentName } from '@/atoms/ComponentName'

const meta = {
  component: ComponentName,
  tags: ['autodocs'],
  // ... story metadata
} satisfies Meta<typeof ComponentName>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { /* default props */ }
}
```

### Documentation Pages

- **Changelog.mdx** - Version history and breaking changes
- **Colors.mdx** - Color palette reference
- **Typography.stories.mdx** - Typography system documentation
- **Component creation workflow** - Guide for creating new components
- **Programmers start guide** - Developer onboarding documentation

## Git & Current Status

- **Active Branch**: `BOD-1389-add-themes-management` (theme system improvements)
- **Main Branch**: `main` (production-ready code)
- All PRs should target `main` for review

## Important Notes

- Design system version is published as npm package: `agroptima-design-system`
- Component documentation is auto-generated from TypeScript types and Storybook stories
- Theme tokens must be updated in both colors.css (base) and color_alias.css (theme-specific)
- Breaking changes should be reflected in Changelog.mdx before release
- Tests must pass and coverage should be maintained before publishing
