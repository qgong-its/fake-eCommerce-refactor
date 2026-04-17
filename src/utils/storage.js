const KEY = 'cart';

export const saveCartToStorage = (items) => {
  localStorage.setItem(KEY, JSON.stringify(items));
};

export const getCartFromStorage = () => {
  const value = localStorage.getItem(KEY);

  if (!value) return [];

  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
};
