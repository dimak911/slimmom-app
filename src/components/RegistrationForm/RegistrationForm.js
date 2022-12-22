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
                    <ButtonRegister type="submit">Зареєструватися</ButtonRegister>
                    <LinkLoggin to="/login"> Авторизуватися </LinkLoggin>
                </ButtonWrap>
            </RegisterForm>
        </Container>
    );
};
