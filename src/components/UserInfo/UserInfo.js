import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import { selectUserName } from 'redux/auth/selectors';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackArrowIcon } from '../../icons/back-arrow.svg';
import {
  UserInfoContainer,
  UserName,
  Button,
  // StyledSubdirectoryIcon,
  BackLink,
} from './UserInfo.styled';
// import subdirectoryIcon from '../../icons/back-arrow.png';

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
      {/* <StyledSubdirectoryIcon src={subdirectoryIcon} alt="arrow-back" /> */}
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
