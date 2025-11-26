export interface InsurancePlan {
  name: string;
  logo?: string;
  note?: string;
}

// Full list of insurance plans with logos (for insurance page)
export const insurancePlans: InsurancePlan[] = [
  {
    name: 'Blue Cross Blue Shield',
    logo: '/images/Blue-Cross-Blue-Shield-Logo-removebg-preview.avif',
  },
  {
    name: 'Blue Care Network',
    logo: '/images/blue+care+network.avif',
  },
  {
    name: 'Aetna',
    logo: '/images/1_Heart_Aetna_logo_sm_rgb_violet.png',
  },
  {
    name: 'United Healthcare',
    logo: '/images/UnitedHealthcare_(logo).svg.png',
  },
  {
    name: 'Cigna',
    logo: '/images/cigna-dentist-astoria.png',
  },
  {
    name: 'Priority Health',
    logo: '/images/priority-health-logo.avif',
  },
];

// Simplified list for providers page (just the main in-network plans)
export const insurancePlansSimple: InsurancePlan[] = [
  { name: 'Cigna (including all subsidiary plans)' },
  { name: 'Priority Health' },
];

export const selfPayOption = 'Self-pay available';

export const insuranceNote = 'Priority Health is under the Cigna umbrella — most hospital system employees in Michigan are covered.';

// For simple string array use cases
export const insurancePlanNames: string[] = insurancePlansSimple.map(plan => plan.name);
