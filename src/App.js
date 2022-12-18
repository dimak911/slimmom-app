import React from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { ModalDailyCalorie } from 'components/ModalDailyCalorie/ModalDailyCalorie';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <ModalDailyCalorie />
      </div>
    </>
  );
};
