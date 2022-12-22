import React, { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { Route, Routes, Navigate } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout/Layout';

const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('pages/LoginPage'));
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const CalculatorPage = lazy(() =>
  import('pages/CalculatorPage/CalculatorPage')
);
const DiaryPage = lazy(() => import('pages/DiaryPage'));
// додати сторінку DiaryPage

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/"
            element={
              <RestrictedRoute redirectTo="/diary/:date" component={<MainPage />} />
            } />
          <Route
            path="/signup"
            element={
              <RestrictedRoute
                redirectTo="/diary/:date"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/diary/:date"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/diary/:date"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<CalculatorPage />}
              />
              // замінити тут коспонент на сторінку DiaryPage
            }
          />
          <Route
            path="/calculate"
            element={
              <PrivateRoute
                redirectTo="/login"
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
