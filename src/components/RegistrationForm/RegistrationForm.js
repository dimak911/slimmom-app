import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/loader/selectors';
import { selectCalculateValue } from 'redux/calculate/selectors';
import { Loader } from 'components/Loader/Loader';
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
import { toast } from 'react-toastify';
import { selectUserData } from 'redux/auth/selectors';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const userData = useSelector(selectUserData);

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

  const onSubmitForm = async registrationData => {
    const { name, email, password } = registrationData;

    if (userData?.calorie) {
      const { calorie, notRecommendedProduct, data } = userData;

      const dataForDispatch = {
        name,
        email: email.toLowerCase(),
        password,
        calorie,
        data,
        notRecommendedProduct,
      };

      const result = await dispatch(registration(dataForDispatch));

      toast.error(result.payload.message);
    } else {
      const result = await dispatch(
        registration({
          name,
          email: email.toLowerCase(),
          password,
        })
      );

      toast.error(result.payload.message);
    }
    reset();
  };

  return (
    <Container>
      {isLoading ? <Loader /> : null}
      <RegisterForm onSubmit={handleSubmit(onSubmitForm)}>
        <Title>Зареєструватися</Title>
        <Label>
          Ім'я *
          <InputForm
            value={nameValue}
            type="text"
            {...register('name', {
              required: {
                value: true,
                message: `Будь ласка, введіть своє ім'я`,
              },
              minLength: {
                value: 3,
                message: `Ім'я має бути не менше 3 символів`,
              },
              maxLength: {
                value: 254,
                message: `Ім'я має бути не більше 254 символів`,
              },
            })}
          />
          {errors.name && <Error>{errors.name?.message}</Error>}
        </Label>

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
          <ButtonRegister type="submit">Зареєструватися</ButtonRegister>
          <LinkLoggin to="/login"> Авторизуватися </LinkLoggin>
        </ButtonWrap>
      </RegisterForm>
    </Container>
  );
};
