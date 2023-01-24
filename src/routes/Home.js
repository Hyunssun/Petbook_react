import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/Home.module.css';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { db } from '../firebase';

const q = query(collection(db, 'board'), orderBy('saveTime'));
function Home() {
  let imgRef = useRef();
  const [time, setTime] = useState('00시간 00분 00초');

  async function getTime() {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setTime(doc.data().time);
    });
  }

  useEffect(() => {
    getTime();
  }, []);

  function loadImg(event) {
    let imgFile = event.target.files[0];
    let imgURL = URL.createObjectURL(imgFile);
    imgRef.current.setAttribute('src', imgURL);
  }

  return (
    <div className={styles.container}>
      <div className={styles.home_img_uploadBtn}>
        <div className={styles.home_img}>
          <img ref={imgRef} onError={null} alt="" />
        </div>
        <form method="post" encType="multipart/form-data">
          <div className={styles.uploadBtn}>
            <label htmlFor="uploadImg">📷</label>
          </div>
          <input
            type="file"
            id="uploadImg"
            accept="image/*"
            onChange={loadImg}
          />
        </form>
      </div>

      <h2 className={styles.home_title}>최근 산책 시간</h2>
      <h3 className={styles.home_time}>{time}</h3>
    </div>
  );
}

export default Home;
