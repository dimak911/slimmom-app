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
import { showLoading } from 'redux/loader/operations';
import { selectIsLoading } from 'redux/loader/selectors';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';

export const SideBar = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(showLoading());
    dispatch(fetchsideBarInfo());
  }, [dispatch]);

  // const info = useSelector(sideBarInfoSelectors)
  return (
    <Box>
      <SideBarContainer>
        {isLoading ? <Loader /> : null}
        <Title>
          Сумарно на <span>20/06/2020</span>
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
                <Span>000 ккал</Span>
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
