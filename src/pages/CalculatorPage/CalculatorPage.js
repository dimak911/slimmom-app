import React, { useEffect } from 'react';
import { CalculateCaloriesForm } from 'components/CalculateCaloriesForm';
import { SideBar } from 'components/SideBar/SideBar';
import { WrapForm, WrapSideBar, WrapPage } from './CalculatorPage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectUserData } from 'redux/auth/selectors';

const CalculatorPage = () => {
  const dispatch = useDispatch();
  const { render } = useSelector(selectUserData);
  console.log(render);

  useEffect(() => {
    dispatch(refreshUser());

    // if (!axios.defaults.headers.common.Authorization) return;

    // dispatch(refreshCalories());
  }, [dispatch]);

  return (
    <WrapPage>
      <WrapForm>{render && <CalculateCaloriesForm />}</WrapForm>
      <WrapSideBar>
        <SideBar />
      </WrapSideBar>
    </WrapPage>
  );
};

export default CalculatorPage;
