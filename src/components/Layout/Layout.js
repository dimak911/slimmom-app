import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { FoneImages, Gradient } from './Layout.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { HeaderUnderline } from 'components/Header/HeaderStyled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {!isLoggedIn ? (
        <FoneImages>
          <Header />
          <HeaderUnderline />
          <Suspense>
            <Outlet />
          </Suspense>
        </FoneImages>
      ) : (
        <Gradient>
          <Header />
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
