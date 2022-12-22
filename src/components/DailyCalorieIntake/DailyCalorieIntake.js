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
  // const { height, age, currentWeight, desiredWeight } = calculateData;

  // const countedCalories =
  //   10 * currentWeight +
  //   6.25 * height -
  //   5 * age -
  //   161 -
  //   10 * (currentWeight - desiredWeight);

  return (
    <>
      <ModalsHeadStyled>
        Your recommended daily
        <br /> calorie intake is
      </ModalsHeadStyled>
      <CaloriesCountStyled>{countedCalories} ккал</CaloriesCountStyled>
      <FoodListWrapperStyled>
        <LineStyled />
        <FoodListTitleStyled>Foods you should not eat</FoodListTitleStyled>
        <FoodListStyled>
          <li>1. Flour products</li>
          <li>2. Milk</li>
          <li>3. Red meat</li>
          <li>4. Smoked meats</li>
        </FoodListStyled>
      </FoodListWrapperStyled>
      <ButtonFilling toRedirect="/signup">Start losing weight</ButtonFilling>
    </>
  );
};
