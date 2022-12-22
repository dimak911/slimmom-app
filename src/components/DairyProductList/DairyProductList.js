import { useSelector } from 'react-redux';
import { productsList } from 'redux/products/selectors';
import { DiaryProductListItem } from 'components/DiaryProducListItem/DiaryProducListItem';
import {
  DiaryProductListStyled,
  DiaryProductListItemStyled,
} from './DiaryProductList.styled';


export const DairyProductList = () => {
  const products = useSelector(productsList);
  return (
    <div>
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
        <p>Не знайдено жодного продукту</p>
      )}
    </div>
  );
};
