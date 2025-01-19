import React from 'react';

const ImageComponent = () => {
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/bg`}
        alt=""
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
      />
    </div>
  );
};

export default ImageComponent;
