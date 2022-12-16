import React, { useState } from 'react';

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const elements = [
    <div style={{ backgroundColor: 'red', width: '100%', height: '100%' }}>Element 1</div>,
    <div style={{ backgroundColor: 'green', width: '100%', height: '100%' }}>Element 2</div>,
    <div style={{ backgroundColor: 'blue', width: '100%', height: '100%' }}>Element 3</div>,
    <div style={{ backgroundColor: 'yellow', width: '100%', height: '100%' }}>Element 4</div>
  ];

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < elements.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div style={{ position: 'relative', width: '400px', height: '400px' }}>
      {elements.map((element, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${index * 100}%`,
            transition: 'left 0.5s'
          }}
        >
          {element}
        </div>
      ))}
      <button onClick={handlePreviousClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default Slider;