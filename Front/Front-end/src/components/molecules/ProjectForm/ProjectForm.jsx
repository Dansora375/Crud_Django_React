import React, { useState, useEffect } from 'react';
import { Card, Button, Input, Textarea } from '../../atoms';
import { validateProject, INITIAL_PROJECT_FORM } from '../../../types/project';
import './ProjectForm.css';

/**
 * ProjectForm molecular component
 * @param {Object} props - Component props
 * @param {Object} props.project - Project to edit (null for create)
 * @param {Function} props.onSubmit - Submit handler
 * @param {Function} props.onCancel - Cancel handler
 * @param {boolean} props.isSubmitting - Whether form is submitting
 */
const ProjectForm = ({
  project = null,
  onSubmit,
  onCancel,
  isSubmitting = false
}) => {
  const [formData, setFormData] = useState(INITIAL_PROJECT_FORM);
  const [errors, setErrors] = useState({});

  // Initialize form with project data if editing
  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        description: project.description
      });
    } else {
      setFormData(INITIAL_PROJECT_FORM);
    }
    setErrors({});
  }, [project]);

  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validation = validateProject(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    onSubmit(formData);
  };

  const isEditing = !!project;

  return (
    <Card variant="elevated" className="project-form">
      <div className="project-form__header">
        <h2 className="project-form__title">
          {isEditing ? 'Edit Project' : 'Create New Project'}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="project-form__form">
        <Input
          label="Project Title"
          type="text"
          placeholder="Enter project title..."
          value={formData.title}
          onChange={handleInputChange('title')}
          error={errors.title}
          required
          disabled={isSubmitting}
        />

        <Textarea
          label="Project Description"
          placeholder="Enter project description..."
          value={formData.description}
          onChange={handleInputChange('description')}
          error={errors.description}
          required
          rows={4}
          disabled={isSubmitting}
        />

        <div className="project-form__actions">
          <Button
            type="button"
            variant="secondary"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            {isEditing ? 'Update Project' : 'Create Project'}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default ProjectForm;
