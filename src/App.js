import React, { lazy } from 'react';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';

import { MainPage } from 'pages/MainPage';

const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route
          path="/signup"
          element={
            <RestrictedRoute
              redirectTo="/login"
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
        <Route path="diary/:date" element={<DiaryDateCalendar />}></Route>
      </Routes>
    </>
  );
};
