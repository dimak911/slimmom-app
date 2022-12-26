import {
  ModalsHeadStyled,
  FoodListTitleStyled,
  CaloriesCountStyled,
  LineStyled,
  FoodListWrapperStyled,
  FoodListStyled,
  LinkStyled,
  ButtonStyled,
} from './DailyCalorieIntake.styled';
import { capitalizeFirstLetter } from 'helpers/capitalizeFirstLetter';

export const DailyCalorieIntake = ({
  dataForModal: { countedCalories, notAllowedFoodCategories },
  closeModal,
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
          {notAllowedFoodCategories.slice(0, 5).map(categorie => {
            return <li key={categorie}>{capitalizeFirstLetter(categorie)}</li>;
          })}
        </FoodListStyled>
      </FoodListWrapperStyled>
      <LinkStyled to="/signup">
        <ButtonStyled onClick={() => closeModal()}>
          Почніть худнути
        </ButtonStyled>
      </LinkStyled>
    </>
  );
};
