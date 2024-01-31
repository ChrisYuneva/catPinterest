import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <NavLink
        className={({ isActive }) =>
          `${styles.link} ${isActive ? `${styles.active}` : `${styles.default}`}`
        }
        to={'/'}
      >
        Все котики
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${styles.link} ${isActive ? `${styles.active}` : `${styles.default}`}`
        }
        to={'/favorites'}
      >
        Любимые котики
      </NavLink>
    </header>
  );
}

export default Header;
