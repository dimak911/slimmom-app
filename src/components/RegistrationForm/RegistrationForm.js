import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/operations';
import { Container } from 'components/Container.styled';
import {
  RegisterForm,
  Title,
  InputForm,
  Label,
  ButtonRegister,
  LinkLoggin,
  ButtonWrap,
  Error,
} from './RegistrationForm.styled';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const nameValue = watch('name');
  const emailValue = watch('email');
  const passwordValue = watch('password');

  const onSubmitForm = credentials => {
    dispatch(registration(credentials));
    reset();
  };

  return (
    <Container>
      <RegisterForm onSubmit={handleSubmit(onSubmitForm)}>
        <Title>Register</Title>
        <Label>
          Name *
          <InputForm
            value={nameValue}
            type="text"
            {...register('name', {
              required: {
                value: true,
                message: 'Please enter your name',
              },
            })}
          />
          {errors.name && <Error>{errors.name?.message}</Error>}
        </Label>

        <Label>
          Email *
          <InputForm
            value={emailValue}
            type="email"
            {...register('email', {
              required: {
                value: true,
                message: 'Please enter your email',
              },
              pattern: {
                value:
                  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                message: 'Wrong format of email',
              },
            })}
          />
          {errors.email && <Error>{errors.email?.message}</Error>}
        </Label>

        <Label>
          Password *
          <InputForm
            value={passwordValue}
            type="password"
            {...register('password', {
              minLength: {
                value: 8,
                message: 'Your password must contain at least 8 characters',
              },
              required: {
                value: true,
                message: 'Please enter your password',
              },
            })}
          />
          {errors.password && <Error>{errors.password?.message}</Error>}
        </Label>

        <ButtonWrap display="flex" flexDirection="column" alignItems="center">
          <ButtonRegister type="submit">Register</ButtonRegister>
          <LinkLoggin to="/login"> Log in </LinkLoggin>
        </ButtonWrap>
      </RegisterForm>
    </Container>
  );
};
