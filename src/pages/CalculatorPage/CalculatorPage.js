import React from 'react';
import { CalculateCaloriesForm } from 'components/CalculateCaloriesForm';
import { SideBar } from 'components/SideBar/SideBar';
import { WrapForm, WrapSideBar, WrapPage } from './CalculatorPage.styled';

const CalculatorPage = () => {
  return (
    <WrapPage>
      <WrapForm>
        <CalculateCaloriesForm />
      </WrapForm>
      <WrapSideBar>
        <SideBar />
      </WrapSideBar>
    </WrapPage>
  );
};

export default CalculatorPage;
