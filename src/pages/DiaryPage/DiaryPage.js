import { SideBar } from '../../components/SideBar/SideBar';
import { useState } from 'react';
import { DairyProductList } from '../../components/DairyProductList/DairyProductList';
import img from '../../images/icons/Vector.png';
import { DiaryAddProductForm } from '../../components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import { BoxForm, Button, ButtonBox, WrapSideBar, WrapPage, WrapForm } from './DiaryPage.styled';
import { Box } from 'components/Box';

const DiaryPage = () => {
  const [isShowAddForm, setIsShowAddForm] = useState(false);
  const openModal = () => {
    setIsShowAddForm(!isShowAddForm);
  };
  return (
    <WrapPage>
      <WrapForm>
        <Box pl={20}>
          <DiaryDateCalendar />

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
          <DiaryAddProductForm img={'Add'} openModal={openModal} />
        )}
      </WrapForm>

      <WrapSideBar>
        {!isShowAddForm && <SideBar />}
      </WrapSideBar>
    </WrapPage>
  );
};

export default DiaryPage;
