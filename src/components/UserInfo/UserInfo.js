import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUserName, selectIsLoggedIn } from 'redux/auth/selectors';
import { showLoading } from 'redux/loader/operations';
import { selectIsLoading } from 'redux/loader/selectors';
import { Loader } from 'components/Loader/Loader';

import { useNavigate } from 'react-router-dom';
import { UserInfoContainer, UserName, Button } from './UserInfo.styled';

export const UserInfo = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);
  const isLoading = useSelector(selectIsLoading)
  const navigate = useNavigate();

  const isLogout = () => {
    dispatch(showLoading());
    dispatch(logOut());
    navigate('/');
  };
  return (
    isLoggedIn && (
      <UserInfoContainer>
        {isLoading? <Loader/>: null}
        <UserName>{userName}</UserName>
        <Button type="button" onClick={isLogout}>
          Вихід
        </Button>
      </UserInfoContainer>
    )
  );
};
