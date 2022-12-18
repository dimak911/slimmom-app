import { ButtonFilling } from '../ButtonFilled/ButtonFilled';
import {
  ModalDailyCalorieStyled,
  ModalsHeadStyled,
  FoodListTitleStyled,
  CaloriesCountStyled,
  LineStyled,
  FoodListWrapperStyled,
  FoodListStyled,
  ModalBackdropStyled,
} from './ModalDailyCalorieStyled.styled';

export function ModalDailyCalorie() {
  return (
    <ModalBackdropStyled>
      <ModalDailyCalorieStyled>
        <ModalsHeadStyled>
          Your recommended daily
          <br /> calorie intake is
        </ModalsHeadStyled>
        <CaloriesCountStyled>2800 ккал</CaloriesCountStyled>
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
        <ButtonFilling>Start losing weight</ButtonFilling>
      </ModalDailyCalorieStyled>
    </ModalBackdropStyled>
  );
}
