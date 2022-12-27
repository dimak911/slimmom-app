import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Suspense, useState } from 'react';
import { FoneImages, Gradient } from './Layout.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Container } from 'components/Container.styled';
import { HeaderUnderline } from 'components/Header/HeaderStyled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from 'components/Footer/Footer';
import { teams } from '../Footer/FooterModalTeam/users';
import FooterModalTeamList from 'components/Footer/FooterModalTeam/TeamImageGalleryList';
import { FooterModalTeam } from 'components/Footer/FooterModalTeam/FooterModalTeam';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    window.document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    window.document.body.style.overflow = 'unset';
  };

  return (
    <>
      {isModalOpen && (
        <FooterModalTeam closeModal={closeModal}>
          <FooterModalTeamList users={teams} />
        </FooterModalTeam>
      )}

      {!isLoggedIn ? (
        <FoneImages>
          <Container>
            <Header />
          </Container>
          <HeaderUnderline />
          <Suspense>
            <Outlet />
          </Suspense>
          <Footer openModal={openModal} />
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
          <Footer openModal={openModal} />
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
