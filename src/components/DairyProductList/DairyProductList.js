import { useDispatch, useSelector } from 'react-redux';
import { productsList } from 'redux/products/selectors';
import { DiaryProductListItem } from 'components/DiaryProducListItem/DiaryProducListItem';
import { DiaryProductListStyled } from './DiaryProductList.styled';
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
        <p>Не знайдено жодного продукту</p>
      )}
    </>
  );
};
