import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px 16px;
  justify-content: space-between;
  border-bottom: 2px solid ${p => p.theme.colors.input};
@media (min-width: 767px) {
  padding: 20px 0 16px;
  }
@media (min-width: 1279px){
  padding: 0;
  border-bottom: none;
  justify-content: flex-start;
}
`
export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${P => P.theme.colors.secondary};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  letter-spacing: 0.04em;
&:hover{
  color: ${p => p.theme.colors.primary};
  }
@media (min-width: 1279px){
  margin-top:131px;
  position: relative;
&:not(:last-child){
  margin-right:18px;
  margin-left: 20px;
  }
&:not(:last-child)::before{
  content: '';
  display: inline-block;
  width: 2px;
  height: 32px;
  background: ${p => p.theme.colors.input};
  position: absolute;
  vertical-align: middle;
  left: -20px;
  top: 50%;                        
  transform: translate(0, -50%)    
  }
  }
`

export const Logo = styled.div`
  width: 46px;
  height: 44px;
  background-color: tomato;
  margin-right: 23px;
@media (min-width: 767px) {
  width: 162px;
  height: 44px;
  margin-right: 320px;
  }
@media (min-width: 1279px) {
  width: 167px;
  height: 66px;
  margin-top: 80px;
  margin-right: 20px;
  }
`