import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import '../styles/react-datepicker.css';
import styles from '../styles/Calendar.module.css';

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={styles.container}>
      <DatePicker locale={ko} inline onChange={(date) => setStartDate(date)} />
    </div>
  );
}

export default Calendar;
