import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { login } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/loader/selectors';
import { Loader } from 'components/Loader/Loader';

import { Container } from 'components/Container.styled';
import {
  SigninForm,
  Title,
  InputForm,
  Label,
  LastLabel,
  ButtonLogin,
  LinkRegister,
  ButtonWrap,
  Error,
} from './LoginForm.styled';

export const LogInForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const emailValue = watch('email');
  const passwordValue = watch('password');

  const onSubmitForm = async credentials => {
    const { email, password } = credentials;
    const result = await dispatch(
      login({
        email: email.toLowerCase(),
        password,
      })
    );

    toast.error(result.payload.message);
    reset();
  };

  return (
    <Container>
      {isLoading ? <Loader /> : null}
      <SigninForm onSubmit={handleSubmit(onSubmitForm)}>
        <Title>Авторизуватися</Title>
        <Label>
          Електронна пошта *
          <InputForm
            value={emailValue}
            type="text"
            {...register('email', {
              required: {
                value: true,
                message: 'Будь ласка, введіть свою електронну адресу',
              },
              pattern: {
                value:
                  /^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*\.[A-Za-z]{2,6}$/,
                message: 'Неправильний формат електронної пошти',
              },
              minLength: {
                value: 3,
                message: 'Електронна пошта має бути не менше 3 символів',
              },
              maxLength: {
                value: 254,
                message: 'Електронна пошта має бути не більше 254 символів',
              },
            })}
          />
          {errors.email && <Error>{errors.email?.message}</Error>}
        </Label>

        <LastLabel>
          Пароль *
          <InputForm
            value={passwordValue}
            type="password"
            {...register('password', {
              minLength: {
                value: 8,
                message: 'Ваш пароль має містити не менше 8 символів',
              },
              maxLength: {
                value: 100,
                message: 'Ваш пароль має містити не більше 100 символів',
              },
              required: {
                value: true,
                message: 'Будь ласка, введіть свій пароль',
              },
              pattern: {
                value: /(?=.*[A-Za-z])(?=.*[0-9])/,
                message: 'Пароль має включати букви та цифри',
              },
            })}
          />
          {errors.password && <Error>{errors.password?.message}</Error>}
        </LastLabel>

        <ButtonWrap display="flex" flexDirection="column" alignItems="center">
          <ButtonLogin type="submit">Авторизуватися</ButtonLogin>
          <LinkRegister to="/signup"> Зареєструватися </LinkRegister>
        </ButtonWrap>
      </SigninForm>
    </Container>
  );
};
