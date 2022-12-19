//Core
import styled from 'styled-components';

const Wrapper = styled.div`
  .form_add {
    /* margin-top: 80px;
    margin-bottom: 182px; */
  }
  .input_add-product,
  .input_add-gramm {
    font-weight: 700;
    font-size: 14px;
    line-height: 1.4;
    color: #9b9faa;
    border: none;
    border-bottom: 1px solid #e0e0e0;
    display: block;
    padding: 10px 5px;
    width: 100%;
    outline: none;
  }
  .input_add-product,
  .input_add-gramm {
    border-bottom: 1px solid #9b9faa;
  }
  .input_add-product {
    position: relative;
    text-overflow: ellipsis;
  }
  .button {
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
    width: 176px;
    height: 44px;
    font-family: Verdana-Bold;
    border-radius: 30px;
    border: none;
    font-size: 14px;
    color: #ffffff;
    background-color: #fc842d;
    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  }

  @media screen and (max-width: 767px) {
    .form_add {
      flex-direction: column;
    }

    .label_add {
      padding-bottom: 30px;
    }
    .input_add-product,
    .input_add-gramm {
      width: 289px;
      font-size: 14px;
    }
  }
  @media screen and (min-width: 768px) {
    .form_add {
      position: relative;
      /* outline: 1px solid tomato; */
      //         align-items: self-start;
      //      justify-content: space-between;
      //      width: 524px;
      //      padding-top: 0;
      //     //
      //      padding-right: 3px;
      //   //display: flex;
      //   height: 210px;
      //   overscroll-behavior: contain;
      //   overflow-y: auto;
      //   overflow-x: hidden;
      margin-bottom: 60px;

  @media screen and (min-width: 768px) {
    .form_add {
      width: 473px;
      margin-top: 30px;
      margin-bottom: 42px;
      display: flex;
      align-items: center;
      list-style: none;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.04em;
    }
    .button {
      outline: none;
      margin-top: 0;
      margin-right: 0;
      margin-left: 0;
      box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
      border-radius: 50%;
      padding: 18px;
      width: 50px;
      height: 50px;
      background-repeat: no-repeat;
      background-position: center;
    }
    .input_add-gramm {
      text-align: center;
      width: 105px;
      font-size: 16px;
      display: inline-block;
      margin-right: 48px;
    }
    .input_add-gramm::placeholder {
      text-align: end;
    }
    .input_add-product {
      /* width: 292px; */
      width: 243px;
      font-size: 16px;
      display: inline-block;
      margin-right: 30px;
    }
    .svg-add {
      width: 50px;
      height: 50px;
      width: 292px;
      font-size: 16px;
      display: inline-block;
      margin-right: 30px;
      padding: 0;
      padding-bottom: 10px;
      padding-top: 11px;
    }
    .svg-add {
      width: 50px;
      background-color: #fc842d;
      border: none;
      border-radius: 30px;
    }
  }
  @media screen and (min-width: 1200px) {
    .input_add-gramm {
      text-align: center;
      width: 105px;
      font-size: 16px;
      display: inline-block;
      margin-right: 75px;
    }
    .svg-add {
      width: 50px;
      height: 50px;
      background-color: #fc842d;
      border: none;
      border-radius: 30px;
    }
  }
`;
export { Wrapper };
