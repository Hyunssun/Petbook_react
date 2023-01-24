import styles from '../styles/Main.module.css';
import { useState } from 'react';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function Main() {
  const [userData, setUserData] = useState(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        setUserData(data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className={styles.container}>
      <div className={styles.main_img}>
        <img src={`${process.env.PUBLIC_URL}/assets/img/pet.png`} alt="logo" />
      </div>
      <h2 className={styles.main_subtitle}>반려동물 산책 기록</h2>
      <h1 className={styles.main_title}>PetBook</h1>
      <div>
        <button className={styles.btn_google} onClick={handleGoogleLogin}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/btn_google.png`}
            alt="logo"
          />
        </button>
      </div>
      {userData ? (document.location.href = '/home') : null}
    </div>
  );
}

export default Main;
