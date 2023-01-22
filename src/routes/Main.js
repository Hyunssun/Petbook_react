import styles from '../styles/Main.module.css';

function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.main_img}>
        <img src="assets/img/pet.png" alt="logo" />
      </div>
      <h2 className={styles.main_subtitle}>반려동물 산책 기록</h2>
      <h1 className={styles.main_title}>PetBook</h1>
    </div>
  );
}

export default Main;
