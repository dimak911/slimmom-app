import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import { selectUserName } from 'redux/auth/selectors';
import { addUserFormdata } from 'redux/auth/slice';
import { initialState } from 'redux/auth/slice';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackArrowIcon } from '../../images/icons/back-arrow.svg';
import {
  UserInfoContainer,
  UserName,
  Button,
  BackLink,
} from './UserInfo.styled';

export const UserInfo = ({ burgerActive }) => {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);
  const navigate = useNavigate();

  const isLogout = () => {
    dispatch(addUserFormdata(initialState));
    dispatch(logOut());
    navigate('/');
  };

  const location = useLocation();

  return (
    <UserInfoContainer burger={burgerActive} location={location.pathname}>
      {location.pathname === '/calculate' ? null : (
        <BackLink to="/calculate">
          <BackArrowIcon />
        </BackLink>
      )}
      <UserName>{userName}</UserName>
      <Button type="button" onClick={isLogout}>
        Вихід
      </Button>
    </UserInfoContainer>
  );
};
