import { useState } from 'react';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm';
import { SideBar } from 'components/SideBar/SideBar';
import { ModalDailyCalorie } from 'components/ModalDailyCalorie';
import { DailyCalorieIntake } from 'components/DailyCalorieIntake/DailyCalorieIntake';

import { WrapForm, WrapSideBar, WrapPage } from './CalculatorPage.styled';

const CalculatorPage = () => {
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
    <WrapPage>
      <WrapForm>
        <DailyCaloriesForm openModal={openModal} />
        {isModalOpen && (
          <ModalDailyCalorie closeModal={closeModal}>
            <DailyCalorieIntake
              dataForModal={dataForModal}
              closeModal={closeModal}
            />
          </ModalDailyCalorie>
        )}
      </WrapForm>
      <WrapSideBar>
        <SideBar />
      </WrapSideBar>
    </WrapPage>
  );
};

export default CalculatorPage;
