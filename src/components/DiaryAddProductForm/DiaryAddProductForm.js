import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import { login } from 'redux/auth/operations';
import img from '../../images/icons/Vector.png';
import {
  SigninForm,
  InputForm,
  LabelWeigt,
  ButtonLogin,
  Span,
  Error,
  LabelProduct,
} from './DiaryAddProductForm.styled';

export const DiaryAddProductForm = () => {
  // const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
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

  const onSubmitForm = credentials => {
    console.log(productValue,weigthValue)
    // dispatch(login(credentials));
    // reset();
  };

  return (
    <div style={{marginBottom: 60}}>
      <SigninForm onSubmit={handleSubmit(onSubmitForm)}>
        <LabelProduct>
          Enter product name
          <InputForm
            value={ productValue}
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
          <Span>Grams</Span>
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
          <img src={ img } />
          </ButtonLogin>
      </SigninForm>
    </div>
  );
};
