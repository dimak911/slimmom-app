import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDiaryProducts } from 'redux/products/operations';
import { setSelectedDate } from 'redux/date/slice';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import 'moment/locale/uk';
import { Box } from 'components/Box';
import { DiaryDate } from './DiaryDateCalendar.styled';
import calendarIcon from '../../images/icons/calendar.svg';

const formatDate = date => date.split('.').join('-');
const initialDate = moment(new Date()).format('DD.MM.YYYY');

export const DiaryDateCalendar = () => {
  let { date } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [diaryDate, setDiaryDate] = useState(() => {
    if (date) return date.split('-').join('.');

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

  const today = moment();
  const valid = function (diaryDate) {
    return diaryDate.isBefore(today);
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
