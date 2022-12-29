import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { addDiaryListItem } from 'redux/products/operations';
import { searchProductList } from 'helpers/searchProduct';
import {
  AddProductForm,
  ProductForm,
  WeightForm,
  ProductItem,
  LabelWeigt,
  ButtonLogin,
  Span,
  Error,
  LabelProduct,
  ProductSelectList,
  ClearField,
  Cross,
} from './DiaryAddProductForm.styled';

export const DiaryAddProductForm = ({ img, isShowAddForm, openModal }) => {
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
      weigth: '',
    },
  });

  const productValue = watch('product');
  const weigthValue = watch('weigth');
  let { date } = useParams();

  const [products, setProducts] = useState([]);
  const [productInput, setProductInput] = useState('');
  const [callories, setCallories] = useState('');

  useEffect(() => {
    setValue('product', productInput);
  }, [setValue, productInput]);

  const onSubmitForm = () => {
    const calloriesCounted = ((callories * weigthValue) / 100).toString();
    const product = {
      productName: productValue,
      productWeight: weigthValue,
      productCalories: calloriesCounted,
      date: date,
    };
    dispatch(addDiaryListItem(product));
    isShowAddForm && openModal();
    setProductInput('');
    reset();
  };

  const handleChange = value => {
    if (value.length > 1) {
      searchProductList(value).then(response => {
        const fetchedProducts = response.data.map(obj => {
          return { title: obj.title.ua, calories: obj.calories };
        });
        setProducts(fetchedProducts);
      });
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
                      setCallories(product.calories);
                      setProducts([]);
                    }}
                    key={product.title}
                  >
                    {product.title}
                  </ProductItem>
                ))}
              </ProductSelectList>
            )}
            <ClearField
              onClick={() => {
                setValue('product', '');
                setProducts([]);
              }}
            >
              <Cross />
            </ClearField>
          </div>
          {errors?.product && <Error>{errors?.product?.message}</Error>}
        </LabelProduct>
        <LabelWeigt>
          <Span>Вага</Span>
          <WeightForm
            value={weigthValue}
            type="number"
            {...register('weigth', {
              required: 'Введіть вагу продукту',
              min: {
                value: 1,
                message: 'Введіть від 1г',
              },
              validate: value => Number.isInteger(parseFloat(value)) === true,
            })}
          />
          {errors?.weigth && <Error>{errors?.weigth?.message}</Error>}
        </LabelWeigt>
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
