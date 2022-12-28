import moment from 'moment';

export const initialDate = moment(new Date()).format('DD-MM-YYYY');

export const bloodTypes = [1, 2, 3, 4];

export const routes = {
  main: '/',
  calculate: '/calculate',
  diaryPath: '/diary/:date',
  diaryToday: `/diary/${initialDate}`,
  signup: '/signup',
  login: '/login',
};
