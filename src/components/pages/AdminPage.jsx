import { useState } from 'react';

import { addProduct } from '@/services/fakeStoreApi';

const AdminPage = () => {
  const [form, setForm] = useState({
    title: '',
    price: '',
    category: '',
    image: '',
    description: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await addProduct({
        ...form,
        price: Number(form.price),
      });

      console.log('created:', result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="title"
        placeholder="Title"
        className="input input-bordered w-full"
        value={form.title}
        onChange={handleChange}
      />
      <input
        name="price"
        placeholder="Price"
        className="input input-bordered w-full"
        value={form.price}
        onChange={handleChange}
      />
      <input
        name="category"
        placeholder="Category"
        className="input input-bordered w-full"
        value={form.category}
        onChange={handleChange}
      />
      <input
        name="image"
        placeholder="Image URL"
        className="input input-bordered w-full"
        value={form.image}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        className="textarea textarea-bordered w-full"
        value={form.description}
        onChange={handleChange}
      />

      <button className="btn btn-primary">Add Product</button>
    </form>
  );
};

export default AdminPage;
