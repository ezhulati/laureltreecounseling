export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorCredentials: string;
  publishDate: string;
  readTime: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'emotional-side-bariatric-surgery',
    title: 'The Emotional Side of Bariatric Surgery: What No One Tells You',
    excerpt: 'Bariatric surgery transforms your body, but the emotional journey is equally profound. Understanding the psychological aspects of weight loss surgery can help you prepare for lasting success.',
    category: 'Bariatric Support',
    author: 'Kristen Ross',
    authorCredentials: 'LPC',
    publishDate: '2025-01-15',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'understanding-emotional-eating',
    title: 'Understanding Emotional Eating: Breaking the Cycle with Compassion',
    excerpt: 'Emotional eating is more than a lack of willpower—it\'s a coping mechanism that deserves understanding, not judgment. Learn how to build a healthier relationship with food.',
    category: 'Wellness',
    author: 'Kristen Ross',
    authorCredentials: 'LPC',
    publishDate: '2025-01-08',
    readTime: '7 min read',
    featured: true,
  },
  {
    slug: 'living-with-anxiety-holistic-approach',
    title: 'Living with Anxiety: A Holistic Approach to Finding Calm',
    excerpt: 'Anxiety affects your whole being—mind, body, and spirit. Discover how a holistic approach to treatment can help you find lasting relief and build resilience.',
    category: 'Mental Health',
    author: 'Kristen Ross',
    authorCredentials: 'LPC',
    publishDate: '2025-01-01',
    readTime: '9 min read',
    featured: false,
  },
  {
    slug: 'mind-body-connection-holistic-therapy',
    title: 'The Mind-Body Connection: Why Holistic Therapy Works',
    excerpt: 'Your mind and body are deeply connected. Learn why addressing both together through holistic therapy leads to more meaningful, lasting healing.',
    category: 'Wellness',
    author: 'Kristen Ross',
    authorCredentials: 'LPC',
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
