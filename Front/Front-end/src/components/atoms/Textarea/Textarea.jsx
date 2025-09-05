import React from 'react';
import './Textarea.css';

/**
 * Textarea atomic component
 * @param {Object} props - Component props
 * @param {string} props.label - Textarea label
 * @param {string} props.placeholder - Textarea placeholder
 * @param {string} props.value - Textarea value
 * @param {Function} props.onChange - Change handler
 * @param {string} props.error - Error message
 * @param {boolean} props.required - Whether textarea is required
 * @param {boolean} props.disabled - Whether textarea is disabled
 * @param {number} props.rows - Number of rows
 */
const Textarea = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  rows = 3,
  className = '',
  id,
  ...props
}) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = !!error;

  const textareaClasses = [
    'textarea',
    hasError ? 'textarea--error' : '',
    disabled ? 'textarea--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="textarea-wrapper">
      {label && (
        <label htmlFor={textareaId} className="textarea-label">
          {label}
          {required && <span className="textarea-required">*</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        className={textareaClasses}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        rows={rows}
        {...props}
      />
      {error && <span className="textarea-error">{error}</span>}
    </div>
  );
};

export default Textarea;
