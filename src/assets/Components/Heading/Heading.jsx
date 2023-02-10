import React, { useState } from 'react'
import Sun from '../../Images/icon-sun.svg'
import Moon from '../../Images/icon-moon.svg'

const Heading = () => {
  const [mode, setMode] = useState('light');

  const handleModeToggle = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='HeadingContainer'>
      <h1>devinfinder</h1>

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
