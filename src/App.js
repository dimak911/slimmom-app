import React, { lazy } from 'react';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
// import { ModalDailyCalorie } from 'components/ModalDailyCalorie/ModalDailyCalorie';
// import { DairyProductList } from 'components/DairyProductList/DairyProductList';

const RegistrationPage = lazy(() => import('pages/RegistrationPage/RegistrationPage'));
const CalculatorPage = lazy(() => import('pages/CalculatorPage/CalculatorPage'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <ModalDailyCalorie /> */}
      {/* <DairyProductList /> */}
      <Routes>
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
          path="/calculate"
          element={<CalculatorPage />
            // <PrivateRoute redirectTo="/login" component={<CalculatorPage />} />
          }
        />
      </Routes>
    </>
  );
};
