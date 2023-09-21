import { useMemo } from 'react';

export default function Delivery({ restaurant }: { restaurant: any }) {
  const deliveryType = useMemo(
    () => (restaurant.deliveryGuarantee ? 'پیک فروشنده' : 'ارسال اکسپرس'),
    [restaurant]
  );

  return (
    <div className="flex items-center">
      <div>{deliveryType}</div>

      <div className="ml-1">{restaurant.deliveryFee}</div>
    </div>
  );
}
