import React from 'react';
import { Card, Button } from '../../atoms';
import './ProjectCard.css';

/**
 * ProjectCard molecular component
 * @param {Object} props - Component props
 * @param {Object} props.project - Project object
 * @param {Function} props.onEdit - Edit handler
 * @param {Function} props.onDelete - Delete handler
 * @param {boolean} props.isDeleting - Whether project is being deleted
 */
const ProjectCard = ({
  project,
  onEdit,
  onDelete,
  isDeleting = false
}) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Card variant="elevated" hoverable className="project-card">
      <div className="project-card__header">
        <h3 className="project-card__title">{project.title}</h3>
        <div className="project-card__actions">
          <Button
            variant="secondary"
            size="small"
            onClick={() => onEdit(project)}
            disabled={isDeleting}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            size="small"
            onClick={() => onDelete(project.id)}
            loading={isDeleting}
            disabled={isDeleting}
          >
            Delete
          </Button>
        </div>
      </div>
      
      <div className="project-card__content">
        <p className="project-card__description">{project.description}</p>
      </div>
      
      <div className="project-card__footer">
        <div className="project-card__meta">
          <span className="project-card__date">
            Created: {formatDate(project.created_at)}
          </span>
          {project.updated_at !== project.created_at && (
            <span className="project-card__date">
              Updated: {formatDate(project.updated_at)}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
