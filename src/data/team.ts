export interface TeamMember {
  id: string;
  name: string;
  credentials: string;
  title: string;
  image: string;
  bio: string[];
  specializations: string[];
  education: string[];
  shortBio?: string; // For condensed displays like for-providers page
  providerBadges?: string[]; // Compact badges for provider page
}

export const team: TeamMember[] = [
  {
    id: 'kristen-ross',
    name: 'Kristen Ross',
    credentials: 'LPC',
    title: 'Owner & Lead Counselor',
    image: '/images/kristen-ross.png',
    shortBio: '14+ years experience. Former Corewell Health clinician specializing in bariatric surgery support. Expertise in anxiety, depression, trauma, eating disorders, and life transitions.',
    bio: [
      "Kristen Ross is a Licensed Professional Counselor with over 14 years of experience in holistic health counseling. She spent more than a decade working at Corewell Health Hospital, where she helped thousands of clients navigate the complex journey of bariatric surgery, weight loss, and lifestyle transformation.",
      "As the founder of Laurel Tree Counseling, Kristen brings her unique blend of evidence-based therapies and complementary medicine to support adults through anxiety, depression, trauma, life transitions, and eating disorders. Her approach integrates Cognitive Behavioral Therapy, mindfulness, somatic therapy, and motivational interviewing.",
      "When she's not in session, Kristen enjoys cooking nutritious meals, growing her own food, maintaining an active lifestyle, and spending time with her family. She believes that wellness is a journey, not a destination, and is committed to walking alongside her clients every step of the way.",
    ],
    specializations: ['Bariatric Surgery Support', 'Anxiety & Depression', 'Trauma', 'Life Transitions', 'Eating Disorders'],
    education: ["Master's in Counseling", 'Certification in Complementary Medicine & Wellness'],
    providerBadges: ['Bariatric Support', 'CBT', 'Trauma', 'Eating Disorders'],
  },
  {
    id: 'michele-meyers',
    name: 'Michele Meyers',
    credentials: 'PsyD',
    title: 'Licensed Psychologist',
    image: '/images/michele-meyers.png',
    shortBio: '25 years experience in weight loss support, anxiety, depression, and emotional eating. CBT, Solution-Focused, and Person-Centered approaches.',
    bio: [
      "Dr. Michele Meyers is a Licensed Psychologist with 25 years of specialized experience in weight loss support, anxiety, depression, and emotional eating. Her extensive background allows her to provide deeply informed, compassionate care to clients navigating complex challenges.",
      "Michele's therapeutic approach combines Cognitive Behavioral Therapy (CBT), Solution-Focused therapy, and Person-Centered Therapy. She emphasizes a whole-person focus with realistic goal-setting, helping clients make sustainable changes that align with their values and lifestyle.",
      "Outside of her practice, Michele enjoys gardening, spending time in nature, exercising, walking her dog, traveling, photography, and quality time with family. She brings this same sense of balance and appreciation for life's simple pleasures to her work with clients.",
    ],
    specializations: ['Weight Loss Support', 'Bariatric Surgery Transitions', 'Anxiety', 'Depression', 'Binge & Emotional Eating'],
    education: ['Doctor of Psychology (PsyD)'],
    providerBadges: ['Weight Loss Support', 'Anxiety', 'Depression', 'Emotional Eating'],
  },
  {
    id: 'meghan-pendleton',
    name: 'Meghan Pendleton',
    credentials: 'RD',
    title: 'Registered Dietitian',
    image: '/images/meghan-pendleton.png',
    shortBio: 'Medical nutrition therapy with weight-inclusive, trauma-informed approach. Specializes in GI issues, metabolic health, eating disorders, bariatric support, and maternal health.',
    bio: [
      "Meghan Pendleton is a Registered Dietitian specializing in medical nutrition therapy with a weight-inclusive, trauma-informed, and holistic approach. She understands the powerful connection between nutrition and mental well-being, and works collaboratively with clients to build a healthier relationship with food.",
      "Meghan's areas of expertise include gastrointestinal issues, food allergies and intolerances, metabolic and cardiovascular health, hormonal and women's health, maternal health (fertility, pregnancy, postpartum), eating disorder recovery, bariatric surgery support, and chronic disease management.",
      "Her approach honors each person's unique journey, recognizing that there is no one-size-fits-all solution to nutrition. Meghan works alongside our counseling team to provide comprehensive, integrated care that addresses both the nutritional and emotional aspects of wellness.",
    ],
    specializations: ['Eating Disorder Recovery', 'GI Health', 'Maternal Health', 'Bariatric Support', 'Metabolic Health'],
    education: ['Registered Dietitian (RD)'],
    providerBadges: ['Nutrition Therapy', 'GI Health', 'Eating Disorders', 'Bariatric Support'],
  },
];

// For providers page - uses different credentials/title format
export const teamForProviders = team.map(member => ({
  ...member,
  // Override titles for provider page context
  title: member.id === 'kristen-ross'
    ? 'Licensed Professional Counselor · Practice Owner'
    : member.id === 'meghan-pendleton'
    ? 'Registered Dietitian · Available to non-therapy clients'
    : member.title,
  // Use MA, LPC, CAM for Kristen on provider page
  credentials: member.id === 'kristen-ross' ? 'MA, LPC, CAM' : member.credentials,
}));

// Helper function to get a team member by ID
export function getTeamMember(id: string): TeamMember | undefined {
  return team.find(member => member.id === id);
}

// Helper to get display name with credentials
export function getNameWithCredentials(member: TeamMember): string {
  return `${member.name}, ${member.credentials}`;
}
