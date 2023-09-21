import { useMemo } from 'react';

export default function Delivery({ restaurant }: { restaurant: any }) {
  const deliveryType = useMemo(
    () => (restaurant.deliveryGuarantee ? 'پیک فروشنده' : 'ارسال اکسپرس'),
    [restaurant]
  );

  const deliveryFee = useMemo(
    () => restaurant.deliveryFee.toLocaleString() + ' تومان',
    [restaurant]
  );

  return (
    <div className="flex items-center">
      <div className="text-slate ml-2">{deliveryType}</div>

      <div>{deliveryFee}</div>
    </div>
  );
}
