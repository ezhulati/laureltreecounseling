/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary - Brand Green #008556
        primary: {
          DEFAULT: 'hsl(158, 100%, 26%)',
          hover: 'hsl(158, 100%, 22%)',
          light: 'hsl(158, 40%, 92%)',
          dark: 'hsl(158, 100%, 18%)',
        },
        // Gold - Michigan Wolverines Gold #f6c401
        gold: {
          DEFAULT: 'hsl(48, 99%, 48%)',
          hover: 'hsl(48, 99%, 42%)',
          light: 'hsl(48, 90%, 92%)',
          dark: 'hsl(48, 99%, 38%)',
        },
        // Accent - Warm Terracotta (keeping as fallback)
        accent: {
          DEFAULT: 'hsl(25, 65%, 55%)',
          hover: 'hsl(25, 70%, 48%)',
          light: 'hsl(25, 60%, 92%)',
        },
        // Backgrounds
        background: {
          DEFAULT: 'hsl(40, 20%, 98%)',
          surface: 'hsl(0, 0%, 100%)',
          elevated: 'hsl(40, 15%, 96%)',
        },
        // Text
        text: {
          primary: 'hsl(0, 0%, 15%)',
          secondary: 'hsl(0, 0%, 40%)',
          tertiary: 'hsl(0, 0%, 46%)', // Adjusted for WCAG AA contrast (4.5:1+)
          inverse: 'hsl(0, 0%, 98%)',
        },
        // Semantic
        success: 'hsl(142, 60%, 42%)',
        error: 'hsl(0, 70%, 55%)',
        warning: 'hsl(45, 90%, 50%)',
        // Border
        border: {
          DEFAULT: 'hsl(0, 0%, 88%)',
          hover: 'hsl(0, 0%, 75%)',
        },
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Work Sans', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      fontSize: {
        // Major Third Scale (1.25)
        xs: ['0.8rem', { lineHeight: '1.5' }],
        sm: ['1rem', { lineHeight: '1.5' }],
        base: ['1.125rem', { lineHeight: '1.65' }],
        lg: ['1.406rem', { lineHeight: '1.5' }],
        xl: ['1.758rem', { lineHeight: '1.3' }],
        '2xl': ['2.197rem', { lineHeight: '1.2' }],
        '3xl': ['2.747rem', { lineHeight: '1.15' }],
        '4xl': ['3.433rem', { lineHeight: '1.1' }],
        '5xl': ['4.291rem', { lineHeight: '1.05' }],
      },
      spacing: {
        // 8-point grid
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '7': '56px',
        '8': '64px',
        '10': '80px',
        '12': '96px',
        '16': '128px',
        '20': '160px',
        '24': '192px',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        full: '9999px',
      },
      boxShadow: {
        soft: '0 2px 12px rgba(0, 0, 0, 0.06)',
        md: '0 4px 20px rgba(0, 0, 0, 0.08)',
        lg: '0 8px 30px rgba(0, 0, 0, 0.12)',
        'soft-hover': '0 4px 16px rgba(0, 0, 0, 0.1)',
      },
      maxWidth: {
        prose: '65ch',
        heading: '40ch',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionDuration: {
        instant: '100ms',
        fast: '200ms',
        base: '300ms',
        slow: '400ms',
      },
    },
  },
  plugins: [],
};
