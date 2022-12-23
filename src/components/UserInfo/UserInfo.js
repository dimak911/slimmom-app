import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUserName, selectIsLoggedIn } from 'redux/auth/selectors';
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
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);
  const navigate = useNavigate();

  const isLogout = () => {
    dispatch(logOut());
    navigate('/');
  };

  const location = useLocation();

  return (
    isLoggedIn && (
      <UserInfoContainer location={location.pathname}>
        <StyledSubdirectoryIcon />
        <UserName>{userName}</UserName>
        <Button type="button" onClick={isLogout}>
          Вихід
        </Button>
      </UserInfoContainer>
    )
  );
};
