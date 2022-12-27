import React, { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { Route, Routes, Navigate } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout/Layout';
// import { selectCalculateValue } from 'redux/calculate/selectors';
import moment from 'moment';
// import { refreshCalories } from 'redux/calculate/operations';
import axios from 'axios';
import { selectUserData } from 'redux/auth/selectors';
export const initialDate = moment(new Date()).format('DD-MM-YYYY');

const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('pages/LoginPage'));
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const CalculatorPage = lazy(() =>
  import('pages/CalculatorPage/CalculatorPage')
);
const DiaryPage = lazy(() => import('pages/DiaryPage/DiaryPage'));

export const App = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  // const calculateData = useSelector(selectCalculateValue);
  const { isRefreshing } = useSelector(selectIsRefreshing);
  const noFormDataDirect = !userData.calorie
    ? '/calculate'
    : `/diary/${initialDate}`;

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <RestrictedRoute
                redirectTo={noFormDataDirect}
                component={<MainPage />}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <RestrictedRoute
                redirectTo={noFormDataDirect}
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo={noFormDataDirect}
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/diary/:date"
            element={
              <PrivateRoute
                redirectTo={!userData.calorie ? '/' : '/login'}
                component={<DiaryPage />}
              />
            }
          />
          <Route
            path="/calculate"
            element={
              <PrivateRoute
                redirectTo={!userData.calorie ? '/' : '/login'}
                component={<CalculatorPage />}
              />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />}></Route>
      </Routes>
    </>
  );
};
