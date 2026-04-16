export const request = async (endpoint) => {
  const BASE_URL = 'https://fakestoreapi.com';

  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) throw new Error(`HTTP ERROR! status: {response.status}`);

  return response.json();
};

export const getAllProducts = () => {
  return request('/products');
};
