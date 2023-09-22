import { createBrowserRouter, redirect } from 'react-router-dom';

import App from '../App';
import RestaurantList from '../pages/RestaurantList';

export const router = createBrowserRouter([
  {
    path: '',

    element: <App />,

    children: [
      { path: '/', loader: () => redirect('/restaurants') },

      { path: '/restaurants', element: <RestaurantList /> }
    ]
  }
]);
