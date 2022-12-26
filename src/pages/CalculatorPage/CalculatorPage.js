import React, { useEffect } from 'react';
import { refreshCalories } from 'redux/calculate/operations';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm';
import { SideBar } from 'components/SideBar/SideBar';
import { WrapForm, WrapSideBar, WrapPage } from './CalculatorPage.styled';
import { useDispatch } from 'react-redux';

const CalculatorPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCalories());
  }, [dispatch]);

  return (
    <WrapPage>
      <WrapForm>
        <DailyCaloriesForm />
      </WrapForm>
      <WrapSideBar>
        <SideBar />
      </WrapSideBar>
    </WrapPage>
  );
};

export default CalculatorPage;
