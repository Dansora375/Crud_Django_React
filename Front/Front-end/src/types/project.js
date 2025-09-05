// Types for Project entity
export const PROJECT_SCHEMA = {
  id: 'number',
  title: 'string',
  description: 'string',
  created_at: 'string',
  updated_at: 'string'
};

// Validation helper
export const validateProject = (project) => {
  const errors = {};
  
  if (!project.title || project.title.trim() === '') {
    errors.title = 'Title is required';
  } else if (project.title.length > 100) {
    errors.title = 'Title must be 100 characters or less';
  }
  
  if (!project.description || project.description.trim() === '') {
    errors.description = 'Description is required';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Project form initial state
export const INITIAL_PROJECT_FORM = {
  title: '',
  description: ''
};
