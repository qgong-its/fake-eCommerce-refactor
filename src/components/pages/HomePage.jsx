import { useEffect, useState } from 'react';

import { getAllProducts } from '@/services/fakeStoreApi';
import ProductCard from '@/components/ui/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await getAllProducts();
        setProducts(products);
        console.log('products:', products);
      } catch (error) {
        console.error(error);
      }
    };

    loadProducts();
  }, []);

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default HomePage; // import MainLayout from ...

/**
 * export Home;
 *
 * import { Home } from ...
 */
