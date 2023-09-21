import { useMemo } from 'react';

import Delivery from './Delivery';
import './RestaurantCard.scss';
import Score from './Score';

export default function RestaurantCard({ restaurant }: { restaurant: any }) {
  const descriptionItems = useMemo(
    () => restaurant.description.split(',').join('  '),
    [restaurant]
  );

  return (
    <article className="restaurant_card shadow-lg rounded-md m-4">
      <header className="restaurant_card__header">
        <img
          className="restaurant_card__bg_img"
          src={restaurant.backgroundImage || restaurant.backgroundImageCustom}
          alt={restaurant.title}
        />

        <div className="restaurant_card__logo shadow rounded-md">
          <img className="rounded" src={restaurant.logo} alt={restaurant.title} />
        </div>
      </header>

      <section className="flex flex-col p-4 pt-6 ">
        <div className="flex items-center justify-between mb-2">
          <h1 className="m-0 overflow-ellipsis">{restaurant.title}</h1>

          <Score value={restaurant.rate} />
        </div>

        <div className="flex justify-start mb-2 overflow-ellipsis">{descriptionItems}</div>

        <Delivery restaurant={restaurant} />
      </section>
    </article>
  );
}
