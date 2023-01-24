import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Stopwatch.module.css';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import * as dateFns from 'date-fns';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function Stopwatch() {
  const [count, setCount] = useState(0);
  const [run, setRun] = useState(false);

  useInterval(
    () => {
      setCount(count + 1);
    },
    run ? 1000 : null
  );

  let sec = count % 60 < 10 ? `0${count % 60}` : count % 60;
  let min =
    parseInt(count / 60) < 10
      ? `0${parseInt(count / 60)}`
      : parseInt(count / 60);
  let hour =
    parseInt(count / 3600) < 10
      ? `0${parseInt(count / 3600)}`
      : parseInt(count / 3600);

  const reset = () => {
    setRun(false);
    setCount(0);
  };
  const start = () => setRun(true);
  const stop = () => setRun(false);
  const save = async () => {
    try {
      const docRef = await addDoc(collection(db, 'board'), {
        saveDay: dateFns.format(new Date(), 'yyyy-MM-dd'),
        saveTime: new Date().toLocaleString('ko-kr'),
        time: `${hour}시간 ${min}분 ${sec}초`,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.time}>
        {hour}:{min}:{sec}
      </h1>
      <section>
        <ul className={styles.time_btn_ul}>
          <li>
            <button className={styles.time_btn_li} onClick={reset}>
              초기화
            </button>
          </li>
          <li>
            {!run ? (
              <button className={styles.time_btn_li} onClick={start}>
                시작
              </button>
            ) : (
              <button className={styles.time_btn_li} onClick={stop}>
                정지
              </button>
            )}
          </li>
          <li>
            <button className={styles.time_btn_li} onClick={save}>
              저장
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Stopwatch;
