//Core
import styled from 'styled-components';
//Settings
// import { Container } from '../Container.styled';

const FormWrap = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  padding-left: 15px;
  padding-right: 15px;

  background-color: #fff;

  @media screen and (min-width: 768px) {
    display: block;

    position: static;

    padding-left: 0;
    padding-right: 0;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1200px) {
    width: 62%;
  }
`;

const Form = styled.form`
  margin-top: 110px;

  @media screen and (min-width: 768px) {
    margin-top: 0;

    position: relative;

    display: flex;
    justify-content: flex-start;
  }
`;

const Label = styled.label`
  display: block;

  &:last-of-type {
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) {
    margin-right: 30px;
    flex: 0 0 45%;

    position: relative;

    &:last-of-type {
      margin-top: 0;
      margin-right: 48px;
      flex: 0 0 15%;
    }
  }
`;

const Input = styled.input`
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  padding: 10px 5px;

  width: 100%;
  border: none;
  border-bottom: 1px solid #e0e0e0;

  background-color: transparent;
`;

const Message = styled.span`
  color: #e74c3c;
  font-size: 12px;

  position: absolute;
  top: 42px;
  left: 0;
`;

const ProductListWrap = styled.div`
  background: #f1f2f6;

  position: absolute;
  width: calc(100vw - 30px);

  @media screen and (min-width: 768px) {
    width: 45%;

    z-index: 100;
    left: 0;
    top: 45px;
  }
`;

const ProductList = styled.ul`
  max-height: 110px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #424242;
  }

  &::-webkit-scrollbar-thumb {
    background: #7a7e81;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #9e9e9e;
  }

  @media screen and (min-width: 1200px) {
    max-height: 150px;
  }
`;

const ProductItem = styled.li`
  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    background-color: #a4b0be;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 60px;

  @media screen and (min-width: 768px) {
    margin-top: 0;

    margin-right: auto;
  }
`;

const Button = styled.button`
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;

  display: block;

  padding: 13px 46px;

  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: all 250ms linear;

  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);

  &::before {
    content: 'Добавить';
    font-size: 14px;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 1);
  }

  @media screen and (min-width: 768px) {
    padding: 0;

    width: 50px;
    height: 50px;

    &::before {
      content: '+';
      font-size: 20px;
    }
  }

  @media screen and (min-width: 1200px) {
    box-shadow: none;

    &:hover {
      box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
    }
  }
`;

export {
  FormWrap,
  Form,
  Label,
  Input,
  Message,
  ProductListWrap,
  ProductList,
  ProductItem,
  BtnWrap,
  Button,
};
