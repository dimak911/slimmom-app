import { useSelector } from 'react-redux';
import { productsList } from 'redux/products/selectors';
import { DiaryProductListItem } from 'components/DiaryProducListItem/DiaryProducListItem';
import {
  DiaryProductListStyled,
  SearchNothing,
} from './DiaryProductList.styled';

export const DairyProductList = () => {
  const products = useSelector(productsList);

  return (
    <>
      {products.length > 0 ? (
        <DiaryProductListStyled>
          {products.map(
            ({ _id, productName, productWeight, productCalories }) => (
              <DiaryProductListItem
                key={_id}
                _id={_id}
                productName={productName}
                productWeight={productWeight}
                productCalories={productCalories}
              />
            )
          )}
        </DiaryProductListStyled>
      ) : (
        <SearchNothing>Не знайдено жодного продукту</SearchNothing>
      )}
    </>
  );
};
