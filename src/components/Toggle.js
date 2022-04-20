import React, { useState } from 'react';

const Toggle = () => {
  const [isSelect, setIsSelect] = useState(true);

  return (
    <>
      <div className='wrapper'>
        <div className='toggleBtn' onClick={() => setIsSelect(!isSelect)} isSelect={isSelect}>
          <button isSelect={isSelect}>기본</button>
          <button isSelect={!isSelect}>상세</button>
        </div>
      </div>
    </>
  );
};

export default Toggle;
