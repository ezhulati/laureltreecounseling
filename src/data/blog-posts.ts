export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorCredentials: string;
  authorSlug: string;
  publishDate: string;
  readTime: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'gut-brain-connection-mood-food',
    title: 'The Gut-Brain Connection: How What You Eat Affects How You Feel',
    excerpt: 'Your gut and brain are in constant communication. Learn how nutrition impacts mental health and practical ways to support your mood through food.',
    category: 'Nutrition',
    author: 'Meghan Pendleton',
    authorCredentials: 'RD',
    authorSlug: 'meghan-pendleton',
    publishDate: '2025-01-22',
    readTime: '9 min read',
    featured: true,
  },
  {
    slug: 'navigating-life-transitions-finding-footing',
    title: 'Navigating Life Transitions: Finding Your Footing When Everything Changes',
    excerpt: 'Life transitions—whether chosen or unexpected—can shake our sense of identity and stability. Learn how to move through change with resilience and self-compassion.',
    category: 'Life Transitions',
    author: 'Kristen Ross',
    authorCredentials: 'LPC',
    authorSlug: 'kristen-ross',
    publishDate: '2025-01-20',
    readTime: '10 min read',
    featured: true,
  },
  {
    slug: 'understanding-trauma-beginning-healing-journey',
    title: 'Understanding Trauma: What It Is, How It Affects You, and Beginning the Healing Journey',
    excerpt: 'Trauma isn\'t just what happened to you—it\'s how your nervous system responded. Learn what trauma really means, how it shows up in daily life, and what healing looks like.',
    category: 'Trauma & PTSD',
    author: 'Michele Meyers',
    authorCredentials: 'PsyD',
    authorSlug: 'michele-meyers',
    publishDate: '2025-01-18',
    readTime: '11 min read',
    featured: true,
  },
  {
    slug: 'emotional-side-bariatric-surgery',
    title: 'The Emotional Side of Bariatric Surgery Nobody Tells You About',
    excerpt: 'Bariatric surgery transforms your body, but the emotional journey is equally profound. Understanding the psychological aspects of weight loss surgery can help you prepare for lasting success.',
    category: 'Bariatric Support',
    author: 'Kristen Ross',
    authorCredentials: 'LPC',
    authorSlug: 'kristen-ross',
    publishDate: '2025-01-15',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'relationship-patterns-finding-connection',
    title: 'When Relationships Feel Hard: Understanding Your Patterns and Finding Deeper Connection',
    excerpt: 'Why do we keep ending up in the same relationship dynamics? Learn how early experiences shape our patterns in relationships and how to build healthier connections.',
    category: 'Relationships',
    author: 'Michele Meyers',
    authorCredentials: 'PsyD',
    authorSlug: 'michele-meyers',
    publishDate: '2025-01-12',
    readTime: '10 min read',
    featured: false,
  },
  {
    slug: 'depression-more-than-feeling-sad',
    title: 'Depression: More Than Just Feeling Sad',
    excerpt: 'Depression isn\'t just sadness—it\'s a complex condition that affects your whole being. Learn to recognize the signs, understand what\'s happening, and discover paths toward healing.',
    category: 'Mental Health',
    author: 'Kristen Ross',
    authorCredentials: 'LPC',
    authorSlug: 'kristen-ross',
    publishDate: '2025-01-10',
    readTime: '9 min read',
    featured: false,
  },
  {
    slug: 'understanding-emotional-eating',
    title: 'Understanding Emotional Eating and Breaking the Cycle with Compassion',
    excerpt: 'Emotional eating is more than a lack of willpower—it\'s a coping mechanism that deserves understanding, not judgment. Learn how to build a healthier relationship with food.',
    category: 'Wellness',
    author: 'Kristen Ross',
    authorCredentials: 'LPC',
    authorSlug: 'kristen-ross',
    publishDate: '2025-01-08',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'living-with-anxiety-holistic-approach',
    title: 'Living with Anxiety and Finding Calm Through a Holistic Approach',
    excerpt: 'Anxiety affects your whole being—mind, body, and spirit. Discover how a holistic approach to treatment can help you find lasting relief and build resilience.',
    category: 'Mental Health',
    author: 'Kristen Ross',
    authorCredentials: 'LPC',
    authorSlug: 'kristen-ross',
    publishDate: '2025-01-01',
    readTime: '9 min read',
    featured: false,
  },
  {
    slug: 'mind-body-connection-holistic-therapy',
    title: 'The Mind-Body Connection and Why Holistic Therapy Works',
    excerpt: 'Your mind and body are deeply connected. Learn why addressing both together through holistic therapy leads to more meaningful, lasting healing.',
    category: 'Wellness',
    author: 'Kristen Ross',
    authorCredentials: 'LPC',
    authorSlug: 'kristen-ross',
    publishDate: '2024-12-20',
    readTime: '8 min read',
    featured: false,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getRecentPosts(limit: number = 6): BlogPost[] {
  return blogPosts
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPostBySlug(currentSlug);
  if (!currentPost) return [];

  return blogPosts
    .filter(post => post.slug !== currentSlug && post.category === currentPost.category)
    .slice(0, limit);
}
