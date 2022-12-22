import { ButtonFilling } from 'components/ButtonFilled/ButtonFilled';
import {
  ModalsHeadStyled,
  FoodListTitleStyled,
  CaloriesCountStyled,
  LineStyled,
  FoodListWrapperStyled,
  FoodListStyled,
} from './DailyCalorieIntake.styled';

export const DailyCalorieIntake = ({ calculateData }) => {
  const { height, age, currentWeight, desiredWeight } = calculateData;

  const countedCalories =
    10 * currentWeight +
    6.25 * height -
    5 * age -
    161 -
    10 * (currentWeight - desiredWeight);

  return (
    <>
      <ModalsHeadStyled>
        Ваша рекомендована добова норма
        <br /> споживання калорій становить
      </ModalsHeadStyled>
      <CaloriesCountStyled>{countedCalories} ккал</CaloriesCountStyled>
      <FoodListWrapperStyled>
        <LineStyled />
        <FoodListTitleStyled>Продукти, які ви не повинні їсти</FoodListTitleStyled>
        <FoodListStyled>
          <li>1. Борошняні вироби</li>
          <li>2. Молоко</li>
          <li>3. Червоне мясо</li>
          <li>4. Копченості</li>
        </FoodListStyled>
      </FoodListWrapperStyled>
      <ButtonFilling>Почніть худнути</ButtonFilling>
    </>
  );
};
