import { SideBar } from '../../components/SideBar/SideBar';
import { useState } from 'react';
import { DairyProductList } from '../../components/DairyProductList/DairyProductList';
import img from '../../images/icons/Vector.png';
import { DiaryAddProductForm } from '../../components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import {
  BoxForm,
  MobileBoxForm,
  Button,
  ButtonBox,
  WrapSideBar,
  WrapPage,
  WrapForm,
  StyledSubdirectoryIcon,
  StyledSubdirectoryIconWrapper,
} from './DiaryPage.styled';
import { Box } from 'components/Box';

import arrowImg from '../../images/icons/arrow-left-2x.png';

const DiaryPage = () => {
  const [isShowAddForm, setIsShowAddForm] = useState(false);

  const openModal = () => {
    setIsShowAddForm(!isShowAddForm);
  };

  return (
    <WrapPage isShowAddForm={isShowAddForm}>
      <WrapForm isShowAddForm={isShowAddForm}>
        <Box pl={20}>
          {!isShowAddForm && <DiaryDateCalendar />}
          {!isShowAddForm && (
            <BoxForm>
              <DiaryAddProductForm img={img} />
            </BoxForm>
          )}
          {!isShowAddForm && <DairyProductList />}
        </Box>
        {!isShowAddForm && (
          <ButtonBox>
            <Button onClick={openModal}>
              <img src={img} alt="button to add product" />
            </Button>
          </ButtonBox>
        )}
        {isShowAddForm && (
          <MobileBoxForm>
            <StyledSubdirectoryIconWrapper onClick={() => openModal()}>
              <StyledSubdirectoryIcon src={arrowImg} />
            </StyledSubdirectoryIconWrapper>
            <DiaryAddProductForm
              img={'Add'}
              isShowAddForm={isShowAddForm}
              openModal={openModal}
            />
          </MobileBoxForm>
        )}
      </WrapForm>

      <WrapSideBar>{!isShowAddForm && <SideBar />}</WrapSideBar>
    </WrapPage>
  );
};

export default DiaryPage;
