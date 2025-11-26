# Component Documentation

> Reusable component library for Laurel Tree Counseling

---

## Documentation Template

Use this template when documenting new components:

```markdown
## ComponentName

### Purpose
[Brief description of what the component does and when to use it]

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| prop | type | default | Yes/No   | Description |

### Usage Examples

**Basic:**
\`\`\`astro
<ComponentName>Content</ComponentName>
\`\`\`

**With Options:**
\`\`\`astro
<ComponentName prop="value">Content</ComponentName>
\`\`\`

### Accessibility
- [ ] Keyboard navigable
- [ ] Screen reader friendly
- [ ] Focus states visible
- [ ] Color contrast meets WCAG AA

### Edge Cases
- What happens when [scenario]
- How to handle [edge case]

### Related Components
- [RelatedComponent](#relatedcomponent)
```

---

## Button

### Purpose

A versatile, accessible button component that renders as either a `<button>` element or an `<a>` element depending on whether an `href` is provided. Used for primary actions, form submissions, and navigation throughout the site.

**When to use:**
- Primary calls-to-action (scheduling, contact)
- Form submissions
- Navigation to key pages
- External links (with `external` prop)

**When NOT to use:**
- Inline text links (use regular `<a>` tags)
- Icon-only buttons (create a separate IconButton component)
- Toggle/switch controls

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `href` | `string` | `undefined` | No | URL to navigate to. If provided, renders as `<a>`. If omitted, renders as `<button>`. |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'accent'` | `'primary'` | No | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | No | Button size |
| `class` | `string` | `''` | No | Additional CSS classes |
| `external` | `boolean` | `false` | No | Opens link in new tab with security attributes |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | No | HTML button type (only applies when no `href`) |

### Variants

| Variant | Use Case | Appearance |
|---------|----------|------------|
| `primary` | Main CTA, booking actions | Solid green background, white text |
| `secondary` | Alternative actions | Light background, bordered |
| `outline` | Tertiary actions | Transparent with green border |
| `accent` | Special promotions | Gold/accent color background |

### Sizes

| Size | Min Height | Padding | Font Size | Use Case |
|------|------------|---------|-----------|----------|
| `sm` | 44px | px-4 py-2.5 | text-sm | Compact areas, inline actions |
| `md` | 48px | px-6 py-3 | text-base | Standard buttons |
| `lg` | 56px | px-8 py-4 | text-lg | Hero CTAs, prominent actions |

### Usage Examples

**Primary CTA (Link):**
```astro
<Button href="/contact" variant="primary" size="lg">
  Book Free Consultation
</Button>
```

**Form Submit Button:**
```astro
<Button type="submit" variant="primary">
  Send My Message
</Button>
```

**External Link:**
```astro
<Button
  href="https://laureltreecounselingllc.clientsecure.me"
  variant="primary"
  size="lg"
  external
>
  Schedule Online
</Button>
```

**Secondary Action:**
```astro
<Button href="/services" variant="secondary">
  Explore Services
</Button>
```

**Outline Style:**
```astro
<Button href="/contact" variant="outline" size="lg">
  Ask a Question
</Button>
```

**With Custom Classes:**
```astro
<Button href="/contact" variant="primary" class="w-full sm:w-auto">
  Contact Us
</Button>
```

### Accessibility

- [x] **Keyboard navigable**: Focusable via Tab key
- [x] **Focus visible**: Uses `focus-visible:ring-2` for clear focus indication
- [x] **Touch targets**: All sizes meet 44px minimum (WCAG 2.5.5)
- [x] **Color contrast**: All variants meet WCAG AA contrast requirements
- [x] **External links**: Automatically adds `rel="noopener noreferrer"` for security
- [x] **Semantic HTML**: Renders as `<button>` or `<a>` appropriately

**Focus ring offset:**
- Default: 2px offset from button edge
- Ensures visibility on all background colors

### Edge Cases

**Empty content:**
- Button will render but may appear collapsed
- Always provide meaningful text content

**Very long text:**
- Text will wrap naturally
- Consider using shorter labels for mobile

**Disabled state (not implemented):**
- Currently no `disabled` prop
- If needed, add: `disabled?: boolean` and appropriate styles

**Icon + Text:**
- Place icon inside slot with text
- Example: `<Button><Icon /> Label</Button>`

### CSS Classes Generated

```
Base:      inline-flex items-center justify-center font-body font-semibold
           rounded-md transition-all duration-fast ease-out-expo
           focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2

