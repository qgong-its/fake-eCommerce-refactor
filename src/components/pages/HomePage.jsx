import { useEffect } from 'react';

import { getAllProducts } from '@/services/fakeStoreApi';

const HomePage = () => {
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await getAllProducts();
        console.log('products:', products);
      } catch (error) {
        console.error(error);
      }
    };

    loadProducts();
  }, []);

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Home</h1>
      <p className="text-base-content/80">
        Welcome to the store. Products and categories will be added here next.
      </p>
      <p>Check the console for product data.</p>
    </section>
  );
};

export default HomePage; // import MainLayout from ...

/**
 * export Home;
 *
 * import { Home } from ...
 */
