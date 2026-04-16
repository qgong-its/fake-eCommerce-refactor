import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/currency';

const CartItemRow = ({ item, index }) => {
  const { addToCart, removeFromCart } = useCart();

  const lineTotal = item.price * item.quantity;

  return (
    <li className="list-row items-center">
      <div className="text-2xl font-thin opacity-30 tabular-nums">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div>
        <img
          className="size-14 rounded-box object-contain bg-white p-1"
          src={item.image}
          alt={item.title}
        />
      </div>

      <div className="list-col-grow min-w-0">
        <div className="font-medium line-clamp-1">{item.title}</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          {item.category}
        </div>
        <div className="text-sm opacity-70">{formatPrice(item.price)} each</div>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="btn btn-square btn-sm"
          onClick={() => removeFromCart(item.id)}
          aria-label={`Decrease quantity of ${item.title}`}
        >
          -
        </button>

        <span className="w-8 text-center font-medium tabular-nums">
          {item.quantity}
        </span>

        <button
          className="btn btn-square btn-sm"
          onClick={() => addToCart(item)}
          aria-label={`Increase quantity of ${item.title}`}
        >
          +
        </button>
      </div>

      <div className="w-24 text-right font-semibold tabular-nums">
        {formatPrice(lineTotal)}
      </div>
    </li>
  );
};

export default CartItemRow;
