import moment from 'moment';

const displayMonthNameWithDate = date => {
  return moment(date).format('ll');
};

export {displayMonthNameWithDate};
