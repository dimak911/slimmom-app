import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchDiaryProducts } from 'redux/products/operations';
import { setSelectedDate } from 'redux/date/slice';
import moment from 'moment';
import axios from 'axios';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import 'moment/locale/uk';

import {
  DiaryDate,
  DiaryDateImg,
  CalendarWrap,
} from './DiaryDateCalendar.styled';
import calendarIcon from '../../images/icons/calendar.svg';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';

const formatDate = date => date.split('.').join('-');
const initialDate = moment(new Date()).format('DD.MM.YYYY');

export const DiaryDateCalendar = () => {
  let { date } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const [diaryDate, setDiaryDate] = useState(() => {
    if (date) return date.split('-').join('.');

    navigate(`/diary/${formatDate(date)}`);

    return initialDate;
  });

  useEffect(() => {
    if (!axios.defaults.headers.common.Authorization) return;

    const formattedDate = diaryDate.split('.').join('-');
    dispatch(setSelectedDate(diaryDate));
    isLoggedIn && dispatch(fetchDiaryProducts(formattedDate));
    !isRefreshing && dispatch(fetchDiaryProducts(formattedDate));
  }, [dispatch, diaryDate, navigate, isLoggedIn, isRefreshing]);

  const handleChangeDate = value => {
    const date = moment(value).format('DD.MM.YYYY');

    setDiaryDate(date);

    navigate(`/diary/${formatDate(date)}`);
  };

  const today = moment();
  const valid = function (diaryDate) {
    return diaryDate.isBefore(today);
  };

  const renderInput = (props, openCalendar) => {
    return (
      <CalendarWrap onClick={openCalendar}>
        <DiaryDate>{diaryDate}</DiaryDate>
        <DiaryDateImg src={calendarIcon} alt="calendar" />
      </CalendarWrap>
    );
  };

  return (
    <>
      <Datetime
        isValidDate={valid}
        renderInput={renderInput}
        value={diaryDate}
        dateFormat="DD.MM.YYYY"
        closeOnSelect={true}
        timeFormat={false}
        strictParsing={true}
        onChange={handleChangeDate}
      />
    </>
  );
};
