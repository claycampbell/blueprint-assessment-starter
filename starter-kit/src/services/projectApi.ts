/**
 * Mock API Service for Project Search
 * Simulates async data fetching with realistic construction project data
 */

import {
  Project,
  ProjectSearchParams,
  ProjectSearchResponse,
  ProjectStatus,
} from '@/types/project';

/**
 * Mock database of construction projects
 */
const MOCK_PROJECTS: Project[] = [
  // Active projects (4)
  {
    id: crypto.randomUUID(),
    name: 'Maple Ridge Townhomes',
    status: 'Active',
    address: '1245 Maple Ridge Dr, Austin, TX 78704',
    createdAt: new Date('2024-03-15T10:30:00Z').toISOString(),
    description: 'Luxury townhome community with modern amenities',
    units: 24,
  },
  {
    id: crypto.randomUUID(),
    name: 'Sunset Valley Condos',
    status: 'Active',
    address: '3890 Sunset Blvd, Los Angeles, CA 90027',
    createdAt: new Date('2024-06-22T14:15:00Z').toISOString(),
    description: 'High-rise condominium development with ocean views',
    units: 48,
  },
  {
    id: crypto.randomUUID(),
    name: 'River Walk Apartments',
    status: 'Active',
    address: '567 Riverwalk Ln, San Antonio, TX 78205',
    createdAt: new Date('2024-01-10T09:00:00Z').toISOString(),
    description: 'Multi-family residential complex near downtown',
    units: 120,
  },
  {
    id: crypto.randomUUID(),
    name: 'Green Hills Estate',
    status: 'Active',
    address: '2100 Green Hills Rd, Nashville, TN 37215',
    createdAt: new Date('2024-08-05T11:45:00Z').toISOString(),
    description: 'Upscale single-family home development',
    units: 16,
  },

  // Feasibility projects (3)
  {
    id: crypto.randomUUID(),
    name: 'Downtown Loft Conversion',
    status: 'Feasibility',
    address: '890 Commerce St, Dallas, TX 75202',
    createdAt: new Date('2024-09-18T08:30:00Z').toISOString(),
    description: 'Historic building conversion to modern lofts',
    units: 32,
  },
  {
    id: crypto.randomUUID(),
    name: 'Lakeside Villas',
    status: 'Feasibility',
    address: '4521 Lakeshore Dr, Orlando, FL 32801',
    createdAt: new Date('2024-10-12T15:20:00Z').toISOString(),
    description: 'Waterfront villa community with private marina',
    units: 12,
  },
  {
    id: crypto.randomUUID(),
    name: 'Tech Park Commons',
    status: 'Feasibility',
    address: '1500 Innovation Way, San Jose, CA 95110',
    createdAt: new Date('2024-11-03T10:00:00Z').toISOString(),
    description: 'Mixed-use development near tech campus',
    units: 85,
  },

  // Entitlement projects (3)
  {
    id: crypto.randomUUID(),
    name: 'Mountain View Estates',
    status: 'Entitlement',
    address: '7800 Mountain View Rd, Denver, CO 80202',
    createdAt: new Date('2024-04-28T13:45:00Z').toISOString(),
    description: 'Luxury homes with mountain vistas',
    units: 18,
  },
  {
    id: crypto.randomUUID(),
    name: 'Harbor Point Towers',
    status: 'Entitlement',
    address: '2345 Harbor Point Blvd, Seattle, WA 98101',
    createdAt: new Date('2024-05-16T09:30:00Z').toISOString(),
    description: 'Twin tower residential complex on waterfront',
    units: 200,
  },
  {
    id: crypto.randomUUID(),
    name: 'Oakwood Crossing',
    status: 'Entitlement',
    address: '6543 Oakwood Ave, Portland, OR 97205',
    createdAt: new Date('2024-07-09T14:00:00Z').toISOString(),
    description: 'Sustainable townhome community with green spaces',
    units: 36,
  },

  // Construction projects (4)
  {
    id: crypto.randomUUID(),
    name: 'Riverside Plaza',
    status: 'Construction',
    address: '3200 Riverside Dr, Phoenix, AZ 85004',
    createdAt: new Date('2023-11-20T10:15:00Z').toISOString(),
    description: 'Mixed-use plaza with retail and residential',
    units: 64,
  },
  {
    id: crypto.randomUUID(),
    name: 'Cedar Park Homes',
    status: 'Construction',
    address: '4100 Cedar Park Way, Charlotte, NC 28202',
    createdAt: new Date('2023-09-05T11:00:00Z').toISOString(),
    description: 'Family-friendly neighborhood development',
    units: 42,
  },
  {
    id: crypto.randomUUID(),
    name: 'Skyline Heights',
    status: 'Construction',
    address: '1800 Skyline Dr, Miami, FL 33130',
    createdAt: new Date('2024-02-14T08:45:00Z').toISOString(),
    description: 'Luxury high-rise with penthouses',
    units: 75,
  },
  {
    id: crypto.randomUUID(),
    name: 'Heritage Square',
    status: 'Construction',
    address: '950 Heritage Sq, Boston, MA 02108',
    createdAt: new Date('2023-12-10T16:30:00Z').toISOString(),
    description: 'Historic district residential restoration',
    units: 28,
  },

  // Complete projects (3)
  {
    id: crypto.randomUUID(),
    name: 'Willow Creek Apartments',
    status: 'Complete',
    address: '2890 Willow Creek Rd, Atlanta, GA 30303',
    createdAt: new Date('2023-03-22T09:00:00Z').toISOString(),
    description: 'Completed apartment complex with amenities',
    units: 96,
  },
  {
    id: crypto.randomUUID(),
    name: 'Park Avenue Residences',
    status: 'Complete',
    address: '1200 Park Ave, New York, NY 10128',
    createdAt: new Date('2023-06-15T12:30:00Z').toISOString(),
    description: 'Luxury condominiums in prime location',
    units: 54,
  },
  {
    id: crypto.randomUUID(),
    name: 'Sunset Terrace',
    status: 'Complete',
    address: '5600 Sunset Terrace, San Diego, CA 92101',
    createdAt: new Date('2023-08-08T14:20:00Z').toISOString(),
    description: 'Coastal townhome community',
    units: 20,
  },

  // On Hold projects (3)
  {
    id: crypto.randomUUID(),
    name: 'Gateway Business Park',
    status: 'On Hold',
    address: '7200 Gateway Pkwy, Houston, TX 77002',
    createdAt: new Date('2024-02-28T10:00:00Z').toISOString(),
    description: 'Commercial development pending zoning approval',
    units: 150,
  },
  {
    id: crypto.randomUUID(),
    name: 'Meadowbrook Village',
    status: 'On Hold',
    address: '3450 Meadowbrook Ln, Minneapolis, MN 55401',
    createdAt: new Date('2024-05-20T13:15:00Z').toISOString(),
    description: 'Residential village awaiting environmental review',
    units: 45,
  },
  {
    id: crypto.randomUUID(),
    name: 'Coastal Retreat',
    status: 'On Hold',
    address: '8900 Coastal Hwy, Virginia Beach, VA 23451',
    createdAt: new Date('2024-07-30T15:45:00Z').toISOString(),
    description: 'Beachfront resort community on hold due to permitting',
    units: 30,
  },
];

