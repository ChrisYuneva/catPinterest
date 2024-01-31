import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { checkFavoriteCat, deleteFavoriteCat, setFavoriteCats } from '../../helpers';
import { Cat } from '../../api';

interface CardProps {
    item: Cat,
    imgSrc: string,
    id: string,
}

function Card({ item, imgSrc, id }: CardProps) {
    const [hover, setHover] = useState(false);
    const [favorite, setFavorite] = useState(false);

    function onMouseEnter() {
        setHover(true);
    }

    function onMouseLeave() {
        setHover(false);
    }

    function addToFavorites(item: Cat) {
        setFavoriteCats(item);
        setFavorite(true);
        window.dispatchEvent(new Event('storage'));
    }

    function deleteFavorite(item: Cat) {
        deleteFavoriteCat(item.id);
        setFavorite(false);
        window.dispatchEvent(new Event('storage'));
    }

    useEffect(() => {
        setFavorite(checkFavoriteCat(item.id));
    }, [])

    return (
        <div className={styles.card} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <img 
                src={imgSrc} 
                alt={`Cat ${id}`}
                className={styles.img}
            />
            {
                hover && (
                    <div
                        className={favorite ? styles.setFavorites : styles.favorites }
                        onClick={!favorite ? () => addToFavorites(item) : () => deleteFavorite(item)}
                    />
                )
            }
        </div>
    )
}

export default Card;