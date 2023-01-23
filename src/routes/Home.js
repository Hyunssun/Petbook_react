import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/Home.module.css';

function Home() {
  let imgRef = useRef();

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
            <label htmlFor="uploadImg">➕</label>
          </div>
          <input
            type="file"
            id="uploadImg"
            accept="image/*"
            onChange={loadImg}
          />
        </form>
      </div>

      <h2 className={styles.home_subtitle}>최근 산책 시간</h2>
      <h3 className={styles.home_time}>00시간 00분 00초</h3>
    </div>
  );
}

export default Home;
