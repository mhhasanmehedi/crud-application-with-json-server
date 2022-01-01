import React from 'react';
import notFound from '../Assets/Images/NotFound.jpg';

const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
      }}
    >
      <img src={notFound} alt='Not Found Image' />
    </div>
  );
};

export default NotFound;
