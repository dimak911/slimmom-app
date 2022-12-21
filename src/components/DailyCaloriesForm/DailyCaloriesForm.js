import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { calculateValue } from 'redux/calculate/slice';

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

  const onSubmitForm = data => {
    dispatch(calculateValue(data));
    openModal(data);
    reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <Title>Calculate your daily calorie intake right now</Title>
        <ColumnWrap>
          <Column>
            <Label>
              Height *
              <InputForm
                value={heightValue}
                type="number"
                {...register('height', {
                  required: 'Please enter your height',
                  minLength: {
                    value: 2,
                    message: 'Please enter at least two digit number',
                  },
                })}
              />
              {errors?.height && <Error>{errors?.height?.message}</Error>}
            </Label>
            <Label>
              Age *
              <InputForm
                value={ageValue}
                type="number"
                {...register('age', {
                  required: 'Please enter your age',
                  minLength: {
                    value: 2,
                    message: 'Please enter at least two digit number',
                  },
                })}
              />
              {errors?.age && <Error>{errors?.age?.message}</Error>}
            </Label>
            <Label>
              Current weight *
              <InputForm
                value={currentWeightValue}
                type="number"
                {...register('currentWeight', {
                  required: 'Please enter your current weight',
                  minLength: {
                    value: 2,
                    message: 'Please enter at least two digit number',
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
              Desired weight *
              <InputForm
                value={desiredWeightValue}
                type="number"
                {...register('desiredWeight', {
                  required: 'Please enter your weight',
                  minLength: {
                    value: 2,
                    message: 'Please enter at least two digit number',
                  },
                })}
              />
              {errors?.desiredWeight && (
                <Error>{errors?.desiredWeight?.message}</Error>
              )}
            </Label>
            <Label>Blood type * </Label>
            <BloodTypeValue>{bloodTypeValue}</BloodTypeValue>
            <RadiobuttonWrapper>
              <RadiobuttonLabel>
                <input
                  {...register('bloodType', {
                    required: 'Please choose your blood type',
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
            Start losing weight
          </ButtonSubmit>
        </ButtonWrap>
      </Form>
    </div>
  );
};
