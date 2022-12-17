import React, { lazy } from 'react';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';

const RegistrationPage = lazy(() => import('pages/RegistrationPage'));

export const App = () => {
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route
          path="/signup"
          element={
            <RestrictedRoute
              redirectTo="/login"
              component={<RegistrationPage />}
            />
          }
        />
      </Routes>
    </>
  );
};