Primary:   bg-primary text-text-inverse hover:bg-primary-hover
           hover:-translate-y-0.5 hover:shadow-md active:translate-y-0

Secondary: bg-background-surface text-text-primary border border-border
           hover:border-primary hover:text-primary hover:-translate-y-0.5

Outline:   bg-transparent text-primary border-2 border-primary
           hover:bg-primary hover:text-text-inverse hover:-translate-y-0.5

Accent:    bg-accent text-text-inverse hover:bg-accent-hover
           hover:-translate-y-0.5 hover:shadow-md
```

### Related Components

- [CTA](#cta) - Uses Button internally for call-to-action sections

---

## CTA

### Purpose

A full-width call-to-action section used at the bottom of pages to encourage user conversion. Displays a headline, description, primary action button, and secondary contact link.

**When to use:**
- End of content pages to drive scheduling
- After informational sections
- As page closers before footer

**When NOT to use:**
- Mid-page callouts (use a card or banner instead)
- Multiple CTAs on same page (usually one per page)

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `title` | `string` | `"Your Healing Starts with One Conversation"` | No | Headline text |
| `description` | `string` | `"Book a free 15-minute consultation..."` | No | Supporting copy |
| `buttonText` | `string` | `"Book Free Consultation"` | No | Primary button label |
| `buttonHref` | `string` | `"https://laureltreecounselingllc.clientsecure.me"` | No | Primary button URL |
| `variant` | `'primary' \| 'surface'` | `'primary'` | No | Background style |

### Variants

| Variant | Background | Text Color | Button Style |
|---------|------------|------------|--------------|
| `primary` | `bg-primary` (green) | White | Secondary (light) |
| `surface` | `bg-background-elevated` | Dark | Primary (green) |

### Usage Examples

**Default (Primary variant):**
```astro
<CTA />
```

**Custom Copy:**
```astro
<CTA
  title="Relief Is Possible"
  description="You don't have to keep feeling this way. Book a free consultation to explore how we can help."
/>
```

**Surface Variant:**
```astro
<CTA variant="surface" />
```

**Fully Customized:**
```astro
<CTA
  title="Find the Right Clinician for You"
  description="Book a free consultation to meet with one of our team members."
  buttonText="Meet Our Team"
  buttonHref="/team"
  variant="surface"
/>
```

### Content Structure

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                    [Title - h2]                             │
│                                                             │
│              [Description paragraph]                        │
│                                                             │
│     [Primary Button]        [Secondary Button]              │
│                                                             │
│              [Trust signals text]                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Accessibility

- [x] **Semantic structure**: Uses `<section>` with `<h2>` heading
- [x] **Color contrast**: Both variants meet WCAG AA
- [x] **Focus states**: Buttons have visible focus rings
- [x] **Link purpose**: Button text is descriptive

### Edge Cases

**Very long titles:**
- Constrained by `max-w-heading` (about 20ch)
- Will wrap naturally

**Missing props:**
- All props have sensible defaults
- Component works with zero props

**Multiple on page:**
- Technically works but not recommended
- Use different `variant` if absolutely needed

### Trust Signals

The component automatically includes trust-building microcopy:
- "100% confidential"
- "No commitment required"
- "Response within 24 hours"

### Related Components

- [Button](#button) - Used internally for action buttons
- [Section](#section) - Similar spacing/container patterns

---

## Section

### Purpose

A layout wrapper that provides consistent vertical padding and optional background colors. Used to create visual separation between content areas.

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `background` | `'default' \| 'surface' \| 'elevated'` | `'default'` | No | Background color |
| `id` | `string` | `undefined` | No | HTML id for anchor links |

### Usage Examples

```astro
<Section>
  <!-- Default white background -->
