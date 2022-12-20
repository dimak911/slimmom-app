import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Container } from 'components/Container.styled';

export const Layout = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
