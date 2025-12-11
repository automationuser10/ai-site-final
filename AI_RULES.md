# AI Rules for ADYA AI Website

## Tech Stack

- **Framework**: Next.js 15 (App Router) with TypeScript and React 19
- **Styling**: Tailwind CSS v4 with custom design tokens and utility classes
- **UI Components**: shadcn/ui components with Radix UI primitives
- **Animations**: Framer Motion for complex animations and transitions
- **Icons**: Lucide React for consistent iconography
- **Forms**: React Hook Form with Zod validation
- **Fonts**: Google Fonts (Inter for body, JetBrains Mono for code)

## Project Structure Rules

### File Organization
- **Pages**: All pages go in `src/app/` following Next.js App Router conventions
- **Components**: 
  - Reusable UI components in `src/components/ui/`
  - Section components in `src/components/sections/`
  - Layout components in `src/components/layout/`
- **Utilities**: Helper functions in `src/lib/`
- **Hooks**: Custom React hooks in `src/hooks/`
- **Public Assets**: Images and static files in `public/`

### Naming Conventions
- **Directories**: Use lowercase with hyphens (e.g., `hero-section/`)
- **Components**: Use PascalCase (e.g., `HeroSection.tsx`)
- **Utilities**: Use camelCase (e.g., `formatDate.ts`)
- **CSS Classes**: Use Tailwind utility classes, avoid custom CSS unless absolutely necessary

## Component Development Rules

### When to Use What

#### UI Components (shadcn/ui)
- **Always use** shadcn/ui components for common UI patterns:
  - Buttons, inputs, forms → `@/components/ui/button`, `@/components/ui/input`
  - Dialogs, modals → `@/components/ui/dialog`
  - Dropdowns, selects → `@/components/ui/dropdown-menu`, `@/components/ui/select`
  - Cards, badges → `@/components/ui/card`, `@/components/ui/badge`
- **Never** create custom versions of these components
- **Always** import from `@/components/ui/` path alias

#### Animations
- **Use Framer Motion** for:
  - Complex animations with physics
  - Page transitions
  - Scroll-triggered animations
  - Gesture-based interactions
- **Use CSS transitions** for:
  - Simple hover effects
  - Basic state changes
  - Performance-critical animations

#### Icons
- **Always use** Lucide React icons
- **Import** from `lucide-react` package
- **Never** use other icon libraries or SVG files directly
- **Example**: `import { ArrowRight, Check } from 'lucide-react'`

### Styling Rules

#### Tailwind CSS
- **Always** use Tailwind utility classes for styling
- **Use** custom CSS variables defined in `globals.css` for colors:
  - `--color-primary`, `--color-primary-dark`, `--color-primary-light`
  - `--color-bg-primary`, `--color-bg-secondary`, `--color-bg-card`
  - `--color-text-primary`, `--color-text-secondary`, `--color-text-muted`
- **Never** write inline styles unless absolutely necessary
- **Use** the `cn()` utility from `@/lib/utils` for conditional classes

#### Typography
- **Use** predefined typography classes from `globals.css`:
  - `hero-h1` for hero headings (72px)
  - `h1`, `h2`, `h3`, `h4` for section headings
  - `lead` for large body text
  - `overline` for small uppercase labels
- **Always** maintain the orange gradient accent pattern:
  ```tsx
  <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(45deg, #ff7a3c, #ffce81)' }}>
    Highlighted Text
  </span>
  ```

#### Responsive Design
- **Always** design mobile-first
- **Use** Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- **Test** on mobile, tablet, and desktop viewports
- **Use** the `container` class for consistent max-width and padding

### Color Palette

#### Primary Colors
- **Orange**: `#ff9a00` (primary), `#ff7a3c` (dark), `#ffb84d` (light)
- **Use** for CTAs, highlights, and brand elements

#### Background Colors
- **White**: `#ffffff` (primary background)
- **Off-white**: `#fffbf5` (secondary background)
- **Light orange**: `#fff4e6` (elevated surfaces)

