import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import { UserInfoContainer, UserName, Btn } from './UserInfo.styled';

export const UserInfo = () => {
  const dispatch = useDispatch();

  const isLogout = () => {
    dispatch(logOut());
  };
  return (
    <UserInfoContainer>
      <UserName>Nick</UserName>
      <Btn onClick={isLogout}>Exit</Btn>
    </UserInfoContainer>
  );
};
