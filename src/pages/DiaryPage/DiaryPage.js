import { SideBar } from '../../components/SideBar/SideBar';
import { useState } from 'react';
import { DairyProductList } from '../../components/DairyProductList/DairyProductList';
import { Container } from '../../components/Container.styled';
import img from '../../images/icons/Vector.png';
import { DiaryAddProductForm } from '../../components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import { BoxForm, Button, ButtonBox } from './DiaryPage.styled';
import { Box } from 'components/Box';

const DiaryPage = () => {
  const [isShowAddForm, setIsShowAddForm] = useState(false);
  const openModal = () => {
    setIsShowAddForm(!isShowAddForm);
  };
  return (
    <Container>
      <Box display="flex" justifyContent="space-between" flexDirection="column">
        <Box marginTop="147px">
          <DiaryDateCalendar />
          {!isShowAddForm && (
            <BoxForm>
              <DiaryAddProductForm img={img} />
            </BoxForm>
          )}
          {!isShowAddForm && <DairyProductList />}
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
        </Box>

        {!isShowAddForm && <SideBar />}
      </Box>
    </Container>
  );
};

export default DiaryPage;
