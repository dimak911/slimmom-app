import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import { selectUserName } from 'redux/auth/selectors';
import { selectIsLoading } from 'redux/loader/selectors';
import { Loader } from 'components/Loader/Loader';
import { useLocation } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import {
  UserInfoContainer,
  UserName,
  Button,
  StyledSubdirectoryIcon,
} from './UserInfo.styled';

export const UserInfo = () => {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);
  const isLoading = useSelector(selectIsLoading);
  const navigate = useNavigate();

  const isLogout = () => {
    dispatch(logOut());
    navigate('/');
  };

  const location = useLocation();

  return (
    <UserInfoContainer location={location.pathname}>
      <StyledSubdirectoryIcon />
      {isLoading ? <Loader /> : null}
      <UserName>{userName}</UserName>
      <Button type="button" onClick={isLogout}>
        Вихід
      </Button>
    </UserInfoContainer>
  );
};
