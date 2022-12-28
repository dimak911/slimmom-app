import styled from 'styled-components';

export const WrapPage = styled.div`
  margin-top: 40px;
  padding-top: 40px;

  @media (min-width: 768px) {
    margin-top: 100px;
    padding: 0;
  }
  @media (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 150px;
  }
`;

export const WrapForm = styled.div`
  @media (max-width: 767px) {
    width: 320px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;

    margin-left: 0;
    margin-right: 0;
    padding-bottom: 55px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 55px;
  }
`;

export const BoxForm = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const WrapSideBar = styled.div`
  display: flex;
  justify-content: center;

  background-color: #f0f1f3;

  @media (max-width: 767px) {
    padding-top: 40px;
  }
  @media (max-width: 1287px) {
    padding-top: 80px;
  }
  @media (min-width: 1280px) {
    background-color: transparent;
    padding-right: 20px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  /* padding-top: 60px; */
  /* padding-bottom: 60px; */

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.space[3]}px;
  width: ${p => p.theme.space[3] * 6}px;
  height: ${p => p.theme.space[3] * 6}px;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: ${p => p.theme.radii.button};
  border: none;
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  /* margin-bottom: 136px; */
  margin-bottom: 60px;
`;

export const StyledSubdirectoryIconWrapper = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: -32px;
  left: 14px;

  @media (min-width: 768px) {
    display: none;
  }
`;
export const StyledSubdirectoryIcon = styled.img`
  width: 12px;
  height: 7px;
  cursor: pointer;
  color: ${props => props.theme.colors.black};
`;

export const MobileBoxForm = styled.div`
  /* margin-top: -40px; */
  padding-left: 20px;
  padding-right: 20px;
  /* padding-bottom: 20px; */
  /* z-index: 100; */
  position: absolute;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`;

// export const ButtonBox = styled.div`
//   display: flex;
//   align-items: center;

//   @media screen and (min-width: 768px) {
//     display: none;
//   }
// `;

// export const WrapForm = styled.div`
//   width: 320px;
//   margin-top: 80px;
//   margin-left: auto;
//   margin-right: auto;

//   @media (min-width: 768px) {
//     padding-left: 12px;
//     width: 768px;
//     margin-top: 100px;
//     margin-bottom: 55px;
//   }

//   @media (min-width: 1280px) {
//     margin-top: 147px;
//     margin-bottom: 56px;
//     margin-left: 0;
//     margin-right: 0;
//   }
// `;

// export const WrapSideBar = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// export const WrapPage = styled.div`
//   @media (min-width: 1280px) {
//     display: flex;
//     justify-content: space-between;
//     width: 1280px;
//     margin-left: auto;
//     margin-right: auto;
//   }
// `;

// export const WrapCalendar = styled.div`
//   display: inline-block;
//   margin-bottom: 32px;
//   @media screen and (min-width: 768px) {
//     margin-bottom: 60px;
//   }
// `;
