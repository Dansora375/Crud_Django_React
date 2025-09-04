import React from 'react';
import { Button } from '../../atoms';
import './Header.css';

/**
 * Header organism component
 * @param {Object} props - Component props
 * @param {string} props.title - App title
 * @param {string} props.subtitle - App subtitle
 */
const Header = ({
  title = 'Project Manager',
  subtitle = 'Manage your projects with ease'
}) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__brand">
          <h1 className="header__title">{title}</h1>
          <p className="header__subtitle">{subtitle}</p>
        </div>
        
        <div className="header__actions">
          <Button variant="secondary" size="small">
            About
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