</Section>

<Section background="surface">
  <!-- Light gray background -->
</Section>

<Section background="elevated" id="features">
  <!-- Slightly darker, with anchor -->
</Section>
```

---

## ServiceCard

### Purpose

Displays a service offering with icon, title, description, and link. The entire card is clickable for better UX.

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `title` | `string` | - | Yes | Service name |
| `description` | `string` | - | Yes | Brief description |
| `icon` | `string` | `'default'` | No | Icon key (anxiety, trauma, bariatric, nutrition, relationships) |
| `href` | `string` | `undefined` | No | Link to service page |

### Usage Examples

```astro
<ServiceCard
  title="Anxiety & Depression"
  description="Evidence-based treatment combining CBT, mindfulness, and holistic approaches."
  icon="anxiety"
  href="/services/anxiety-depression"
/>
```

### Accessibility

- [x] Full card is clickable via overlay `<a>` tag
- [x] Screen reader text provided via `aria-label`
- [x] Hover states on title and icon for visual feedback

---

## BlogCard

### Purpose

Displays a blog post preview with image, category, title, excerpt, and metadata.

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `title` | `string` | - | Yes | Post title |
| `excerpt` | `string` | - | Yes | Short description |
| `slug` | `string` | - | Yes | URL slug |
| `category` | `string` | - | Yes | Category label |
| `date` | `string` | - | Yes | Publication date |
| `readTime` | `string` | - | Yes | Estimated read time |
| `image` | `string` | `undefined` | No | Featured image URL |
| `featured` | `boolean` | `false` | No | Larger display style |

---

## TeamCard

### Purpose

Displays team member information with photo, credentials, bio, and specializations.

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `name` | `string` | - | Yes | Full name |
| `credentials` | `string` | - | Yes | Professional credentials |
| `title` | `string` | - | Yes | Job title |
| `image` | `string` | - | Yes | Photo URL |
| `bio` | `string` | - | Yes | Short biography |
| `specializations` | `string[]` | - | Yes | List of specialties |
| `href` | `string` | `undefined` | No | Link to full profile |

---

## Global CSS Classes

These utility classes are available globally via `global.css`:

### Buttons
- `.btn` - Base button styles
- `.btn-primary` - Primary green button
- `.btn-secondary` - Secondary bordered button

### Cards
- `.card` - Standard card with padding, border, shadow

### Typography
- `.subtitle` - Secondary text styling
- `.accent-line` - Left border accent for headings
- `.accent-line-center` - Centered accent line

### Icons
- `.icon-container` - 56px circular icon wrapper
- `.icon-container-sm` - 48px circular icon wrapper

### Steps
- `.step-indicator` - Numbered step circle (green)
- `.step-indicator-gold` - Numbered step circle (gold)

### Forms
- `.label` - Form label styling
- `.input` - Text input styling
- `.textarea` - Textarea styling
- `.badge` - Small tag/badge styling

---

## Design Tokens

Reference these CSS custom properties for consistency:

### Colors
```css
--color-primary: hsl(158, 100%, 26%)
--color-primary-hover: hsl(158, 100%, 22%)
--color-accent: hsl(48, 90%, 45%)
--color-text-primary: hsl(158, 30%, 15%)
--color-text-secondary: hsl(158, 10%, 40%)
```

### Spacing
```css
--section-padding: 4rem (mobile) / 5rem (desktop)
--container-max: 1200px
```

### Typography
```css
--font-heading: 'Playfair Display', serif
--font-body: 'Inter', sans-serif
```

---

## Contributing

When creating new components:

1. Follow the documentation template above
2. Ensure all props have TypeScript types
3. Provide sensible defaults where possible
4. Test accessibility with keyboard and screen reader
5. Include usage examples in this doc
