import { useState } from 'react';
import styled from 'styled-components';

const Toggle = () => {
  const [isSelect, setIsSelect] = useState(true);

  return (
    <>
      <ToggleWrapper className='toggleBtn' onClick={() => setIsSelect(!isSelect)} isSelect={isSelect}>
        <ToggleBtn isSelect={isSelect}>기본</ToggleBtn>
        <ToggleBtn isSelect={!isSelect}>상세</ToggleBtn>
        <ActiveBtn isSelect={isSelect} />
      </ToggleWrapper>
    </>
  );
};

export default Toggle;

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 50px;
  border-radius: 40px;
  margin: 50px auto;
  background-color: #ebebeb;
  cursor: pointer;
`;

const ToggleBtn = styled.div`
  padding: 5px 80px;
  font-size: 18px;
  font-weight: bold;
  color: ${props => (props.isSelect ? '#606060' : '#ABABAB')};
  z-index: 1;
`;

const ActiveBtn = styled.div`
  width: 196px;
  height: 44px;
  position: absolute;
  border-radius: 50px;
  background-color: #fff;
  transition: 0.2s ease-in-out;
  transform: ${props => (props.isSelect ? 'translatex(-50%)' : 'translatex(50%)')};
`;
