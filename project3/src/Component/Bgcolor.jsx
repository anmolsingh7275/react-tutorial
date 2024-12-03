import React, { useState } from 'react';
import './Bgcolor.css';

const Bgcolor = () => {
  const [bgColor, setBgColor] = useState('white'); // Default background color

  const handleColorChange = (color) => {
    setBgColor(color); // Update the background color state
  };

  return (
    <div style={{ backgroundColor: bgColor }} className="bg-container">
      <h2>Background Color Changer</h2>
      <div className="buttons-container">
        <button className="color-btn red" onClick={() => handleColorChange('red')}>Red</button>
        <button className="color-btn green" onClick={() => handleColorChange('green')}>Green</button>
        <button className="color-btn blue" onClick={() => handleColorChange('blue')}>Blue</button>
        <button className="color-btn yellow" onClick={() => handleColorChange('yellow')}>Yellow</button>
        <button className="color-btn purple" onClick={() => handleColorChange('purple')}>Purple</button>
      </div>
    </div>
  );
}

export default Bgcolor;
