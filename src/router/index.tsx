import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import RestaurantList from '../pages/RestaurantList';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },

  {
    path: 'restaurants',
    element: <RestaurantList />
  }
]);
