import { Cat } from "../api";

export function getFavoriteCats(): Cat[] {
    const favoriteCats = localStorage.getItem('cats');

    return favoriteCats ? JSON.parse(favoriteCats) : [];
}

export function setFavoriteCats(newFavoriteCat: Cat) {
    const prevFavoriteCats = getFavoriteCats();

    localStorage.setItem('cats', JSON.stringify([...prevFavoriteCats, newFavoriteCat]));
}

export function checkFavoriteCat(id: string) {
    const prevFavoriteCats = getFavoriteCats();

    return !!prevFavoriteCats.find((item) => item.id === id);
}

export function deleteFavoriteCat(id: string) {
    const prevFavoriteCats = getFavoriteCats();

    localStorage.setItem('cats', JSON.stringify(prevFavoriteCats.filter((item) => item.id !== id)));
}