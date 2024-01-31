import { useEffect, useState } from 'react';
import Section from '../../components/section/section';
import styles from './styles.module.css';
import { Cat, getCats } from '../../api';

function MainPage() {
  const [cats, setCats] = useState<Cat[]>([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function getData() {
    setIsLoading(true);

    return getCats(page)
      .then((data) => {
        setPage((prev) => prev + 1);
        setCats((prev) => [...prev, ...data]);
      })
      .finally(() => setIsLoading(false));
  }

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 ||
      isLoading
    ) {
      return;
    }

    getData();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  useEffect(() => {
    getData();

    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
      getData();
    }
  }, []);

  return (
    <>
      <section className={styles.wrapper}>
        <Section list={cats} />
      </section>
      {isLoading && (
        <p className={styles.loading}>... загружаем еще котиков ...</p>
      )}
    </>
  );
}

export default MainPage;
