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
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { sideBarInfoSelectors } from 'redux/products/selectors';
import { capitalizeFirstLetter } from 'helpers/capitalizeFirstLetter';

export const SideBar = () => {
  let { date } = useParams();
  const diaryDate = date.split('-').join('.');
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const sideBarInfo = useSelector(sideBarInfoSelectors);

  useEffect(() => {
    dispatch(fetchsideBarInfo());
  }, [dispatch]);

  console.log('lalala', sideBarInfo);

  const [notRecommended, setNotRecommended] = useState([]);

  useEffect(() => {
    setNotRecommended(sideBarInfo.notRecommendedProduct);
  }, [sideBarInfo.notRecommendedProduct]);

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
                <Span>000 ккал</Span>
              </P>
            </Li>
            <Li>
              <P>
                <Span>000 ккал</Span>
              </P>
            </Li>
            <Li>
              <P>
                <Span>{sideBarInfo.callorie} ккал</Span>
              </P>
            </Li>
            <Li>
              <P>
                <Span>000 ккал</Span>
              </P>
            </Li>
          </Ul>
        </TextBox>
      </SideBarContainer>
      <SideBarContainer>
        <Title>Їжа не рекомендована</Title>
        <ul>
          {notRecommended.slice(0, 4).map(product => {
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
