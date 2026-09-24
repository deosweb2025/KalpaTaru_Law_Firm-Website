import React from 'react';

const Divider = ({ width = '48px', height = '4px', color = '#D28C0E', align = 'left', className = '' }) => {
  const alignClasses = {
    left: 'mr-auto',
    center: 'mx-auto',
    right: 'ml-auto'
  };

  return (
    <div className={`my-4 ${className}`}>
      <div 
        className={`${alignClasses[align] || 'mr-auto'}`}
        style={{
          width: width,
          height: height,
          backgroundColor: color
        }}
      />
    </div>
  );
};

export default Divider;

