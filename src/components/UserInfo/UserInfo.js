import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUserName } from 'redux/auth/selectors';

import { useNavigate } from 'react-router-dom';
import { UserInfoContainer, UserName, Button } from './UserInfo.styled';

export const UserInfo = () => {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);
  const navigate = useNavigate();

  const isLogout = () => {
    dispatch(logOut());
    navigate('/');
  };
  return (
    <UserInfoContainer>
      <UserName>{userName}</UserName>
      <Button type="button" onClick={isLogout}>
        Exit
      </Button>
    </UserInfoContainer>
  );
};
