import { useState } from 'react';
import { Box } from 'components/Box';
import { Container } from 'components/Container.styled';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm';
import { ModalDailyCalorie } from 'components/ModalDailyCalorie';
import { DailyCalorieIntake } from 'components/DailyCalorieIntake/DailyCalorieIntake';
import { Wrap } from './MainPage.styled';

const MainPage = () => {
  const [isModalOpen, setIsModalopen] = useState(false);
  const [countedCalories, setCountedCalories] = useState({});

  const openModal = data => {
    setIsModalopen(true);
    setCountedCalories(data);
    window.document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalopen(false);
    window.document.body.style.overflow = 'unset';
  };

  return (
    <Container>
      <Wrap>
        <Box display="flex">
          <DailyCaloriesForm openModal={openModal} />
          {isModalOpen && (
            <ModalDailyCalorie closeModal={closeModal}>
              <DailyCalorieIntake countedCalories={countedCalories} />
            </ModalDailyCalorie>
          )}
        </Box>
      </Wrap>
    </Container>
  );
};

export default MainPage;
