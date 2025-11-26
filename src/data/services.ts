export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon?: string;
}

export const services: Service[] = [
  {
    slug: 'anxiety-depression',
    title: 'Anxiety & Depression',
    shortTitle: 'Anxiety & Depression',
    description: 'Evidence-based treatment using CBT, mindfulness, and somatic approaches for patients with mood disorders.',
  },
  {
    slug: 'bariatric-support',
    title: 'Bariatric Surgery Support',
    shortTitle: 'Bariatric Support',
    description: 'Pre- and post-op counseling for weight loss surgery patients. Emotional readiness, lifestyle adjustment, and long-term success strategies.',
  },
  {
    slug: 'trauma',
    title: 'Trauma & PTSD',
    shortTitle: 'Trauma & PTSD',
    description: 'Trauma-informed care using somatic therapy and CBT to process past experiences.',
  },
  {
    slug: 'disordered-eating',
    title: 'Disordered Eating',
    shortTitle: 'Disordered Eating',
    description: 'Specialized support for disordered eating patterns, binge eating, and emotional aspects of weight management.',
  },
  {
    slug: 'life-transitions',
    title: 'Life Transitions',
    shortTitle: 'Life Transitions',
    description: 'Support for major changes: diagnosis, retirement, career shifts, relationship changes, grief.',
  },
  {
    slug: 'relationship-challenges',
    title: 'Relationship Challenges',
    shortTitle: 'Relationships',
    description: 'Individual therapy for communication, boundaries, and building healthier connections.',
  },
  {
    slug: 'nutrition',
    title: 'Nutrition Counseling',
    shortTitle: 'Nutrition',
    description: 'Nutrition counseling for weight management with a weight-inclusive, non-diet approach.',
  },
];

// Specialties list for providers page (includes additional detail)
export interface Specialty {
  title: string;
  description: string;
}

export const specialties: Specialty[] = [
  {
    title: 'Bariatric Surgery Support',
    description: 'Pre- and post-op counseling for weight loss surgery patients. Emotional readiness, lifestyle adjustment, and long-term success strategies.',
  },
  {
    title: 'Anxiety & Depression',
    description: 'Evidence-based treatment using CBT, mindfulness, and somatic approaches for patients with mood disorders.',
  },
  {
    title: 'Trauma & PTSD',
    description: 'Trauma-informed care using somatic therapy and CBT to process past experiences.',
  },
  {
    title: 'Chronic Illness Adjustment',
    description: 'Support for patients adapting to new diagnoses, managing chronic conditions, and coping with health-related life changes.',
  },
  {
    title: 'Life Transitions',
    description: 'Support for major changes: diagnosis, retirement, career shifts, relationship changes, grief.',
  },
  {
    title: 'Disordered Eating',
    description: 'Specialized support for disordered eating patterns, binge eating, and emotional aspects of weight management.',
  },
  {
    title: 'Weight Management (Dietitian)',
    description: 'Nutrition counseling for weight management with a weight-inclusive, non-diet approach.',
  },
  {
    title: 'Medical Nutrition Therapy',
    description: 'RD services for GI issues, metabolic health, food allergies, and chronic disease management.',
  },
];

// Helper to get service by slug
export function getService(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

// Get service URL
export function getServiceUrl(slug: string): string {
  return `/services/${slug}`;
}
