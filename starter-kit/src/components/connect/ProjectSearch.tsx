'use client';

import { useEffect, useState } from 'react';

import {
  Alert,
  Box,
  Chip,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';

import { ProjectStatus } from '@/types/project';
import { useDebounce } from '@/hooks/useDebounce';
import { useProjectSearchStore } from '@/stores/projectSearchStore';

/**
 * ProjectSearch Component
 * Allows users to search and filter construction projects
 */
export default function ProjectSearch() {
  // Local state for search input (for immediate UI updates)
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Zustand store state and actions
  const { projects, loading, error, fetchProjects } = useProjectSearchStore();

  // Debounce search query to avoid excessive API calls
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  /**
   * Fetch projects based on debounced search query
   */
  useEffect(() => {
    fetchProjects(debouncedSearchQuery);
  }, [debouncedSearchQuery, fetchProjects]);

  /**
   * Formats ISO date string to MM/DD/YYYY with padding
   */
  const formatDate = (isoDate: string): string => {
    const date = new Date(isoDate);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();

    
return `${month}/${day}/${year}`;
  };

  /**
   * Returns color for status chip based on project status
   */
  const getStatusColor = (
    status: ProjectStatus
  ):
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning' => {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Feasibility':
        return 'info';
      case 'Entitlement':
        return 'warning';
      case 'Construction':
        return 'primary';
      case 'Complete':
        return 'secondary';
      case 'On Hold':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box sx={{ width: '100%', p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Project Search
      </Typography>

      {/* Search Input */}
      <TextField
        fullWidth
        label="Search projects"
        placeholder="Search by project name or address..."
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ mb: 3 }}
      />

      {/* Error Display */}
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {/* Loading State */}
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 300,
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          {/* No Results State */}
          {projects.length === 0 ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 300,
              }}
            >
              <Typography variant="body1" color="text.secondary">
                No projects found. Try a different search term.
              </Typography>
            </Box>
          ) : (

            /* Results Table */
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="projects table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <strong>Project Name</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Status</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Address</strong>
                    </TableCell>
                    <TableCell>
                      <strong>Created Date</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow
                      key={project.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {project.name}
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={project.status}
                          color={getStatusColor(project.status)}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{project.address}</TableCell>
                      <TableCell>{formatDate(project.createdAt)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </>
      )}
    </Box>
  );
}
