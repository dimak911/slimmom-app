import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { addDiaryListItem } from 'redux/products/operations';
import { searchProductList } from 'helpers/searchProduct';
import useDebounce from 'hooks/useDebounce';
import {
  AddProductForm,
  ProductForm,
  WeightForm,
  ProductItem,
  LabelWeight,
  ButtonLogin,
  Span,
  Error,
  LabelProduct,
  ProductSelectList,
  ClearField,
} from './DiaryAddProductForm.styled';
import crossIcon from '../../images/icons/close-cross.svg';

export const DiaryAddProductForm = ({ img, isShowAddForm, openModal }) => {
  const [valueToDebounce, setValueToDebounce] = useState('');
  const debouncedValue = useDebounce(valueToDebounce, 1000);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setValue,
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      product: '',
      weight: '',
    },
  });

  const productValue = watch('product');
  const weightValue = watch('weight');
  let { date } = useParams();

  const [products, setProducts] = useState([]);
  const [productInput, setProductInput] = useState('');
  const [calories, setCalories] = useState('');

  useEffect(() => {
    setValue('product', productInput);
  }, [setValue, productInput]);

  useEffect(() => {
    if (!debouncedValue) return;

    searchProductList(debouncedValue).then(response => {
      const fetchedProducts = response.data.map(obj => {
        return { title: obj.title.ua, calories: obj.calories };
      });
      setProducts(fetchedProducts);
    });
  }, [debouncedValue]);

  const onSubmitForm = () => {
    const caloriesCounted = ((calories * weightValue) / 100).toString();
    const product = {
      productName: productValue,
      productWeight: weightValue,
      productCalories: caloriesCounted,
      date: date,
    };
    dispatch(addDiaryListItem(product));
    isShowAddForm && openModal();
    setProductInput('');
    reset();
  };

  const handleChange = value => {
    if (value.length > 1) {
      setValueToDebounce(value);
    }
    setProducts([]);
  };

  return (
    <>
      <AddProductForm onSubmit={handleSubmit(onSubmitForm)}>
        <LabelProduct>
          Введіть назву продукту
          <div style={{ position: 'relative' }}>
            <ProductForm
              type="text"
              autoComplete="off"
              {...register('product', {
                required: 'Введіть назву продукту/страви',
                onChange: e => handleChange(e.target.value),
              })}
            />
            {products.length > 0 && (
              <ProductSelectList>
                {products.map(product => (
                  <ProductItem
                    onClick={event => {
                      setProductInput(event.target.innerText);
                      setCalories(product.calories);
                      setProducts([]);
                    }}
                    key={product.title}
                  >
                    {product.title}
                  </ProductItem>
                ))}
              </ProductSelectList>
            )}
            {productValue && (
              <ClearField
                onClick={() => {
                  setValue('product', '');
                  setProducts([]);
                }}
              >
                <img src={crossIcon} alt="cross" />
              </ClearField>
            )}
          </div>
          {errors?.product && <Error>{errors?.product?.message}</Error>}
        </LabelProduct>
        <LabelWeight>
          <Span>Вага</Span>
          <WeightForm
            value={weightValue}
            type="number"
            {...register('weight', {
              required: 'Введіть вагу продукту',
              min: {
                value: 1,
                message: 'Введіть від 1г',
              },
              validate: value => Number.isInteger(parseFloat(value)) === true,
            })}
          />
          {errors?.weight && <Error>{errors?.weight?.message}</Error>}
        </LabelWeight>
        <ButtonLogin type="submit" disabled={!isValid || !productInput}>
          {img !== 'Add' ? (
            <img src={img} alt="button to add product" />
          ) : (
            'Додати'
          )}
        </ButtonLogin>
      </AddProductForm>
    </>
  );
};
