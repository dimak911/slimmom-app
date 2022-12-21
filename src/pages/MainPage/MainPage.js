import { useState } from 'react';
import { Container } from 'components/Container.styled';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm';
import { ModalDailyCalorie } from 'components/ModalDailyCalorie';
import { MainPageWrapper } from './MainPageStyled.styled';

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
    <MainPageWrapper>
      <DailyCaloriesForm openModal={openModal} />
      {isModalOpen && (
        <ModalDailyCalorie
          closeModal={closeModal}
          calculateData={calculateData}
        />
      )}
    </MainPageWrapper>
  );
};

export default MainPage;
