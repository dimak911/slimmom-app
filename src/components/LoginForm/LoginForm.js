import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
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
} from './LoginForm.styled';

export const LogInForm = () => {
  const dispatch = useDispatch();

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

  const onSubmitForm = credentials => {
    dispatch(login(credentials));
    reset();
  };

  return (
    <Container>
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
                  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                message: 'Неправильний формат електронної пошти',
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
              required: {
                value: true,
                message: 'Будь ласка, введіть свій пароль',
              },
            })}
          />
          {errors.password && <Error>{errors.password?.message}</Error>}
        </Label>

        <ButtonWrap display="flex" flexDirection="column" alignItems="center">
          <ButtonLogin type="submit">Авторизуватися</ButtonLogin>
          <LinkRegister to="/signup"> Зареєструватися </LinkRegister>
        </ButtonWrap>
      </SigninForm>
    </Container>
  );
};
