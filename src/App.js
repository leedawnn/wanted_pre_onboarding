import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Toggle from './components/Toggle';
import Tab from './components/Tab';

const GlobalStyles = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Toggle />
      <Tab />
    </>
  );
}

export default App;
