// Centralized icon registry for Laurel Tree Counseling
// Using Lucide Icons - https://lucide.dev/icons

// Service-specific icons - semantically chosen for each therapy service
export const serviceIcons = {
  anxiety: 'Brain',           // Mental clarity, calm mind
  depression: 'Sun',          // Light, hope, new beginning
  bariatric: 'Scale',         // Weight, balance, transformation
  trauma: 'ShieldHeart',      // Protection combined with healing
  nutrition: 'Apple',         // Natural wellness, wholesome food
  transitions: 'Compass',     // Navigation, finding direction
  relationships: 'Users',     // Human connection
  default: 'Sparkles',        // Positive transformation (fallback)
} as const;

// UI icons used throughout the site
export const uiIcons = {
  // Navigation
  chevronDown: 'ChevronDown',
  chevronRight: 'ChevronRight',
  chevronLeft: 'ChevronLeft',
  arrowRight: 'ArrowRight',
  menu: 'Menu',
  x: 'X',

  // Actions & Indicators
  check: 'Check',
  checkCircle: 'CheckCircle',

  // Contact
  phone: 'Phone',
  mail: 'Mail',
  mapPin: 'MapPin',

  // Features
  heart: 'Heart',
  shield: 'ShieldCheck',
  users: 'Users',
  scale: 'Scale',
  sparkles: 'Sparkles',
  clock: 'Clock',
  calendar: 'Calendar',
  video: 'Video',
  building: 'Building2',
  globe: 'Globe',
  briefcase: 'Briefcase',
  graduationCap: 'GraduationCap',
} as const;

export type ServiceIconKey = keyof typeof serviceIcons;
export type UIIconKey = keyof typeof uiIcons;
