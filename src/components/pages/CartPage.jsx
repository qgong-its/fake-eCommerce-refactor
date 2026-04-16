import { useCart } from '@/context/CartContext';
import CartItemRow from '@/components/cart/CartItemRow';
import CartSummary from '@/components/cart/CartSummary';
import CartEmpty from '@/components/cart/CartEmpty';

const CartPage = () => {
  const { items, emptyCart } = useCart();

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <div>
          <h1 className="text-3xl font-bold">Cart</h1>
          <p className="text-base-content/70">
            Review your selected products and adjust the quantity if needed.
          </p>
        </div>
        {items.length !== 0 ? (
          <button
            className="btn btn-outline btn-error btn-sm"
            onClick={emptyCart}
          >
            Clear Cart
          </button>
        ) : null}
      </header>

      {items.length === 0 ? (
        <CartEmpty />
      ) : (
        <>
          <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide uppercase">
              Shopping Cart
            </li>

            {items.map((item, index) => (
              <CartItemRow key={item.id} item={item} index={index} />
            ))}
          </ul>

          <CartSummary />
        </>
      )}
    </section>
  );
};

export default CartPage;
