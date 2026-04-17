export const request = async (endpoint, options = {}) => {
  const BASE_URL = 'https://fakestoreapi.com';

  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  if (!response.ok) throw new Error(`HTTP ERROR! status: {response.status}`);

  return response.json();
};

export const getAllProducts = () => {
  return request('/products');
};

export const getCategories = () => {
  return request('/products/categories');
};

export const getProductsByCategory = (category) => {
  return request(`/products/category/${category}`);
};

export const addProduct = (product) => {
  return request('/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
};
