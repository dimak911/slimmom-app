import { ButtonFilling } from 'components/ButtonFilled/ButtonFilled';
import {
  ModalsHeadStyled,
  FoodListTitleStyled,
  CaloriesCountStyled,
  LineStyled,
  FoodListWrapperStyled,
  FoodListStyled,
} from './DailyCalorieIntake.styled';

export const DailyCalorieIntake = ({ countedCalories }) => {
  return (
    <>
      <ModalsHeadStyled>
        Ваша рекомендована добова норма
        <br /> споживання калорій становить
      </ModalsHeadStyled>
      <CaloriesCountStyled>{countedCalories} ккал</CaloriesCountStyled>
      <FoodListWrapperStyled>
        <LineStyled />
        <FoodListTitleStyled>
          Продукти, які ви не повинні їсти
        </FoodListTitleStyled>
        <FoodListStyled>
          <li>1. Борошняні вироби</li>
          <li>2. Молоко</li>
          <li>3. Червоне мясо</li>
          <li>4. Копченості</li>
        </FoodListStyled>
      </FoodListWrapperStyled>
      <ButtonFilling toRedirect="/signup">Почніть худнути</ButtonFilling>
    </>
  );
};
