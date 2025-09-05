import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { projectsApi } from '../services/projectsApi';

// Query keys for caching
export const QUERY_KEYS = {
  PROJECTS: 'projects',
  PROJECT: 'project',
};

/**
 * Hook to fetch all projects
 */
export const useProjects = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.PROJECTS],
    queryFn: projectsApi.getAll,
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};

/**
 * Hook to fetch a single project by ID
 */
export const useProject = (id) => {
  return useQuery({
    queryKey: [QUERY_KEYS.PROJECT, id],
    queryFn: () => projectsApi.getById(id),
    enabled: !!id, // Only run query if ID exists
    staleTime: 5 * 60 * 1000,
  });
};

/**
 * Hook to create a new project
 */
export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: projectsApi.create,
    onSuccess: () => {
      // Invalidate and refetch projects list
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PROJECTS] });
    },
    onError: (error) => {
      console.error('Error creating project:', error);
    },
  });
};

/**
 * Hook to update a project
 */
export const useUpdateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => projectsApi.update(id, data),
    onSuccess: (data) => {
      // Update both the projects list and individual project cache
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PROJECTS] });
      queryClient.setQueryData([QUERY_KEYS.PROJECT, data.id], data);
    },
    onError: (error) => {
      console.error('Error updating project:', error);
    },
  });
};

/**
 * Hook to delete a project
 */
export const useDeleteProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: projectsApi.delete,
    onSuccess: () => {
      // Invalidate projects list to refetch
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PROJECTS] });
    },
    onError: (error) => {
      console.error('Error deleting project:', error);
    },
  });
};
