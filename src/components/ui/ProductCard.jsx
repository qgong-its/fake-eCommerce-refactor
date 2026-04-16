const formatPrice = (price) =>
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);

const ProductCard = ({ product }) => {
  return (
    <article className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={product.image} alt={product.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <span className="text-xs text-gray-500">{product.category}</span>
        <div className="card-actions justify-end">
          <span className="font-bold">{formatPrice(product.price)}</span>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
