import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  getRestaurants,
  nextPage,
  selectIsLoading,
  selectPage,
  selectPageSize,
  selectRestaurants
} from '../store/restaurants';

import InfiniteScroll from '../components/InfiniteScroll';
import RestaurantCard from '../components/RestaurantCard';
import SkeletonLoader from '../components/SkeletonLoader';

export default function RestaurantList() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);
  const pageSize = useSelector(selectPageSize);
  const restaurants = useSelector(selectRestaurants);

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

      <SkeletonLoader isLoading={isLoading} />

      <InfiniteScroll callback={getNextBatch} />
    </div>
  );
}
