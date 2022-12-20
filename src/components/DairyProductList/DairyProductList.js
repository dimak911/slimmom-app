import { useSelector } from 'react-redux';
import { productsList } from 'redux/products/selectors';
import { DiaryProductListItem } from 'components/DiaryProducListItem/DiaryProducListItem';
import {
  DiaryProductListStyled,
  DiaryProductListItemStyled,
} from './DiaryProductList.styled';
import { DiaryAddProductForm } from '../DiaryAddProductForm/DiaryAddProductForm';
export const DairyProductList = () => {
  const products = useSelector(productsList);
  return (
    <div>
      <DiaryAddProductForm/>
      {products.length > 0 ? (
        <DiaryProductListStyled>
          {products.map(({ id, prodName, prodWeight, prodKcal }) => (
            <DiaryProductListItemStyled key={id}>
              <DiaryProductListItem
                id={id}
                prodName={prodName}
                prodWeight={prodWeight}
                prodKcal={prodKcal}
              />
            </DiaryProductListItemStyled>
          ))}
        </DiaryProductListStyled>
      ) : (
        <p>Not found any product</p>
      )}
    </div>
  );
};
