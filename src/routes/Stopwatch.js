import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Stopwatch.module.css';

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

  const reset = () => {
    setRun(false);
    setCount(0);
  };
  const start = () => setRun(true);
  const stop = () => setRun(false);
  const save = () => null;

  let sec = count % 60;
  let min = parseInt(count / 60);
  let hour = parseInt(count / 3600);

  return (
    <div className={styles.container}>
      <h1 className={styles.time}>
        {hour < 10 ? `0${hour}` : hour}:{min < 10 ? `0${min}` : min}:
        {sec < 10 ? `0${sec}` : sec}
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
