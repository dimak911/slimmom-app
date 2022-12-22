import { useState } from 'react';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm';
import { ModalDailyCalorie } from 'components/ModalDailyCalorie';
import { DailyCalorieIntake } from 'components/DailyCalorieIntake/DailyCalorieIntake';
import { MainPageBg } from './MainPageStyled.styled';
import { Box } from 'components/Box';

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
    <>
      <DailyCaloriesForm openModal={openModal} />
      {isModalOpen && (
        <ModalDailyCalorie closeModal={closeModal}>
          <DailyCalorieIntake calculateData={calculateData} />
        </ModalDailyCalorie>
      )}
      {/* <MainPageBg /> */}
    </>
  );
};

export default MainPage;
