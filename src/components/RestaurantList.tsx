import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store';
import { getRestaurants, nextPage } from '../store/restaurants';

import RestaurantCard from './RestaurantCard';
import InfiniteScroll from './InfiniteScroll';

export default function RestaurantList() {
  const dispatch = useDispatch();

  const restaurants = useSelector((state: RootState) => state.restaurantsStore.list);
  const page = useSelector((state: RootState) => state.restaurantsStore.page);
  const pageSize = useSelector((state: RootState) => state.restaurantsStore.pageSize);

  const [restaurantItems, setRestaurantItems] = useState<JSX.Element[]>([]);

  useEffect(() => {
    dispatch(getRestaurants({ page, pageSize }) as any);
  }, [page]);

  const getNextBatch = () => {
    dispatch(nextPage());
  };

  useEffect(() => {
    const items = restaurants.map((restaurant: any) => (
      <RestaurantCard key={restaurant.id} restaurant={restaurant} />
    ));

    setRestaurantItems(items);
  }, [restaurants]);

  return (
    <div className="flex flex-col items-center px-4">
      {restaurants.length}

      {restaurantItems}

      <InfiniteScroll callback={getNextBatch} />
    </div>
  );
}
