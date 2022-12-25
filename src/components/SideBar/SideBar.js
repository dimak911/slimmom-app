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

export const SideBar = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const { callorie, notRecommendedProduct } = useSelector(sideBarInfoSelectors);

  // console.log('info', sideBarInfo);

  useEffect(() => {
    dispatch(fetchsideBarInfo());
  }, [dispatch]);

  // let { date } = useParams();
  // const diaryDate = useState(() => {
  //   if (date) return date.split('-').join('.');

  //   const initialDate = new Date().format('DD.MM.YYYY');
  //   return initialDate;
  // });

  // const info = useSelector(sideBarInfoSelectors);

  // console.log(date)

  return (
    <Box>
      <SideBarContainer>
        {isLoading ? <Loader /> : null}
        <Title>
          {/* Сумарно на <span>{diaryDate}</span> */}
          Сумарно на <span>{'25.12.2022'}</span>
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
                <Span>{callorie} ккал</Span>
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
          <li>
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
          </li>
        </ul>
      </SideBarContainer>
    </Box>
  );
};
