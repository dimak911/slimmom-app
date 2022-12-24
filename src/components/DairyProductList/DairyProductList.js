import { useDispatch, useSelector } from 'react-redux';
import { productsList } from 'redux/products/selectors';
import { DiaryProductListItem } from 'components/DiaryProducListItem/DiaryProducListItem';
import {
  DiaryProductListStyled,
  DiaryProductListItemStyled,
} from './DiaryProductList.styled';
import { useEffect } from 'react';
import { fetchDiaryProducts } from 'redux/products/operations';
import { useParams } from 'react-router-dom';

export const DairyProductList = () => {
  const { date } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(productsList);
  useEffect(() => {
    dispatch(fetchDiaryProducts(date));
  }, [dispatch, date]);
  console.log(products);
  return (
    <div>
      {products.length > 0 ? (
        <DiaryProductListStyled>
          {products.map(
            ({ id, productName, productWeight, productCalories }) => (
              <DiaryProductListItemStyled key={id}>
                <DiaryProductListItem
                  id={id}
                  productName={productName}
                  productWeight={productWeight}
                  productCalories={productCalories}
                />
              </DiaryProductListItemStyled>
            )
          )}
        </DiaryProductListStyled>
      ) : (
        <p>Не знайдено жодного продукту</p>
      )}
    </div>
  );
};
