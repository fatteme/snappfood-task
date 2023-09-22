import { useMemo } from 'react';

import { Restaurant } from '../types/resturant';

interface DeliveryProps {
  restaurant: Restaurant;
}
export default function Delivery({ restaurant }: DeliveryProps) {
  const deliveryType = useMemo(
    () => (restaurant.deliveryGuarantee ? 'پیک فروشنده' : 'ارسال اکسپرس'),
    [restaurant]
  );

  const deliveryFee = useMemo(
    () => restaurant.deliveryFee.toLocaleString() + ' تومان',
    [restaurant]
  );

  return (
    <section className="flex items-center">
      <div className="text-slate ml-2">{deliveryType}</div>

      <div>{deliveryFee}</div>
    </section>
  );
}
