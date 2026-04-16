import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getProductsByCategory } from '@/services/fakeStoreApi';
import ProductCard from '@/components/ui/ProductCard';
import { useCart } from '@/context/CartContext';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const products = await getProductsByCategory(categoryName);
        setProducts(products);
      } catch (error) {
        console.error(error);
      }
    }

    loadProducts();
  }, [categoryName]);

  const { addToCart } = useCart();

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">
        Category: {decodeURIComponent(categoryName)}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;
