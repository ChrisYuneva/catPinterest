import Header from '../../components/header/header';
import { Outlet } from 'react-router-dom';
import styles from './styles.module.css';

function Layout() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
