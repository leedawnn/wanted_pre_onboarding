import { useState } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

const Tab = () => {
  const [currentTab, setCurrentTab] = useState('감자');

  const menuArr = ['감자', '고구마', '카레라이스'];

  const tabClickHandler = menu => {
    setCurrentTab(menu);
  };

  return (
    <>
      <TabWrapper>
        <TabMenus>
          {menuArr.map(el => {
            return (
              <TabMenu
                key={nanoid()}
                className={currentTab === el ? 'focused' : ''}
                onClick={() => tabClickHandler(el)}
              >
                {el}
              </TabMenu>
            );
          })}
          <ActiveTabMenu currentTab={currentTab} />
        </TabMenus>
      </TabWrapper>
    </>
  );
};

export default Tab;

const TabWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const TabMenus = styled.ul`
  width: 480px;
  height: 34px;
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid #ababab;
`;

const TabMenu = styled.li`
  width: 150px;
  height: 34px;
  display: flex;
  justify-content: space-around;
  font-weight: bold;
  transition: 0.4s ease-in-out;
  color: ${props => (props.className === 'focused' ? '#5A5A5A' : '#ABABAB')};
`;

const ActiveTabMenu = styled.div`
  position: absolute;
  width: 150px;
  height: 2px;
  margin: 34px 0;
  background-color: #0faeaf;
  transition: 0.4s ease-in-out;
  transform: ${props =>
    props.currentTab === '감자'
      ? 'translatex(-100%)'
      : props.currentTab === '고구마'
      ? 'translatex(0)'
      : 'translatex(100%)'};
`;
