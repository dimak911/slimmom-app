import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { capitalizeFirstLetter } from 'helpers/capitalizeFirstLetter';
import { routes } from 'helpers/constants';

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

export const DailyCalorieIntake = ({
  dataForModal: { countedCalories, notAllowedFoodCategories },
  closeModal,
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const redirectTo = isLoggedIn ? routes.diaryToday : routes.signup;

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
      <LinkStyled to={redirectTo}>
        <ButtonStyled onClick={() => closeModal()}>
          Почніть худнути
        </ButtonStyled>
      </LinkStyled>
    </>
  );
};
