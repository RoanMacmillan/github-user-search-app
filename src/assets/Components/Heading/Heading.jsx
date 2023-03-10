import React, { useState } from 'react';
import Sun from '../../Images/icon-sun.svg';
import Moon from '../../Images/icon-moon.svg';
import './Heading.css'

const Heading = ({ mode, onToggle }) => {
  const handleModeToggle = () => {
    onToggle(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='HeadingContainer'>
      <h1>devfinder</h1>

      {mode === 'dark' && (
        <>
          <span>Light</span>
          <img
            className='Sun'
            src={Sun}
            alt='Sun Icon'
            onClick={handleModeToggle}
          />
        </>
      )}

      {mode === 'light' && (
        <>
          <span>Dark</span>
          <img
            className='Moon'
            src={Moon}
            alt='Moon Icon'
            onClick={handleModeToggle}
          />
        </>
      )}
    </div>
  );
};

export default Heading;
