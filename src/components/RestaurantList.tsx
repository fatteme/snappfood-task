import { useEffect, useState } from 'react';

import { RestaurantAPI } from '../apis/restaurantAPI';
import RestaurantCard from './RestaurantCard';

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    RestaurantAPI.getAll().then((res) => {
      const restaurants = res.data.finalResult
        .filter((item: any) => item.type === 'VENDOR')
        .map((item: any) => item.data);
      setRestaurants(restaurants);
    });
  }, []);

  const restaurantItems = restaurants.map((restaurant: any) => (
    <section key={restaurant.id}>
      <RestaurantCard restaurant={restaurant} />
    </section>
  ));

  return <div>{restaurantItems}</div>;
}
