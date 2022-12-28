import {
  SideBarContainer,
  Box,
  Title,
  P,
  Span,
  TextBox,
  Ul,
  Li,
} from './SideBar.styled';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/loader/selectors';
import { Loader } from 'components/Loader/Loader';
import { productsList } from 'redux/products/selectors';
import { capitalizeFirstLetter } from 'helpers/capitalizeFirstLetter';
import { getSelectedDate } from 'redux/date/selectors';
import { initialDate } from 'App';
import { selectCalculateValue } from 'redux/calculate/selectors';

export const SideBar = () => {
  const isLoading = useSelector(selectIsLoading);
  const selectedDate = useSelector(getSelectedDate);

  const { countedCalories, notAllowedFoodCategories } = useSelector(selectCalculateValue);
  const products = useSelector(productsList);

  const totalCalories = products.reduce(
    (accumulator, currentValue) =>
      accumulator + Number(currentValue.productCalories),
    0
  );
  const diffCalories = (Number(countedCalories) - totalCalories).toFixed(2);
  const percentage = ((totalCalories / Number(countedCalories)) * 100).toFixed(2);

  return (
    <Box>
      <SideBarContainer>
        {isLoading ? <Loader /> : null}
        <Title>
          Сумарно на{' '}
          <span>
            {selectedDate ? selectedDate : initialDate.split('-').join('.')}
          </span>
        </Title>
        <TextBox>
          <ul>
            <li>
              <P>
                <Span>Залишилось</Span>
              </P>
            </li>
            <li>
              <P>
                <Span>Споживається</Span>
              </P>
            </li>
            <li>
              <P>
                <Span>Добова норма</Span>
              </P>
            </li>
            <li>
              <P>
                <Span>% від норми</Span>
              </P>
            </li>
          </ul>

          <Ul>
            <Li>
              <P>
                <Span> {diffCalories} ккал</Span>
              </P>
            </Li>
            <Li>
              <P>
                <Span>{totalCalories} ккал</Span>
              </P>
            </Li>
            <Li>
              <P>
                <Span>{countedCalories ?? 0} ккал</Span>
              </P>
            </Li>
            <Li>
              <P>
                <Span>{isNaN(percentage) ? 0 : percentage} %</Span>
              </P>
            </Li>
          </Ul>
        </TextBox>
      </SideBarContainer>
      <SideBarContainer>
        <Title>Їжа не рекомендована</Title>
        <ul>
          {notAllowedFoodCategories &&
            notAllowedFoodCategories.slice(0, 4).map(product => {
              return (
                <li key={product}>
                  <P>
                    <span>{capitalizeFirstLetter(product)}</span>
                  </P>
                </li>
              );
            })}
        </ul>
      </SideBarContainer>
    </Box>
  );
};
