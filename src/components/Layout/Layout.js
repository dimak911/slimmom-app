import React, { useEffect } from 'react';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { FoneImages, Gradient } from './Layout.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Container } from 'components/Container.styled';
import { HeaderUnderline } from 'components/Header/HeaderStyled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useAsync } from 'react-use';
import { refreshUser } from 'redux/auth/operations';

export const Layout = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useAsync(async () => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isLoggedIn ? (
        <FoneImages>
          <Container>
            <Header />
          </Container>
          <HeaderUnderline />
          <Suspense>
            <Outlet />
          </Suspense>
        </FoneImages>
      ) : (
        <Gradient>
          <Container>
            <Header />
          </Container>
          <HeaderUnderline />
          <Suspense>
            <Outlet />
          </Suspense>
        </Gradient>
      )}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
