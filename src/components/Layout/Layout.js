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
import { ModalDailyCalorie } from 'components/ModalDailyCalorie';
import FooterModalTeamList from 'components/Footer/FooterModalTeam/TeamImageGalleryList';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

      <Footer openModal={openModal}>
        {isModalOpen && (
          <ModalDailyCalorie closeModal={closeModal}>
            <FooterModalTeamList users={teams} />
          </ModalDailyCalorie>
        )}
      </Footer>
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
