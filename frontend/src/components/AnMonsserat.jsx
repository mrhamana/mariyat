import React from 'react';
import './AnMonsserat.css';

const AnMonsserat = ({ text = 'Montserrat', fontSize = '10.5em' }) => {
  return (
    <div className="container">
      <svg viewBox="0 0 960 150" style={{ width: '100%', height: 'auto' }}>
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="65%" style={{ fontSize }}>
            {text}
          </text>
        </symbol>
        <g className="g-ants">
          {[...Array(5)].map((_, i) => (
            <use key={i} xlinkHref="#s-text" className="text-copy" />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default AnMonsserat;
