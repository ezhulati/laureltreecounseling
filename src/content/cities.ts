export interface City {
  slug: string;
  name: string;
  region: string;
  description: string;
}

export const cities: City[] = [
  // Metro Detroit Area (18)
  { slug: 'detroit', name: 'Detroit', region: 'Metro Detroit', description: 'Serving the heart of Michigan with compassionate telehealth therapy.' },
  { slug: 'warren', name: 'Warren', region: 'Metro Detroit', description: 'Quality mental health care for Warren residents via secure telehealth.' },
  { slug: 'sterling-heights', name: 'Sterling Heights', region: 'Metro Detroit', description: 'Professional counseling services for Sterling Heights families.' },
  { slug: 'ann-arbor', name: 'Ann Arbor', region: 'Metro Detroit', description: 'Supporting the Ann Arbor community with holistic therapy approaches.' },
  { slug: 'dearborn', name: 'Dearborn', region: 'Metro Detroit', description: 'Accessible therapy services for Dearborn residents.' },
  { slug: 'livonia', name: 'Livonia', region: 'Metro Detroit', description: 'Compassionate mental health support for Livonia.' },
  { slug: 'clinton-township', name: 'Clinton Township', region: 'Metro Detroit', description: 'Our home base, serving Clinton Township and surrounding areas.' },
  { slug: 'troy', name: 'Troy', region: 'Metro Detroit', description: 'Expert telehealth therapy for Troy residents.' },
  { slug: 'farmington-hills', name: 'Farmington Hills', region: 'Metro Detroit', description: 'Holistic counseling services for Farmington Hills.' },
  { slug: 'pontiac', name: 'Pontiac', region: 'Metro Detroit', description: 'Supporting Pontiac residents with accessible mental health care.' },
  { slug: 'rochester-hills', name: 'Rochester Hills', region: 'Metro Detroit', description: 'Professional therapy services for Rochester Hills families.' },
  { slug: 'royal-oak', name: 'Royal Oak', region: 'Metro Detroit', description: 'Quality mental health support for Royal Oak.' },
  { slug: 'southfield', name: 'Southfield', region: 'Metro Detroit', description: 'Comprehensive telehealth therapy for Southfield residents.' },
  { slug: 'taylor', name: 'Taylor', region: 'Metro Detroit', description: 'Accessible counseling services for Taylor.' },
  { slug: 'st-clair-shores', name: 'St. Clair Shores', region: 'Metro Detroit', description: 'Supporting St. Clair Shores with holistic therapy.' },
  { slug: 'westland', name: 'Westland', region: 'Metro Detroit', description: 'Professional mental health care for Westland.' },
  { slug: 'novi', name: 'Novi', region: 'Metro Detroit', description: 'Quality telehealth therapy services for Novi residents.' },
  { slug: 'dearborn-heights', name: 'Dearborn Heights', region: 'Metro Detroit', description: 'Compassionate counseling for Dearborn Heights.' },

  // West Michigan (10)
  { slug: 'grand-rapids', name: 'Grand Rapids', region: 'West Michigan', description: 'Serving West Michigan\'s largest city with expert telehealth therapy.' },
  { slug: 'wyoming', name: 'Wyoming', region: 'West Michigan', description: 'Quality mental health support for Wyoming residents.' },
  { slug: 'kentwood', name: 'Kentwood', region: 'West Michigan', description: 'Professional counseling services for Kentwood.' },
  { slug: 'muskegon', name: 'Muskegon', region: 'West Michigan', description: 'Accessible therapy for the Muskegon community.' },
  { slug: 'holland', name: 'Holland', region: 'West Michigan', description: 'Supporting Holland residents with holistic mental health care.' },
  { slug: 'portage', name: 'Portage', region: 'West Michigan', description: 'Expert telehealth therapy for Portage.' },
  { slug: 'norton-shores', name: 'Norton Shores', region: 'West Michigan', description: 'Quality counseling services for Norton Shores.' },
  { slug: 'walker', name: 'Walker', region: 'West Michigan', description: 'Compassionate mental health support for Walker.' },
  { slug: 'georgetown-township', name: 'Georgetown Township', region: 'West Michigan', description: 'Professional therapy for Georgetown Township residents.' },
  { slug: 'byron-township', name: 'Byron Township', region: 'West Michigan', description: 'Accessible telehealth therapy for Byron Township.' },

  // Central Michigan (8)
  { slug: 'lansing', name: 'Lansing', region: 'Central Michigan', description: 'Serving Michigan\'s capital city with comprehensive therapy services.' },
  { slug: 'east-lansing', name: 'East Lansing', region: 'Central Michigan', description: 'Supporting the East Lansing community, including MSU students and families.' },
  { slug: 'midland', name: 'Midland', region: 'Central Michigan', description: 'Quality mental health care for Midland residents.' },
  { slug: 'bay-city', name: 'Bay City', region: 'Central Michigan', description: 'Professional counseling services for Bay City.' },
  { slug: 'saginaw', name: 'Saginaw', region: 'Central Michigan', description: 'Compassionate telehealth therapy for Saginaw.' },
  { slug: 'mount-pleasant', name: 'Mount Pleasant', region: 'Central Michigan', description: 'Supporting Mount Pleasant with accessible mental health services.' },
  { slug: 'jackson', name: 'Jackson', region: 'Central Michigan', description: 'Expert therapy services for Jackson residents.' },
  { slug: 'flint', name: 'Flint', region: 'Central Michigan', description: 'Quality mental health support for the Flint community.' },

  // Southwest Michigan (6)
  { slug: 'kalamazoo', name: 'Kalamazoo', region: 'Southwest Michigan', description: 'Comprehensive telehealth therapy for Kalamazoo.' },
  { slug: 'battle-creek', name: 'Battle Creek', region: 'Southwest Michigan', description: 'Professional counseling services for Battle Creek.' },
  { slug: 'benton-harbor', name: 'Benton Harbor', region: 'Southwest Michigan', description: 'Supporting Benton Harbor with accessible mental health care.' },
  { slug: 'st-joseph', name: 'St. Joseph', region: 'Southwest Michigan', description: 'Quality therapy services for St. Joseph residents.' },
  { slug: 'niles', name: 'Niles', region: 'Southwest Michigan', description: 'Compassionate counseling for Niles.' },
  { slug: 'portage-sw', name: 'Portage', region: 'Southwest Michigan', description: 'Expert telehealth therapy for Portage.' },

  // Northern Michigan (5)
  { slug: 'traverse-city', name: 'Traverse City', region: 'Northern Michigan', description: 'Serving Northern Michigan\'s hub with comprehensive therapy services.' },
  { slug: 'petoskey', name: 'Petoskey', region: 'Northern Michigan', description: 'Quality mental health support for Petoskey and the surrounding region.' },
  { slug: 'marquette', name: 'Marquette', region: 'Upper Peninsula', description: 'Accessible telehealth therapy for the Upper Peninsula.' },
  { slug: 'sault-ste-marie', name: 'Sault Ste. Marie', region: 'Upper Peninsula', description: 'Professional counseling services for Sault Ste. Marie.' },
  { slug: 'alpena', name: 'Alpena', region: 'Northern Michigan', description: 'Supporting Alpena with compassionate mental health care.' },

  // Thumb/East Michigan (3)
  { slug: 'port-huron', name: 'Port Huron', region: 'East Michigan', description: 'Quality telehealth therapy for Port Huron residents.' },
  { slug: 'lapeer', name: 'Lapeer', region: 'East Michigan', description: 'Professional counseling services for Lapeer.' },
  { slug: 'sandusky', name: 'Sandusky', region: 'East Michigan', description: 'Accessible mental health support for Sandusky.' },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}
