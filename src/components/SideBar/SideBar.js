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
// import { sideBarInfoSelectors } from 'redux/products/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchsideBarInfo } from 'redux/products/operations';
import { selectIsLoading } from 'redux/loader/selectors';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { sideBarInfoSelectors } from 'redux/products/selectors';
import { productsList } from 'redux/products/selectors';
import { fetchDiaryProducts } from 'redux/products/operations';
import { capitalizeFirstLetter } from 'helpers/capitalizeFirstLetter';

export const SideBar = () => {
  let { date } = useParams();
  const diaryDate = date.split('-').join('.');
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const { callorie, notRecommendedProduct } = useSelector(sideBarInfoSelectors);
  const products = useSelector(productsList);

  useEffect(() => {
    dispatch(fetchsideBarInfo());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchDiaryProducts(date));
  }, [dispatch, date]);

  // const [notRecommended, setNotRecommended] = useState([]);

  // useEffect(() => {
  //   setNotRecommended(notRecommendedProduct);
  // }, []);

  console.log(notRecommendedProduct);

  const totalCallories = products.reduce(
    (accumulator, currentValue) =>
      accumulator + Number(currentValue.productCalories),
    0
  );

  const diffСallories = Number(callorie) - totalCallories;
  const percentage = ((totalCallories / Number(callorie)) * 100).toFixed(2);

  return (
    <Box>
      <SideBarContainer>
        {isLoading ? <Loader /> : null}
        <Title>
          Сумарно на <span>{diaryDate}</span>
          {/* Сумарно на <span>{'25.12.2022'}</span> */}
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
                <Span> {diffСallories} ккал</Span>
              </P>
            </Li>
            <Li>
              <P>
                <Span>{totalCallories} ккал</Span>
              </P>
            </Li>
            <Li>
              <P>
                <Span>{callorie} ккал</Span>
              </P>
            </Li>
            <Li>
              <P>
                <Span>{percentage} %</Span>
              </P>
            </Li>
          </Ul>
        </TextBox>
      </SideBarContainer>
      <SideBarContainer>
        <Title>Їжа не рекомендована</Title>
        <ul>
          {notRecommendedProduct &&
            notRecommendedProduct.slice(0, 4).map(product => {
              return (
                <li key={product}>
                  <P>
                    <span>{capitalizeFirstLetter(product)}</span>
                  </P>
                </li>
              );
            })}
          {/* <li>
            <P>
              <span>Борошняні вироби</span>
            </P>
          </li>
          <li>
            <P>
              <span>Молоко</span>
            </P>
          </li>
          <li>
            <P>
              <span>Червоне м'ясо</span>
            </P>
          </li>
          <li>
            <P>
              <span>Копченості</span>
            </P>
          </li> */}
        </ul>
      </SideBarContainer>
    </Box>
  );
};
