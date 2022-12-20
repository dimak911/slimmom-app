import React, { lazy, useState } from 'react';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import { ModalDailyCalorie } from 'components/ModalDailyCalorie/ModalDailyCalorie';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';

// import { ModalDailyCalorie } from 'components/ModalDailyCalorie/ModalDailyCalorie';
// import { DairyProductList } from 'components/DairyProductList/DairyProductList';

const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

export const App = () => {
  const [isModalOpen, setIsModalopen] = useState(false);
  const closeModal = () => {
    setIsModalopen(false);
    window.document.body.style.overflow = 'unset';
  };
  const openModal = () => {
    setIsModalopen(true);
    window.document.body.style.overflow = 'hidden';
  };
  return (
    <>
      <GlobalStyle />
      
      {isModalOpen && <ModalDailyCalorie closeModal={closeModal} />}
      {/* <DairyProductList /> */}
      <DailyCaloriesForm />
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
