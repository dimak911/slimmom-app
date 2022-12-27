import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
// import { calculation } from 'redux/calculate/operations';
// import { postSideBarInfo } from 'redux/products/operations';
// import { selectCalculateValue } from 'redux/calculate/selectors';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { addData } from 'redux/auth/operations';

import {
  Form,
  Title,
  InputForm,
  Label,
  ButtonSubmit,
  ButtonWrap,
  RadiobuttonLabel,
  BloodTypeValue,
  RadiobuttonWrapper,
  Column,
  ColumnWrap,
  Error,
} from './CalculateCaloriesForm.styled';
import { getCategoriesByBloodType } from 'helpers/getCategoriesByBloodType';
// import { selectIsLoading } from 'redux/loader/selectors';
import { initialDate } from 'App';
import { selectUserData } from 'redux/auth/selectors';
import { addUserFormdata } from 'redux/auth/slice';

export const CalculateCaloriesForm = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  const { data } = useSelector(selectUserData);
  // const {
  //   data: { height, age, currentWeight, desiredWeight, bloodType },
  // } = useSelector(selectCalculateValue);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    defaultValues:
      isLoggedIn && data?.height
        ? {
            height: data.height,
            age: data.age,
            currentWeight: data.currentWeight,
            desiredWeight: data.desiredWeight,
            bloodType: data.bloodType,
          }
        : {
            height: '',
            age: '',
            currentWeight: '',
            desiredWeight: '',
            bloodType: '',
          },
  });

  const heightValue = watch('height');
  const ageValue = watch('age');
  const currentWeightValue = watch('currentWeight');
  const desiredWeightValue = watch('desiredWeight');
  const bloodTypeValue = watch('bloodType');

  const onSubmitForm = formData => {
    const { height, age, currentWeight, desiredWeight, bloodType } = formData;
    const countedCalories = String(
      10 * currentWeight +
        6.25 * height -
        5 * age -
        161 -
        10 * (currentWeight - desiredWeight)
    );
    const notAllowedFoodCategories = getCategoriesByBloodType(bloodType);
    const dataForDispatch = {
      calorie: countedCalories,
      notRecommendedProduct: notAllowedFoodCategories,
      data: formData,
    };
    dispatch(addData(dataForDispatch));

    // dispatch(
    //   postSideBarInfo({
    //     calorie: countedCalories,
    //     notRecommendedProduct: notAllowedFoodCategories,
    //   })
    // );
    navigate(`/diary/${initialDate}`);
  };

  const location = useLocation();

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmitForm)} location={location.pathname}>
        <Title>Розрахуйте свою денну норму калорій прямо зараз</Title>
        <ColumnWrap>
          <Column>
            <Label>
              Зріст *
              <InputForm
                value={heightValue}
                type="number"
                {...register('height', {
                  required: 'Будь ласка, введіть свій зріст',
                  min: {
                    value: 100,
                    message: 'Мінімальний зріст 100 см',
                  },
                  max: {
                    value: 250,
                    message: 'Максимальний зріст 250 см',
                  },
                })}
              />
              {errors?.height && <Error>{errors?.height?.message}</Error>}
            </Label>
            <Label>
              Вік *
              <InputForm
                value={ageValue}
                type="number"
                {...register('age', {
                  required: 'Будь ласка, введіть свій вік',
                  min: {
                    value: 18,
                    message: 'Мінімальний вік 18 років',
                  },
                  max: {
                    value: 100,
                    message: 'Максимальний вік 100 років',
                  },
                })}
              />
              {errors?.age && <Error>{errors?.age?.message}</Error>}
            </Label>
            <Label>
              Нинішня вага *
              <InputForm
                value={currentWeightValue}
                type="number"
                {...register('currentWeight', {
                  required: 'Введіть свою поточну вагу',
                  min: {
                    value: 20,
                    message: 'Мінімальниа вага 20 кг',
                  },
                  max: {
                    value: 500,
                    message: 'Максимальниа вага 500 кг',
                  },
                })}
              />
              {errors?.currentWeight && (
                <Error>{errors?.currentWeight?.message}</Error>
              )}
            </Label>
          </Column>

          <Column>
            <Label>
              Бажана вага *
              <InputForm
                value={desiredWeightValue}
                type="number"
                {...register('desiredWeight', {
                  required: 'Будь ласка, введіть бажану вагу',
                  min: {
                    value: 20,
                    message: 'Мінімальниа вага 20 кг',
                  },
                  max: {
                    value: 500,
                    message: 'Максимальниа вага 500 кг',
                  },
                })}
              />
              {errors?.desiredWeight && (
                <Error>{errors?.desiredWeight?.message}</Error>
              )}
            </Label>
            <Label>Група крові * </Label>
            <BloodTypeValue>{bloodTypeValue}</BloodTypeValue>
            <RadiobuttonWrapper>
              <RadiobuttonLabel>
                <input {...register('bloodType')} type="radio" value="1" />1
              </RadiobuttonLabel>

              <RadiobuttonLabel>
                <input
                  {...register('bloodType', {
                    required: 'Оберіть свою групу крові',
                  })}
                  type="radio"
                  value="2"
                />
                2
              </RadiobuttonLabel>

              <RadiobuttonLabel>
                <input
                  {...register('bloodType', {
                    required: 'Оберіть свою групу крові',
                  })}
                  type="radio"
                  value="3"
                />
                3
              </RadiobuttonLabel>

              <RadiobuttonLabel>
                <input
                  {...register('bloodType', {
                    required: 'Оберіть свою групу крові',
                  })}
                  type="radio"
                  value="4"
                />
                4
              </RadiobuttonLabel>
            </RadiobuttonWrapper>
            {errors?.bloodType && <Error>{errors?.bloodType?.message}</Error>}
          </Column>
        </ColumnWrap>

        <ButtonWrap display="flex" flexDirection="column" alignItems="center">
          <ButtonSubmit type="submit" disabled={!isValid}>
            Почніть худнути
          </ButtonSubmit>
        </ButtonWrap>
      </Form>
    </div>
  );
};
