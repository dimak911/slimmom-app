import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { calculateValue } from 'redux/calculate/slice';
import { showLoading } from 'redux/loader/operations';
import { selectIsLoading } from 'redux/loader/selectors';
import { Loader } from 'components/Loader/Loader';
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
} from './DailyCaloriesForm.styled';

export const DailyCaloriesForm = ({ openModal }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
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
    dispatch(showLoading(formData));
    const { height, age, currentWeight, desiredWeight } = formData;
    const countedCalories = String(
      10 * currentWeight +
        6.25 * height -
        5 * age -
        161 -
        10 * (currentWeight - desiredWeight)
    );
    const dataForDispatch = { countedCalories, formData };
    dispatch(calculateValue(dataForDispatch));
    openModal(countedCalories);
    reset();
  };

  return (
    <div>
      {isLoading ? <Loader /> : null}
      <Form onSubmit={handleSubmit(onSubmitForm)}>
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
                  minLength: {
                    value: 2,
                    message: 'Введіть принаймні двозначне число',
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
                  minLength: {
                    value: 2,
                    message: 'Введіть принаймні двозначне число',
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
                  minLength: {
                    value: 2,
                    message: 'Введіть принаймні двозначне число',
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
                  minLength: {
                    value: 2,
                    message: 'Введіть принаймні двозначне число',
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
                <input
                  {...register('bloodType', {
                    required: 'Виберіть свою групу крові',
                  })}
                  type="radio"
                  value="1"
                />
                1
              </RadiobuttonLabel>

              <RadiobuttonLabel>
                <input {...register('bloodType')} type="radio" value="2" />2
              </RadiobuttonLabel>

              <RadiobuttonLabel>
                <input {...register('bloodType')} type="radio" value="3" />3
              </RadiobuttonLabel>

              <RadiobuttonLabel>
                <input {...register('bloodType')} type="radio" value="4" />4
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
