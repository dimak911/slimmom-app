import React, { lazy } from 'react';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';

// ПЕРЕДЕЛАТЬ
import { DailyCaloriesForm } from 'components/DailyCaloriesForm';

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
        {/* ПЕРЕДЕЛАТЬ */}
        <Route path="/" element={<DailyCaloriesForm />} />
      </Routes>
    </>
  );
};
