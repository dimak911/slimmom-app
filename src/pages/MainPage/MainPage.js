import { useState } from 'react';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm';
import { ModalDailyCalorie } from 'components/ModalDailyCalorie';
import { DailyCalorieIntake } from 'components/DailyCalorieIntake/DailyCalorieIntake';
import { MainPageBg } from './MainPageStyled.styled';
import { Container } from 'components/Container.styled';

const MainPage = () => {
  const [isModalOpen, setIsModalopen] = useState(false);
  const [calculateData, setCalculateData] = useState({});

  const openModal = data => {
    setIsModalopen(true);
    setCalculateData(data);
    window.document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalopen(false);
    window.document.body.style.overflow = 'unset';
  };

  return (
    <Container>
      <DailyCaloriesForm openModal={openModal} />
      {isModalOpen && (
        <ModalDailyCalorie closeModal={closeModal}>
          <DailyCalorieIntake calculateData={calculateData} />
        </ModalDailyCalorie>
      )}
      {/* <MainPageBg /> */}
    </Container>
  );
};

export default MainPage;
