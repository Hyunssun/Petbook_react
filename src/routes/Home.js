import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/Home.module.css';
import { collection, getDocs, limit, orderBy, where } from 'firebase/firestore';
import { db } from '../firebase';

function Home() {
  let imgRef = useRef();
  const [time, setTime] = useState('00시간 00분 00초');

  async function onClick() {
    const querySnapshot = await getDocs(collection(db, 'board'));
    querySnapshot.forEach((doc) => {
      setTime(doc.data().time);
    });
  }

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

      <button className={styles.home_timeBtn} onClick={onClick}>
        최근 산책 시간 보기
      </button>
      <h3 className={styles.home_time}>{time}</h3>
    </div>
  );
}

export default Home;
