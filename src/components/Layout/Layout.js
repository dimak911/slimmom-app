import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { FoneImages } from './LayoutStyled'
import { selectIsLoggedIn } from 'redux/auth/selectors';

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
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </FoneImages>) :
        (<>
          <Container>
            <Header />
          </Container>
          <HeaderUnderline />
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>)
      }
    </>

  );
};
