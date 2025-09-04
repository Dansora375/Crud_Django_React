import React from 'react';
import './Card.css';

/**
 * Card atomic component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {'elevated'|'outlined'|'filled'} props.variant - Card style variant
 * @param {boolean} props.hoverable - Whether card should have hover effects
 */
const Card = ({
  children,
  className = '',
  variant = 'elevated',
  hoverable = false,
  ...props
}) => {
  const baseClass = 'card';
  const variantClass = `card--${variant}`;
  const hoverableClass = hoverable ? 'card--hoverable' : '';

  const classes = [baseClass, variantClass, hoverableClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
