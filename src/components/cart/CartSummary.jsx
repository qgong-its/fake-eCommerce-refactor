import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/currency';

const CartSummary = () => {
  const { itemCount, total, emptyCart } = useCart();

  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body space-y-4">
        <h2 className="card-title">Order Summary</h2>

        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="opacity-70">Total items</span>
            <span className="font-medium tabular-nums">{itemCount}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="opacity-70">Total amount</span>
            <span className="text-lg font-bold tabular-nums">{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
