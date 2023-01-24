import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import '../styles/react-datepicker.css';
import styles from '../styles/Calendar.module.css';
import { addDays, subDays } from 'date-fns';
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { db } from '../firebase';

const q = query(collection(db, 'board'), orderBy('saveTime'));
function Calendar() {
  const [saveDay, setSaveDay] = useState([]);

  function getDay() {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const days = [];
      querySnapshot.forEach((doc) => {
        days.push(doc.data().saveDay);
      });
      setSaveDay(days);
    });
  }
  useEffect(() => {
    getDay();
  }, []);
  console.log(saveDay);

  const day = Math.floor(
    (new Date(saveDay) - new Date()) / (1000 * 60 * 60 * 24)
  );
  const highlightWithRanges = [
    {
      'react-datepicker__day--highlighted-custom-1': [
        //addDays(new Date(), day + 1),
      ],
    },
  ];
  return (
    <div className={styles.container}>
      <DatePicker locale={ko} inline highlightDates={highlightWithRanges} />
    </div>
  );
}

export default Calendar;
