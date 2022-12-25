import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { FoneImages, Gradient } from './Layout.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Loader } from 'components/Loader/Loader';
import { Container } from 'components/Container.styled';
import { HeaderUnderline } from 'components/Header/HeaderStyled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {!isLoggedIn ? (
        <FoneImages>
          <Container>
            <Header />
          </Container>
          <HeaderUnderline />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </FoneImages>
      ) : (
        <Gradient>
          <Container>
            <Header />
          </Container>
          <HeaderUnderline />
          <Suspense fallback={<Loader />}>
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
