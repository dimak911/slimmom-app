import { useForm } from 'react-hook-form';

import {
  SigninForm,
  InputForm,
  LabelWeigt,
  ButtonLogin,
  Span,
  Error,
  LabelProduct,
  Div,
} from './DiaryAddProductForm.styled';

import axios from 'axios';
// axios.defaults.baseURL = 'https://slim-mom-od0o.onrender.com/api';
axios.defaults.baseURL = 'http://localhost:3001/api/';

export const DiaryAddProductForm = ({ img, openModal }) => {
  // const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      product: '',
      weigth: '',
    },
  });

  const productValue = watch('product');
  const weigthValue = watch('weigth');

  const onChangeHandler = async query => {
    const response = await axios.get('/products');
    console.log(response);
  };

  const onSubmitForm = credentials => {
    console.log(productValue, weigthValue);
    openModal();
    // // dispatch(login(credentials));
    // reset();
  };

  return (
    <Div>
      <SigninForm onSubmit={handleSubmit(onSubmitForm)}>
        <LabelProduct>
          Введіть назву продукту
          <InputForm
            onChange={onChangeHandler}
            value={productValue}
            type="text"
            {...register('product', {
              required: {
                value: true,
              },
            })}
          />
          {errors.product && <Error>{errors.product?.message}</Error>}
        </LabelProduct>

        <LabelWeigt>
          <Span>Грами</Span>
          <InputForm
            value={weigthValue}
            type="number"
            {...register('weigth', {
              required: {
                value: true,
              },
            })}
          />
          {errors.weigth && <Error>{errors.weigth?.message}</Error>}
        </LabelWeigt>

        <ButtonLogin type="submit">
          {img !== 'Add' ? (
            <img src={img} alt="button to add product" />
          ) : (
            'Add'
          )}
        </ButtonLogin>
      </SigninForm>
    </Div>
  );
};
