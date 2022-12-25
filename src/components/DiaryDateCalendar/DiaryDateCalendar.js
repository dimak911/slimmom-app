import moment from 'moment';
import Datetime from 'react-datetime';
import { useEffect, useState } from 'react';
import { Box } from 'components/Box';
import 'react-datetime/css/react-datetime.css';
import calendarIcon from '../../images/icons/calendar.svg';
import { DiaryDate } from './DiaryDateCalendar.styled';
import { useDispatch } from 'react-redux';
import { fetchDiaryProducts } from 'redux/products/operations';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

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
    dispatch(fetchDiaryProducts(formattedDate));
  }, [dispatch, diaryDate, navigate]);

  const handleChangeDate = value => {
    const date = moment(value).format('DD.MM.YYYY');
    setDiaryDate(date);
    navigate(`/diary/${formatDate(date)}`);
  };

  const renderInput = (props, openCalendar) => {
    return (
      <Box
        display="flex"
        alignItems="center"
        gridGap="20px"
        onClick={openCalendar}
      >
        <DiaryDate>{diaryDate}</DiaryDate>
        <img src={calendarIcon} width={20} height={20} alt="calendar" />
      </Box>
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
