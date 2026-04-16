import { createContext, use, useReducer } from 'react';

import { formatPrice } from '@/utils/currency';

const initialState = {
  items: [],
  total: formatPrice(0),
  itemCount: 0,
};

const cartReducer = (state, action) => {
  const recalculateCart = (items) => {
    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const total = formatPrice(
      items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    );
    return { ...state, items, itemCount, total };
  };

  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id,
      );

      let newItems;
      if (existingProduct) {
        newItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      return recalculateCart(newItems);
    }

    case 'REMOVE_FROM_CART': {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload,
      );

      let newItems;
      if (existingProduct.quantity === 1) {
        newItems = state.items.filter((item) => item.id !== action.payload);
      } else {
        newItems = state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      }

      return recalculateCart(newItems);
    }

    case 'EMPTY_CART':
      return {
        ...state,
        items: [],
        itemCount: 0,
        total: formatPrice(0),
      };

    default:
      return state;
  }
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const emptyCart = () => {
    dispatch({ type: 'EMPTY_CART' });
  };

  const value = {
    items: state.items,
    addToCart,
    removeFromCart,
    emptyCart,
  };

  return <CartContext value={value}>{children}</CartContext>;
};

export const useCart = () => {
  const context = use(CartContext);

  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }

  return context;
};