/**
 * Simulates API delay
 */
const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Searches projects based on query parameters
 * Simulates async API call with 500ms delay
 *
 * @param params - Search parameters (query, status, limit)
 * @returns Promise resolving to search results
 */
export async function searchProjects(
  params: ProjectSearchParams = {}
): Promise<ProjectSearchResponse> {
  try {
    // Simulate API delay
    await delay(500);

    const { query = '', status, limit } = params;

    // Filter projects based on search criteria
    let filteredProjects = MOCK_PROJECTS;

    // Filter by search query (case-insensitive, matches name OR address)
    if (query.trim()) {
      const searchTerm = query.toLowerCase().trim();
      filteredProjects = filteredProjects.filter(
        (project) =>
          project.name.toLowerCase().includes(searchTerm) ||
          project.address.toLowerCase().includes(searchTerm)
      );
    }

    // Filter by status if provided
    if (status) {
      filteredProjects = filteredProjects.filter(
        (project) => project.status === status
      );
    }

    // Apply limit if provided
    if (limit && limit > 0) {
      filteredProjects = filteredProjects.slice(0, limit);
    }

    return {
      projects: filteredProjects,
      total: filteredProjects.length,
      query: query || undefined,
    };
  } catch (error) {
    // Handle errors gracefully
    throw new Error(
      `Failed to fetch projects: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
}

/**
 * Gets all available project statuses
 * @returns Array of all possible project statuses
 */
export function getProjectStatuses(): ProjectStatus[] {
  return ['Active', 'Feasibility', 'Entitlement', 'Construction', 'Complete', 'On Hold'];
}
