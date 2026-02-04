export type Profile = {
  id: string;
  full_name: string;
  role: 'DONOR' | 'NGO' | 'VOLUNTEER';
  organization_name?: string;
  points: number;
  lifetime_deliveries: number;
};

export type Donation = {
  id: string;
  donor_id: string;
  food_category: 'Cooked' | 'Raw' | 'Packaged';
  weight_kg: number;
  pickup_instructions: string;
  pickup_address?: string;
  freshness_score?: number;
  ai_notes?: string;
  can_deliver: boolean;
  latitude?: number;
  longitude?: number;
  expiry_at: string;
  image_url: string;
  status: 'AVAILABLE' | 'CLAIMED' | 'COMPLETED';
  is_verified: boolean;
  created_at: string;
};

export type Claim = {
  id: string;
  donation_id: string;
  ngo_id: string;
  status: 'PENDING' | 'COMPLETED';
  fulfillment_method: 'PICKUP' | 'VOLUNTEER' | 'DONOR_DELIVERY';
  created_at: string;
};

export type Task = {
  id: string;
  claim_id: string;
  volunteer_id?: string;
  status: 'OPEN' | 'ASSIGNED' | 'COMPLETED';
  created_at: string;
};

// Default profiles for the demo to work
export const MOCK_PROFILES: Profile[] = [
  {
    id: 'donor-1',
    full_name: 'Demo Donor',
    role: 'DONOR',
    organization_name: 'Community Kitchen',
    points: 100,
    lifetime_deliveries: 0,
  },
  {
    id: 'ngo-1',
    full_name: 'Demo NGO',
    role: 'NGO',
    organization_name: 'Food Bank Central',
    points: 0,
    lifetime_deliveries: 0,
  },
  {
    id: 'volunteer-1',
    full_name: 'Demo Volunteer',
    role: 'VOLUNTEER',
    points: 0,
    lifetime_deliveries: 0,
  },
];

export const MOCK_DONATIONS: Donation[] = [];
export const MOCK_CLAIMS: Claim[] = [];
export const MOCK_TASKS: Task[] = [];
