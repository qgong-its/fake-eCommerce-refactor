import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';

import { getAllProducts, getCategories } from '@/services/fakeStoreApi';
import ProductCard from '@/components/ui/ProductCard';
import { useCart } from '@/context/CartContext';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchParams] = useSearchParams();

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
  }, []);

  const query = searchParams.get('q')?.trim() || '';

  const filteredProducts = query
    ? products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase()),
      )
    : products;

  const { addToCart } = useCart();

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

      {query && <p className="text-sm opacity-60">Results for: "{query}"</p>}

      {query && filteredProducts.length === 0 ? (
        <p className="text-center opacity-60">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HomePage; // import MainLayout from ...

/**
 * export Home;
 *
 * import { Home } from ...
 */
