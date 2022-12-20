import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Container } from 'components/Container.styled';
import { HeaderUnderline } from 'components/Header/HeaderStyled';

export const Layout = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <HeaderUnderline />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
