import { useState } from 'react';
import { SideBar } from '../../components/SideBar/SideBar';
import { DairyProductList } from '../../components/DairyProductList/DairyProductList';
import { DiaryAddProductForm } from '../../components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import {
  BoxForm,
  Button,
  ButtonBox,
  WrapSideBar,
  WrapPage,
  WrapForm,
  MobileBoxForm,
  StyledSubdirectoryIconWrapper,
  StyledSubdirectoryIcon,
} from './DiaryPage.styled';
import { Box } from 'components/Box';

import img from '../../images/icons/Vector.png';
import arrowImg from '../../images/icons/arrow-left-2x.png';

const DiaryPage = () => {
  const [isShowAddForm, setIsShowAddForm] = useState(false);

  const openModal = () => {
    setIsShowAddForm(!isShowAddForm);
  };

  return (
    <WrapPage isShowAddForm={isShowAddForm}>
      <WrapForm isShowAddForm={isShowAddForm}>
        <Box>
          {!isShowAddForm && <DiaryDateCalendar />}
          {!isShowAddForm && (
            <BoxForm>
              <DiaryAddProductForm img={img} />
            </BoxForm>
          )}
          {<DairyProductList />}
        </Box>
        {
          <ButtonBox>
            <Button onClick={openModal}>
              <img src={img} alt="button to add product" />
            </Button>
          </ButtonBox>
        }
        {isShowAddForm && (
          <Box
            width={'100%'}
            height="100%"
            left="0"
            top="122px"
            position="absolute"
            zIndex="1"
            bg="white"
          >
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
          </Box>
        )}
      </WrapForm>

      <WrapSideBar>{!isShowAddForm && <SideBar />}</WrapSideBar>
    </WrapPage>
  );
};

export default DiaryPage;
