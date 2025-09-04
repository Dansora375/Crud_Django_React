import React from 'react';
import './Loading.css';

/**
 * Loading atomic component
 * @param {Object} props - Component props
 * @param {'spinner'|'dots'|'pulse'} props.type - Loading animation type
 * @param {'small'|'medium'|'large'} props.size - Loading size
 * @param {string} props.text - Loading text
 * @param {boolean} props.fullscreen - Whether to show fullscreen loading
 */
const Loading = ({
  type = 'spinner',
  size = 'medium',
  text = 'Loading...',
  fullscreen = false,
  className = ''
}) => {
  const baseClass = 'loading';
  const typeClass = `loading--${type}`;
  const sizeClass = `loading--${size}`;
  const fullscreenClass = fullscreen ? 'loading--fullscreen' : '';

  const classes = [baseClass, typeClass, sizeClass, fullscreenClass, className]
    .filter(Boolean)
    .join(' ');

  const renderLoading = () => {
    switch (type) {
      case 'dots':
        return (
          <div className="loading-dots">
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
          </div>
        );
      case 'pulse':
        return <div className="loading-pulse"></div>;
      default:
        return <div className="loading-spinner"></div>;
    }
  };

  return (
    <div className={classes}>
      <div className="loading-content">
        {renderLoading()}
        {text && <span className="loading-text">{text}</span>}
      </div>
    </div>
  );
};

export default Loading;
