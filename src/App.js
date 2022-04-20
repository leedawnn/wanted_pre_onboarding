import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Toggle from './components/Toggle';

const GlobalStyles = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Toggle />
    </>
  );
}

export default App;
