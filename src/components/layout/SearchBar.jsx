import { useState } from 'react';
import { useNavigate } from 'react-router';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Todo search in catgories und cart
    navigate(`/?q=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Search products..."
        className="input input-bordered input-sm"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button className="btn btn-sm btn-primary">Search</button>
    </form>
  );
};

export default SearchBar;
