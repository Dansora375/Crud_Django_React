import apiClient from './apiClient';

// Projects API endpoints
const PROJECTS_ENDPOINT = '/api/projects/';

/**
 * Projects API Service
 * Handles all CRUD operations for projects
 */
export const projectsApi = {
  /**
   * Get all projects
   * @returns {Promise<Array>} List of projects
   */
  getAll: async () => {
    const response = await apiClient.get(PROJECTS_ENDPOINT);
    return response.data;
  },

  /**
   * Get project by ID
   * @param {number} id - Project ID
   * @returns {Promise<Object>} Project object
   */
  getById: async (id) => {
    const response = await apiClient.get(`${PROJECTS_ENDPOINT}${id}/`);
    return response.data;
  },

  /**
   * Create new project
   * @param {Object} projectData - Project data (title, description)
   * @returns {Promise<Object>} Created project
   */
  create: async (projectData) => {
    const response = await apiClient.post(PROJECTS_ENDPOINT, projectData);
    return response.data;
  },

  /**
   * Update existing project
   * @param {number} id - Project ID
   * @param {Object} projectData - Updated project data
   * @returns {Promise<Object>} Updated project
   */
  update: async (id, projectData) => {
    const response = await apiClient.put(`${PROJECTS_ENDPOINT}${id}/`, projectData);
    return response.data;
  },

  /**
   * Partially update project
   * @param {number} id - Project ID
   * @param {Object} partialData - Partial project data
   * @returns {Promise<Object>} Updated project
   */
  partialUpdate: async (id, partialData) => {
    const response = await apiClient.patch(`${PROJECTS_ENDPOINT}${id}/`, partialData);
    return response.data;
  },

  /**
   * Delete project
   * @param {number} id - Project ID
   * @returns {Promise<void>}
   */
  delete: async (id) => {
    await apiClient.delete(`${PROJECTS_ENDPOINT}${id}/`);
  }
};

export default projectsApi;
