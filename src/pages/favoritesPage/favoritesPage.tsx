import { useEffect, useState } from 'react';
import Section from '../../components/section/section';
import { getFavoriteCats } from '../../helpers';
import styles from './styles.module.css';
import { Cat } from '../../api';

function FavoritePage() {
  const [favorites, setFavorites] = useState<Cat[]>([]);

  useEffect(() => {
    const favoriteCats = getFavoriteCats();
    setFavorites(favoriteCats);

    window.addEventListener('storage', () => {
      setFavorites(getFavoriteCats());
    });

    return () => {
      window.removeEventListener('storage', () => {
        setFavorites(getFavoriteCats());
      });
    };
  }, []);

  return (
    <>
      <section className={styles.wrapper}>
        <Section list={favorites} />
      </section>
      {!favorites.length && (
        <p className={styles.text}>Вы еще не добавили котиков!</p>
      )}
    </>
  );
}

export default FavoritePage;
