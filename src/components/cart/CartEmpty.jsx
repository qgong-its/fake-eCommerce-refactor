import { Link } from 'react-router';

export default function CartEmpty() {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body items-start">
        <h2 className="card-title">Your cart is empty</h2>
        <p className="text-base-content/70">
          Browse products and add something you like.
        </p>

        <div className="card-actions mt-2">
          <Link to="/" className="btn btn-primary">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
