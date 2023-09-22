import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  getRestaurants,
  nextPage,
  selectPage,
  selectPageSize,
  selectRestaurants
} from '../store/restaurants';

import RestaurantCard from '../components/RestaurantCard';
import InfiniteScroll from '../components/InfiniteScroll';

export default function RestaurantList() {
  const dispatch = useDispatch();

  const restaurants = useSelector(selectRestaurants);
  const page = useSelector(selectPage);
  const pageSize = useSelector(selectPageSize);

  const [restaurantItems, setRestaurantItems] = useState<JSX.Element[]>([]);

  useEffect(() => {
    dispatch(getRestaurants({ page, pageSize }) as any);
  }, [page]);

  useEffect(() => {
    const items = restaurants.map((restaurant) => (
      <RestaurantCard key={restaurant.id} restaurant={restaurant} />
    ));

    setRestaurantItems(items);
  }, [restaurants]);

  const getNextBatch = () => {
    dispatch(nextPage());
  };

  return (
    <div className="flex flex-col items-center px-4">
      {restaurantItems}

      <InfiniteScroll callback={getNextBatch} />
    </div>
  );
}
