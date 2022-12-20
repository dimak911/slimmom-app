import React, { lazy } from 'react';
import { RestrictedRoute } from 'components/RestrictedRoute';
// import { PrivateRoute } from 'components/PrivateRoute';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import { Layout } from 'components/Layout/Layout';

const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('pages/LoginPage'));
const MainPage = lazy(() => import('pages/MainPage'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
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
              <RestrictedRoute redirectTo="/signup" component={<LoginPage />} />
            }
          />
          <Route
            path="/"
            element={
              <RestrictedRoute redirectTo="/" component={<MainPage />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
