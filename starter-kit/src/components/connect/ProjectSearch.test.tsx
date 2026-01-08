import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectSearch from './ProjectSearch';
import * as projectApi from '@/services/projectApi';
import { Project } from '@/types/project';

// Mock the projectApi module
jest.mock('@/services/projectApi');

// Mock data for tests
const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Maple Ridge Townhomes',
    status: 'Active',
    address: '1245 Maple Ridge Dr, Austin, TX 78704',
    createdAt: '2024-03-15T10:30:00Z',
    description: 'Luxury townhome community',
    units: 24,
  },
  {
    id: '2',
    name: 'Sunset Valley Condos',
    status: 'Construction',
    address: '3890 Sunset Blvd, Los Angeles, CA 90027',
    createdAt: '2024-06-22T14:15:00Z',
    description: 'High-rise condominium development',
    units: 48,
  },
  {
    id: '3',
    name: 'River Walk Apartments',
    status: 'Complete',
    address: '567 Riverwalk Ln, San Antonio, TX 78205',
    createdAt: '2024-01-10T09:00:00Z',
    description: 'Multi-family residential complex',
    units: 120,
  },
];

describe('ProjectSearch Component', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  /**
   * Test 1: Renders correctly
   * Component mounts without errors and shows expected elements
   */
  test('renders correctly with search input and heading', async () => {
    // Mock the API to return projects
    (projectApi.searchProjects as jest.Mock).mockResolvedValue({
      projects: mockProjects,
      total: mockProjects.length,
      query: undefined,
    });

    render(<ProjectSearch />);

    // Check for heading
    expect(screen.getByText('Project Search')).toBeInTheDocument();

    // Check for search input
    const searchInput = screen.getByPlaceholderText(
      'Search by project name or address...'
    );
    expect(searchInput).toBeInTheDocument();

    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
  });

  /**
   * Test 2: Shows loading state
   * Loading spinner appears during fetch
   */
  test('shows loading spinner while fetching data', () => {
    // Mock the API with a delayed response
    (projectApi.searchProjects as jest.Mock).mockImplementation(
      () =>
        new Promise((resolve) => {
          setTimeout(
            () =>
              resolve({
                projects: mockProjects,
                total: mockProjects.length,
              }),
            100
          );
        })
    );

    render(<ProjectSearch />);

    // Loading spinner should be visible initially
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  /**
   * Test 3: Displays results
   * Mock data appears in table after loading
   */
  test('displays project results in table', async () => {
    // Mock the API to return projects
    (projectApi.searchProjects as jest.Mock).mockResolvedValue({
      projects: mockProjects,
      total: mockProjects.length,
      query: undefined,
    });

    render(<ProjectSearch />);

    // Wait for projects to load
    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });

    // Check that project names are displayed
    expect(screen.getByText('Maple Ridge Townhomes')).toBeInTheDocument();
    expect(screen.getByText('Sunset Valley Condos')).toBeInTheDocument();
    expect(screen.getByText('River Walk Apartments')).toBeInTheDocument();

    // Check that addresses are displayed
    expect(
      screen.getByText('1245 Maple Ridge Dr, Austin, TX 78704')
    ).toBeInTheDocument();
    expect(
      screen.getByText('3890 Sunset Blvd, Los Angeles, CA 90027')
    ).toBeInTheDocument();

    // Check that statuses are displayed
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Construction')).toBeInTheDocument();
    expect(screen.getByText('Complete')).toBeInTheDocument();

    // Check that dates are formatted correctly (MM/DD/YYYY)
    expect(screen.getByText('03/15/2024')).toBeInTheDocument();
    expect(screen.getByText('06/22/2024')).toBeInTheDocument();
    expect(screen.getByText('01/10/2024')).toBeInTheDocument();
  });

  /**
   * Test 4: Handles search input
   * Typing in search box triggers search with debounce
   */
  test('handles search input and triggers filtered search', async () => {
    // Mock initial load with all projects
    (projectApi.searchProjects as jest.Mock).mockResolvedValueOnce({
      projects: mockProjects,
      total: mockProjects.length,
      query: undefined,
    });

    render(<ProjectSearch />);

    // Wait for initial load
    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });

    // Mock search results for "Maple"
    const filteredProjects = mockProjects.filter((p) =>
      p.name.toLowerCase().includes('maple')
    );
    (projectApi.searchProjects as jest.Mock).mockResolvedValueOnce({
      projects: filteredProjects,
      total: filteredProjects.length,
      query: 'Maple',
    });

    // Type in the search input
    const searchInput = screen.getByPlaceholderText(
      'Search by project name or address...'
    );
    fireEvent.change(searchInput, { target: { value: 'Maple' } });

    // Wait for debounce (300ms) + API call
    await waitFor(
      () => {
        expect(projectApi.searchProjects).toHaveBeenCalledWith({
          query: 'Maple',
        });
      },
      { timeout: 1000 }
    );

    // Verify filtered results appear
    await waitFor(() => {
      expect(screen.getByText('Maple Ridge Townhomes')).toBeInTheDocument();
    });
  });

  /**
   * Test 5: Error handling (Bonus)
   * Error message displays when API fails
   */
  test('displays error message when API fails', async () => {
    // Mock the API to reject with an error
    const errorMessage = 'Failed to fetch projects: Network error';
    (projectApi.searchProjects as jest.Mock).mockRejectedValue(
      new Error(errorMessage)
    );

    render(<ProjectSearch />);

    // Wait for error to appear
    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });

    // Verify error alert is displayed
    const errorAlert = screen.getByRole('alert');
    expect(errorAlert).toBeInTheDocument();
    expect(errorAlert).toHaveTextContent(errorMessage);

    // Verify loading spinner is gone
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
  });

  /**
   * Test 6: No results state
   * Shows "No projects found" when search returns empty results
   */
  test('shows no results message when no projects match search', async () => {
    // Mock initial load with all projects
    (projectApi.searchProjects as jest.Mock).mockResolvedValueOnce({
      projects: mockProjects,
      total: mockProjects.length,
      query: undefined,
    });

    render(<ProjectSearch />);

    // Wait for initial load
    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });

    // Mock search with no results
    (projectApi.searchProjects as jest.Mock).mockResolvedValueOnce({
      projects: [],
      total: 0,
      query: 'NonexistentProject',
    });

    // Type a search that yields no results
    const searchInput = screen.getByPlaceholderText(
      'Search by project name or address...'
    );
    fireEvent.change(searchInput, {
      target: { value: 'NonexistentProject' },
    });

    // Wait for search to complete
    await waitFor(
      () => {
        expect(
          screen.getByText('No projects found. Try a different search term.')
        ).toBeInTheDocument();
      },
      { timeout: 1000 }
    );
  });
});
