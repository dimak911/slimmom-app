import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { selectUserName } from 'redux/auth/selectors';
import { AcceptModal } from 'components/AcceptModal';
import { ReactComponent as BackArrowIcon } from '../../images/icons/back-arrow.svg';
import {
  UserInfoContainer,
  UserName,
  Button,
  BackLink,
} from './UserInfo.styled';

export const UserInfo = ({ burgerActive }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAcceptModalOpen, setIsAcceptModalopen] = useState(false);
  const userName = useSelector(selectUserName);

  const Logout = () => {
    dispatch(logOut());
    navigate('/');
  };

  const openAcceptModal = () => {
    setIsAcceptModalopen(true);
    window.document.body.style.overflow = 'hidden';
  };

  const closeAcceptModal = () => {
    setIsAcceptModalopen(false);
    window.document.body.style.overflow = 'unset';
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
      <Button type="button" onClick={() => openAcceptModal()}>
        Вихід
      </Button>
      <>
        {isAcceptModalOpen && (
          <AcceptModal
            closeModal={closeAcceptModal}
            acceptAction={`вийти, ${userName}`}
            agreeButton={{
              text: 'Вийти',
              action: Logout,
            }}
            desagreeButton={{
              text: 'Залишитись',
              action: closeAcceptModal,
            }}
          ></AcceptModal>
        )}
      </>
    </UserInfoContainer>
  );
};
