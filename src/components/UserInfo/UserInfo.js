import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import { selectUserName } from 'redux/auth/selectors';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserInfoContainer, UserName, Button } from './UserInfo.styled';

import { Box } from 'components/Box';

export const UserInfo = ({ burgerActive }) => {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);
  const navigate = useNavigate();

  const isLogout = () => {
    dispatch(logOut());
    navigate('/');
  };

  const location = useLocation();

  return (
    <UserInfoContainer burger={burgerActive} location={location.pathname}>
      <Box display="flex" ml="auto">
        <UserName>{userName}</UserName>
        <Button type="button" onClick={isLogout}>
          Вихід
        </Button>
      </Box>
    </UserInfoContainer>
  );
};
