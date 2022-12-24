import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
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
  ButtonLogin,
  LinkRegister,
  ButtonWrap,
  Error,
  GoogleBtn,
  GoogleSvg,
  Social,
  SocialTitle,
  Blue,
  Red,
  Yellow,
  Green,
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
            type="email"
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

        <Label>
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
        </Label>

        <ButtonWrap display="flex" flexDirection="column" alignItems="center">
          <ButtonLogin type="submit">Авторизуватися</ButtonLogin>
          <LinkRegister to="/signup"> Зареєструватися </LinkRegister>
        </ButtonWrap>
        <Social>
          <SocialTitle>Авторизуватись з:</SocialTitle>
          <GoogleBtn href="http://localhost:3001/api/auth/google">
            <GoogleSvg />
            <div>
              <Blue>G</Blue>
              <Red>o</Red>
              <Yellow>o</Yellow>
              <Blue>g</Blue>
              <Green>l</Green>
              <Red>e</Red>
            </div>
          </GoogleBtn>
        </Social>
      </SigninForm>
    </Container>
  );
};
