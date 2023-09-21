import './RestaurantCard.scss';
import Score from './Score';

export default function RestaurantCard() {
  return (
    <article className="restaurant_card shadow-lg rounded-md m-4">
      <header className="restaurant_card__header">
        <img
          className="restaurant_card__bg_img"
          src="https://cdn.snappfood.ir/400x266/uploads/images/vendors/covers/644f6369ed05f.jpeg"
          alt="something something"
        />
      </header>

      <section className="flex flex-col p-2">
        <div className="flex items-center justify-between mb-2">
          <h1 className="m-0">Restaurant name</h1>
          <Score value={1.35} />
        </div>
        <div className="flex justify-start mb-2">
          <div>keywword 1</div>
          <div className="ml-2">keywword 2</div>
          <div className="ml-2">keywword 3</div>
        </div>
        <div className="flex items-center justify-between">
          <div>express</div>
          <div>20,000</div>
        </div>
      </section>
    </article>
  );
}
