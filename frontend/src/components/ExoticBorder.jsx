import React from 'react';
import './ExoticBorder.css';

const ExoticBorder = ({ children }) => {
  return (
    <div className="exotic-border">
      {children}
    </div>
  );
};

export default ExoticBorder;
