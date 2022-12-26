import { useForm } from 'react-hook-form';
import { addDiaryListItem } from '../../redux/products/operations';
import { useDispatch } from 'react-redux';

import {
  SigninForm,
  InputForm,
  ProductItem,
  LabelWeigt,
  ButtonLogin,
  Span,
  Error,
  LabelProduct,
  Div,
} from './DiaryAddProductForm.styled';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// axios.defaults.baseURL = 'https://slim-mom-od0o.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:3001/api/';

export const DiaryAddProductForm = ({ img }) => {
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
    if (productValue.length > 1) {
      axios.get(`products?productTitle=${productValue}`).then(response => {
        const fetchedProducts = response.data.map(obj => {
          return { title: obj.title.ua, calories: obj.calories };
        });
        setProducts(fetchedProducts);
      });
    }
    setProducts([]);
  }, [productValue]);

  useEffect(() => {
    // if (!axios.defaults.headers.common.Authorization) return;

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
    reset();
  };

  return (
    <Div>
      <SigninForm onSubmit={handleSubmit(onSubmitForm)}>
        <LabelProduct>
          Введіть назву продукту
          <InputForm
            type="text"
            {...register('product', {
              required: 'Введіть назву продукту/страви',
              // pattern: {
              //   value: /^А-Яа-яґҐЁёІіЇїЄє'’ʼ\s-$/i,
              //   message: 'Введіть українською',
              // },
            })}
          />
          {errors?.product && <Error>{errors?.product?.message}</Error>}
        </LabelProduct>
        <LabelWeigt>
          <Span>Грами</Span>
          <InputForm
            value={weigthValue}
            type="number"
            {...register('weigth', {
              required: 'Введіть вагу продукту',
              min: {
                value: 1,
                message: 'Введіть від 1г',
              },
            })}
          />
          {errors?.weigth && <Error>{errors?.weigth?.message}</Error>}
        </LabelWeigt>
        <ButtonLogin type="submit" disabled={!isValid}>
          {img !== 'Add' ? (
            <img src={img} alt="button to add product" />
          ) : (
            'Додати'
          )}
        </ButtonLogin>
      </SigninForm>
      <ul>
        {products.map(product => {
          return (
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
          );
        })}
      </ul>
    </Div>
  );
};
