import React, { useState } from 'react';
import { Header, ProjectList } from '../../components/organisms';
import { ProjectForm } from '../../components/molecules';
import { useCreateProject, useUpdateProject } from '../../hooks/useProjects';
import './ProjectsPage.css';

/**
 * Main Projects Page
 */
const ProjectsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const createProjectMutation = useCreateProject();
  const updateProjectMutation = useUpdateProject();

  const isSubmitting = createProjectMutation.isPending || updateProjectMutation.isPending;

  const handleCreateNew = () => {
    setEditingProject(null);
    setShowForm(true);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setShowForm(true);
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (editingProject) {
        // Update existing project
        await updateProjectMutation.mutateAsync({
          id: editingProject.id,
          data: formData
        });
      } else {
        // Create new project
        await createProjectMutation.mutateAsync(formData);
      }
      
      // Close form on success
      setShowForm(false);
      setEditingProject(null);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to save project. Please try again.');
    }
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingProject(null);
  };

  if (showForm) {
    return (
      <div className="projects-page">
        <Header />
        <main className="projects-page__main">
          <div className="projects-page__form-container">
            <ProjectForm
              project={editingProject}
              onSubmit={handleFormSubmit}
              onCancel={handleFormCancel}
              isSubmitting={isSubmitting}
            />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="projects-page">
      <Header />
      <main className="projects-page__main">
        <ProjectList
          onCreateNew={handleCreateNew}
          onEditProject={handleEditProject}
        />
      </main>
    </div>
  );
};

export default ProjectsPage;
