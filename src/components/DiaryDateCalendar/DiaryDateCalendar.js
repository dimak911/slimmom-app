import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import Datetime from 'react-datetime';
import axios from 'axios';
import { fetchDiaryProducts } from 'redux/products/operations';
import 'moment/locale/uk';
import { setSelectedDate } from 'redux/date/slice';
import calendarIcon from '../../images/icons/calendar.svg';

import 'react-datetime/css/react-datetime.css';
import {
  DiaryDate,
  DiaryDateImg,
  CalendarWrap,
} from './DiaryDateCalendar.styled';

const formatDate = date => date.split('.').join('-');

export const DiaryDateCalendar = () => {
  let { date } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [diaryDate, setDiaryDate] = useState(() => {
    if (date) return date.split('-').join('.');

    const initialDate = moment(new Date()).format('DD.MM.YYYY');
    navigate(`/diary/${formatDate(date)}`);

    return initialDate;
  });

  useEffect(() => {
    if (!axios.defaults.headers.common.Authorization) return;

    const formattedDate = diaryDate.split('.').join('-');
    dispatch(setSelectedDate(diaryDate));
    dispatch(fetchDiaryProducts(formattedDate));
  }, [dispatch, diaryDate, navigate]);

  const handleChangeDate = value => {
    const date = moment(value).format('DD.MM.YYYY');
    setDiaryDate(date);
    navigate(`/diary/${formatDate(date)}`);
  };

  const renderInput = (props, openCalendar) => {
    return (
      <CalendarWrap>
        <DiaryDate>{diaryDate}</DiaryDate>
        <DiaryDateImg
          src={calendarIcon}
          alt="calendar"
          onClick={openCalendar}
        />
      </CalendarWrap>
    );
  };

  return (
    <>
      <Datetime
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
