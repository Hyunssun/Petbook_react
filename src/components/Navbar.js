import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__menu}>
        <li>
          <Link className={styles.link} to={`/home`}>
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={`/calendar`}>
            Calendar
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={`/stopwatch`}>
            Stopwatch
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