#### Text Colors
- **Black**: `#000000` (primary text)
- **Dark orange**: `#663d00` (secondary text)
- **Medium orange**: `#b36b00` (muted text)

### Component Patterns

#### Section Components
```tsx
export default function SectionName() {
  return (
    <section id="section-name" className="bg-white py-16 sm:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <p className="overline mb-4" style={{ color: '#ff7a3c' }}>
            [ SECTION LABEL ]
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-black mb-4">
            Section Title
          </h2>
        </div>
        {/* Section content */}
      </div>
    </section>
  );
}
```

#### Button Patterns
- **Primary CTA**: Use `RainbowButton` component
- **Secondary buttons**: Use `Button` with variant="outline"
- **Text links**: Use `Button` with variant="ghost"

#### Card Patterns
- **Always** use rounded corners (`rounded-2xl` or `rounded-3xl`)
- **Always** include subtle borders (`border border-border`)
- **Use** hover effects with transitions
- **Example**:
  ```tsx
  <div className="bg-bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg">
    {/* Card content */}
  </div>
  ```

## Form Handling

### React Hook Form + Zod
- **Always** use React Hook Form for forms
- **Always** validate with Zod schemas
- **Use** shadcn/ui form components
- **Example**:
  ```tsx
  import { useForm } from "react-hook-form";
  import { zodResolver } from "@hookform/resolvers/zod";
  import * as z from "zod";
  
  const schema = z.object({
    email: z.string().email(),
    name: z.string().min(2),
  });
  
  const form = useForm({
    resolver: zodResolver(schema),
  });
  ```

## Image Handling

### Next.js Image Component
- **Always** use `next/image` for images
- **Set** width and height props
- **Use** `unoptimized` prop for external images
- **Example**:
  ```tsx
  import Image from "next/image";
  
  <Image
    src="/logo.png"
    alt="Company Logo"
    width={200}
    height={50}
    className="h-auto w-auto"
  />
  ```

## Performance Rules

### Code Splitting
- **Use** dynamic imports for heavy components
- **Use** `"use client"` directive only when necessary
- **Keep** server components as default

### Optimization
- **Minimize** client-side JavaScript
- **Use** CSS for simple animations instead of JS
- **Lazy load** images and heavy components
- **Avoid** unnecessary re-renders with `React.memo` when needed

## Accessibility Rules

### ARIA and Semantic HTML
- **Always** use semantic HTML elements
- **Add** proper ARIA labels for interactive elements
- **Ensure** keyboard navigation works
- **Test** with screen readers

### Focus Management
- **Visible** focus indicators on all interactive elements
- **Logical** tab order
- **Skip links** for navigation

## Visual Edit Mode

### Data Attributes
- **Never** manually add `data-orchids-id` attributes (handled by loader)
- **Never** remove or modify `data-orchids-id` attributes
- **Preserve** all visual editing metadata

## Common Mistakes to Avoid

1. **Don't** create custom button components - use shadcn/ui Button
2. **Don't** use arbitrary colors - use design tokens from globals.css
3. **Don't** write custom CSS for layouts - use Tailwind utilities
4. **Don't** import components without the `@/` alias
5. **Don't** forget to add `"use client"` for components using hooks or browser APIs
6. **Don't** use `<a>` tags for internal navigation - use Next.js `<Link>`
7. **Don't** forget to add alt text to images
8. **Don't** use inline event handlers - use React event handlers
9. **Don't** mutate state directly - always use setState
10. **Don't** forget to clean up effects with return functions

## Testing Checklist

Before considering a feature complete:
- [ ] Works on mobile, tablet, and desktop
- [ ] All interactive elements are keyboard accessible
- [ ] Images have proper alt text
- [ ] Forms validate correctly
- [ ] Animations are smooth (60fps)
- [ ] No console errors or warnings
- [ ] Follows the design system colors and typography
- [ ] Uses proper semantic HTML
- [ ] Links and buttons have proper hover/focus states
- [ ] Content is readable and properly spaced