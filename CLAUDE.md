# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (typically localhost:4321)
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview production build locally
```

## Architecture

This is an Astro static site for a telehealth counseling practice, deployed to Netlify.

### Stack
- **Astro 5** - Static site generator with `.astro` components
- **Tailwind CSS 3** - Utility-first styling with custom design tokens
- **No client-side JS framework** - Static HTML output, minimal JS for mobile menu only

### Key Directories
- `src/layouts/BaseLayout.astro` - Main layout wrapper with SEO, schema.org markup, Header/Footer
- `src/components/` - Reusable components (Button, Card, Section, TeamCard, ServiceCard, BlogCard, CTA)
- `src/pages/` - File-based routing (each .astro file = a page)
- `src/styles/global.css` - Design system documentation + custom component classes
- `public/images/` - Static assets served at `/images/`

### Design System (in tailwind.config.mjs)

**Colors:**
- `primary` - Brand green (#008556 / hsl 158, 100%, 26%)
- `gold` - Michigan Wolverines gold (#f6c401 / hsl 48, 99%, 48%) - used for accents
- `background-surface` - White, `background-elevated` - Light gray
- `text-primary`, `text-secondary`, `text-tertiary` - Gray scale

**Spacing:** Uses 8-point grid (gap-1 = 8px, gap-2 = 16px, etc.)

**Typography:**
- `font-heading` - Cormorant Garamond (serif)
- `font-body` - Work Sans (sans-serif)
- Major third scale (1.25 ratio)

### Layout Patterns

The site uses asymmetric 5-column grid layouts for visual interest:
```html
<div class="grid lg:grid-cols-5 gap-12 lg:gap-16">
  <div class="lg:col-span-2"><!-- Header/sidebar --></div>
  <div class="lg:col-span-3"><!-- Main content --></div>
</div>
```

**Mobile spacing rule:** Always use responsive gaps (e.g., `gap-6 md:gap-8`) to avoid excessive whitespace on mobile.

### Component Conventions

- **Section component** - Handles consistent padding and background variants (`default`, `surface`, `elevated`, `primary`)
- **Button component** - Variants: `primary`, `secondary`, `ghost`, `gold`
- **Cards** - Use `.card` class, clickable cards use absolute positioned overlay links for full-card clickability
- **Accent lines** - Wrap headings in `.accent-line` div for gold left border accent

### Global CSS Classes (in global.css)

- `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-gold` - Button styles
- `.card` - Card container with shadow and padding
- `.badge`, `.badge-gold` - Small tag/label styles
- `.accent-line`, `.accent-line-center` - Gold left border accent
- `.icon-container-gold` - Gold circular icon background
- `.container-custom` - Max-width container with responsive padding

### Dynamic Pages

- `src/pages/michigan/[city].astro` - Dynamic city pages for local SEO
- `src/pages/blog/` - Individual blog post pages
- `src/pages/services/` - Service detail pages (anxiety-depression, bariatric-support, trauma, nutrition, etc.)
