import React from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { DiaryProductListItem } from './components/DiaryProducListItem/DiaryProducListItem';
import { useSelector } from 'react-redux';

export const App = () => {
  const productsList = useSelector(state => state.productList.productsDiary);
  // console.log(productsList);
  return (
    <>
      <GlobalStyle />
      <ul>
        {/* {productsList.map(item => console.log(item))} */}
        {productsList.map(item => (
          <DiaryProductListItem item={item} key={item.id} />
        ))}
      </ul>
    </>
  );
};
