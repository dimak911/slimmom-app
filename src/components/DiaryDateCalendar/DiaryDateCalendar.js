import moment from 'moment';
import Datetime from 'react-datetime';
import { useState } from 'react';
import { Box } from 'components/Box';
import 'react-datetime/css/react-datetime.css';
import { Container } from 'components/Container.styled';
import calendarIcon from '../../images/icons/calendar.svg';
import { DiaryDate } from './DiaryDateCalendar.styled';

export const DiaryDateCalendar = () => {
  const [date, setDate] = useState(() =>
    moment(new Date()).format('DD.MM.YYYY')
  );

  const handleChangeDate = value => {
    setDate(moment(value).format('DD.MM.YYYY'));
  };

  const renderInput = (props, openCalendar) => {
    return (
      <Box
        display="flex"
        alignItems="center"
        gridGap="20px"
        onClick={openCalendar}
      >
        <DiaryDate>{date}</DiaryDate>
        <img src={calendarIcon} width={20} height={20} alt="calendar" />
      </Box>
    );
  };

  return (
    <>
      <Container>
        <Datetime
          renderInput={renderInput}
          value={date}
          dateFormat="DD.MM.YYYY"
          closeOnSelect={true}
          timeFormat={false}
          strictParsing={true}
          onChange={handleChangeDate}
        />
      </Container>
    </>
  );
};
