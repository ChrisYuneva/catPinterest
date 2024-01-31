import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import MainPage from './pages/mainPage/mainPage';
import FavoritePage from './pages/favoritesPage/favoritesPage';
import Layout from './pages/layout/layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/favorites',
        element: <FavoritePage />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
