import React from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { SideBar } from 'components/SideBar/SideBar';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <h1>Start here</h1>
      </div>
      <SideBar/>
    </>
  );
};
