import React, { useState } from 'react';
import { Button, Loading } from '../../atoms';
import { ProjectCard } from '../../molecules';
import { useProjects, useDeleteProject } from '../../../hooks/useProjects';
import './ProjectList.css';

/**
 * ProjectList organism component
 * @param {Object} props - Component props
 * @param {Function} props.onCreateNew - Create new project handler
 * @param {Function} props.onEditProject - Edit project handler
 */
const ProjectList = ({
  onCreateNew,
  onEditProject
}) => {
  const [deletingId, setDeletingId] = useState(null);
  
  const { data: projects = [], isLoading, error, refetch } = useProjects();
  const deleteProjectMutation = useDeleteProject();

  const handleDelete = async (projectId) => {
    if (!window.confirm('Are you sure you want to delete this project?')) {
      return;
    }

    setDeletingId(projectId);
    
    try {
      await deleteProjectMutation.mutateAsync(projectId);
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Failed to delete project. Please try again.');
    } finally {
      setDeletingId(null);
    }
  };

  const handleRetry = () => {
    refetch();
  };

  if (isLoading) {
    return (
      <div className="project-list">
        <Loading size="large" text="Loading projects..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="project-list">
        <div className="project-list__error">
          <h3>Error Loading Projects</h3>
          <p>Failed to load projects. Please try again.</p>
          <Button onClick={handleRetry} variant="primary">
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-list">
      <div className="project-list__header">
        <div className="project-list__title-section">
          <h1 className="project-list__title">Projects</h1>
          <p className="project-list__subtitle">
            Manage your projects ({projects.length} total)
          </p>
        </div>
        <Button
          onClick={onCreateNew}
          variant="primary"
          className="project-list__create-btn"
        >
          Create New Project
        </Button>
      </div>

      {projects.length === 0 ? (
        <div className="project-list__empty">
          <div className="project-list__empty-content">
            <h3>No Projects Yet</h3>
            <p>Get started by creating your first project!</p>
            <Button onClick={onCreateNew} variant="primary">
              Create Your First Project
            </Button>
          </div>
        </div>
      ) : (
        <div className="project-list__grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onEdit={onEditProject}
              onDelete={handleDelete}
              isDeleting={deletingId === project.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectList;
