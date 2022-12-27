import { DailyCaloriesForm } from 'components/DailyCaloriesForm';
import { SideBar } from 'components/SideBar/SideBar';
import { WrapForm, WrapSideBar, WrapPage } from './CalculatorPage.styled';

const CalculatorPage = () => {
  return (
    <WrapPage>
      <WrapForm>
        <DailyCaloriesForm />
      </WrapForm>
      <WrapSideBar>
        <SideBar />
      </WrapSideBar>
    </WrapPage>
  );
};

export default CalculatorPage;
