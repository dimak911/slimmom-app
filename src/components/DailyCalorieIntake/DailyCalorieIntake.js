import { ButtonFilling } from 'components/ButtonFilled/ButtonFilled';
import {
  ModalsHeadStyled,
  FoodListTitleStyled,
  CaloriesCountStyled,
  LineStyled,
  FoodListWrapperStyled,
  FoodListStyled,
} from './DailyCalorieIntake.styled';
import { capitalizeFirstLetter } from 'helpers/capitalizeFirstLetter';

export const DailyCalorieIntake = ({
  dataForModal: { countedCalories, notAllowedFoodCategories },
}) => {
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
          {notAllowedFoodCategories.slice(0, 5).map((categorie, index) => {
            return (
              <li key={categorie}>
                {index + 1}. {capitalizeFirstLetter(categorie)}
              </li>
            );
          })}
        </FoodListStyled>
      </FoodListWrapperStyled>
      <ButtonFilling toRedirect="/signup">Почніть худнути</ButtonFilling>
    </>
  );
};
