import { create } from 'zustand';

import { Project } from '@/types/project';
import { searchProjects } from '@/services/projectApi';

/**
 * Project Search Store State
 */
interface ProjectSearchState {
  searchQuery: string;
  projects: Project[];
  loading: boolean;
  error: string | null;
}

/**
 * Project Search Store Actions
 */
interface ProjectSearchActions {
  setSearchQuery: (query: string) => void;
  fetchProjects: (query?: string) => Promise<void>;
  clearError: () => void;
}

/**
 * Zustand store for managing project search state
 */
export const useProjectSearchStore = create<
  ProjectSearchState & ProjectSearchActions
>((set) => ({
  // Initial State
  searchQuery: '',
  projects: [],
  loading: true,
  error: null,

  // Actions
  /**
   * Updates the search query in the store
   * @param query - The search query string
   */
  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
  },

  /**
   * Fetches projects from the API based on search query
   * @param query - Optional search query to filter projects
   */
  fetchProjects: async (query?: string) => {
    try {
      set({ loading: true, error: null });

      const response = await searchProjects({
        query: query || '',
      });

      set({
        projects: response.projects,
        loading: false,
      });
    } catch (err) {
      set({
        error:
          err instanceof Error ? err.message : 'Failed to fetch projects',
        loading: false,
        projects: [],
      });
    }
  },

  /**
   * Clears the error state
   */
  clearError: () => {
    set({ error: null });
  },
}));
