import Delivery from './Delivery';
import './RestaurantCard.scss';
import Score from './Score';

export default function RestaurantCard({ restaurant }: { restaurant: any }) {
  return (
    <article className="restaurant_card shadow-lg rounded-md m-4">
      <header className="restaurant_card__header">
        <img
          className="restaurant_card__bg_img"
          src={restaurant.backgroundImage || restaurant.backgroundImageCustom}
          alt={restaurant.title}
        />
      </header>

      <section className="flex flex-col p-2">
        <div className="flex items-center justify-between mb-2">
          <h1 className="m-0">{restaurant.title}</h1>

          <Score value={restaurant.rate} />
        </div>

        <div className="flex justify-start mb-2">
          <div>{restaurant.description}</div>
        </div>

        <Delivery restaurant={restaurant} />
      </section>
    </article>
  );
}
