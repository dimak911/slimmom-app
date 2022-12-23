import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { FoneImages } from './LayoutStyled';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Loader } from 'components/Loader/Loader';

import { Container } from 'components/Container.styled';
import { HeaderUnderline } from 'components/Header/HeaderStyled';

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
          <Suspense fallback={<Loader/>}>
            <Outlet />
          </Suspense>
        </FoneImages>
      ) : (
        <>
          <Container>
            <Header />
          </Container>
          <HeaderUnderline />
          <Suspense fallback={<Loader/>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};
