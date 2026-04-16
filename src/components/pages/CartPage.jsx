import { useCart } from '@/context/CartContext';

const CartPage = () => {
  const { items, addToCart, removeFromCart } = useCart();

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      {items.length === 0 && <p>Cart is empty</p>}

      {items.map((item) => (
        <div key={item.id} className="flex gap-4 mb-2">
          <span>{item.title}</span>

          <button onClick={() => removeFromCart(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => addToCart(item)}>+</button>
        </div>
      ))}
    </section>
  );
};

export default CartPage;
