import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import '../styles/react-datepicker.css';
import styles from '../styles/Calendar.module.css';
import { addDays, subDays } from 'date-fns';

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={styles.container}>
      <DatePicker
        locale={ko}
        inline
        onChange={(date) => setStartDate(date)}
        highlightDates={[subDays(new Date(), 6), addDays(new Date(), 7)]}
        placeholderText="This highlights a week ago and a week from today"
      />
    </div>
  );
}

export default Calendar;
