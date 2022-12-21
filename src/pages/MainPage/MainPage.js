import { useState } from 'react';
import { Container } from 'components/Container.styled';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm';
import { ModalDailyCalorie } from 'components/ModalDailyCalorie';
import { DailyCalorieIntake } from 'components/DailyCalorieIntake/DailyCalorieIntake';
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
    <Container>
      <Box display="flex">
        <Box>
          <Box height="68px">Logo + Navigation</Box>
          <DailyCaloriesForm openModal={openModal} />
          {isModalOpen && (
            <ModalDailyCalorie closeModal={closeModal}>
              <DailyCalorieIntake calculateData={calculateData} />
            </ModalDailyCalorie>
          )}
        </Box>
        <Box width="600px">IMAGE</Box>
      </Box>
    </Container>
  );
};

export default MainPage;
