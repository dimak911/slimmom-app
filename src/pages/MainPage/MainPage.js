import { useState } from 'react';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm';
import { ModalDailyCalorie } from 'components/ModalDailyCalorie';
import { DailyCalorieIntake } from 'components/DailyCalorieIntake/DailyCalorieIntake';
import { Wrap } from './MainPage.styled';
import { Container } from 'components/Container.styled';

const MainPage = () => {
  const [isModalOpen, setIsModalopen] = useState(false);
  const [dataForModal, setDataForModal] = useState({});

  const openModal = data => {
    setIsModalopen(true);
    setDataForModal(data);
    window.document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalopen(false);
    window.document.body.style.overflow = 'unset';
  };

  return (
    <Container>
      <Wrap>
        <DailyCaloriesForm openModal={openModal} />
        {isModalOpen && (
          <ModalDailyCalorie closeModal={closeModal}>
            <DailyCalorieIntake dataForModal={dataForModal} />
          </ModalDailyCalorie>
        )}
      </Wrap>
    </Container>
  );
};

export default MainPage;
