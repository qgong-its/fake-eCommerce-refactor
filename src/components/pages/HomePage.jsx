import { useEffect, useState } from 'react';
import { Link } from 'react-router';

import { getAllProducts, getCategories } from '@/services/fakeStoreApi';
import ProductCard from '@/components/ui/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadHomePageData = async () => {
      try {
        const [products, categories] = await Promise.all([
          getAllProducts(),
          getCategories(),
        ]);
        setProducts(products);
        setCategories(categories);
      } catch (error) {
        console.error(error);
      }
    };

    loadHomePageData();
    loadHomePageData();
  }, []);

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/category/${encodeURIComponent(category)}`}
            className="btn btn-sm"
          >
            {category}
          </Link>
        ))}
      </div>

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
