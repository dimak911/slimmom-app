import styled from 'styled-components';
import { ReactComponent as SubdirectoryIcon } from '../../icons/subdirectory-left.svg';

export const UserInfoContainer = styled.div`
  /* max-width: 100%; */
  /* padding-left: 20px;
  padding-right: 20px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin: 0 auto; */
  background: #eff1f3;
  font-family: Verdana-Bold;
  font-size: 14px;
  letter-spacing: 0.04em;
  position: absolute;
  top: 82px;
  left: 0;
  width: 320px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* @media screen and (min-width: 320px) {
    width: 320px;
    height: 40px;
  } */
  @media screen and (min-width: 768px) {
    position: static;
    flex-grow: 1;
    margin-right: 36px;
    background: none;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 16px;
  }
`;

export const UserName = styled.p`
  padding-right: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-right: 2px solid #e0e0e0;
  color: #212121;
`;

export const Button = styled.button`
  border: none;
  background: none;
  padding-left: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 20px;
  color: #9b9faa;
  transition: all 250ms easy;
  cursor: pointer;
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;

export const StyledSubdirectoryIcon = styled(SubdirectoryIcon)`
  display: ${p =>
    p.location === '/diary/:date' || p.location === 'calculator'
      ? 'inline-block'
      : 'none'};
  width: 12px;
  height: 7px;
  cursor: pointer;
  fill: ${props => props.theme.colors.black};
  padding-left: 20px;
  margin-right: auto;

  @media (min-width: 768px) {
    display: none;
  }
`;

// export const UserInfoContainer = styled.div`
//   max-width: 100%;
//   padding-left: 20px;
//   padding-right: 20px;
//   padding-top: 4px;
//   padding-bottom: 4px;
//   margin: 0 auto;
//   background: #eff1f3;
//   font-family: Verdana-Bold;
//   font-size: 14px;
//   letter-spacing: 0.04em;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   @media screen and (min-width: 320px) {
//     width: 320px;
//     height: 40px;
//   }
//   @media screen and (min-width: 768px) {
//     width: 768px;
//     padding-right: 48px;
//     background: none;
//   }
//   @media screen and (min-width: 1280px) {
//     width: 1280px;
//     padding-left: 16px;
//   }
// `;

// export const UserName = styled.p`
//   padding-right: 15px;
//   padding-top: 8px;
//   padding-bottom: 8px;
//   border-right: 2px solid #e0e0e0;
//   color: #212121;
// `;

// export const Button = styled.button`
//   border: none;
//   background: none;
//   padding-left: 15px;
//   padding-top: 8px;
//   padding-bottom: 8px;
//   color: #9b9faa;
//   transition: all 250ms easy;
//   cursor: pointer;
//   &:hover,
//   :focus {
//     color: #212121;
//   }
// `;
