import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Select from '../components/Select.jsx';
import CheckBox from '../components/CheckBox.jsx';
import * as Icon from '@phosphor-icons/react';
import productsData from "../../json_files/products.json";

const EditProduct = () => {
  const { productId } = useParams();
  const product = productsData.find(product => product.id.toString() === productId.toString());

  const [formData, setFormData] = useState({
    id: '',
    name: product.name,
    price: product.price,
    imageUrl: product.imageUrl,
    description: product.description,
    popular: product.popular,
    quantity: product.quantity,
    category: product.category
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDropdownChange = (label) => {
    setFormData({
      ...formData,
      category: label
    });
  };

  const menuItems = () => {
    const category = productsData.map((item) => item.category);
    const uniqueCategories = Array.from(new Set(category));
    return uniqueCategories;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  console.log(formData.category);
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 p-4 border rounded">
        <h1 className="text-lg font-semibold mb-4">Product Details</h1>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="block font-semibold mb-2">Image URL:</label>
          <input type="text" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block font-semibold mb-2">Category:</label>
          <Select
            data={menuItems()}
            title={formData.category}
            onClick={(label) => handleDropdownChange(label)}
          />
        </div>
        <div className="mb-4">
          <CheckBox
            label="Popular"
            checked={formData.popular}
            onChange={() => setFormData({ ...formData, popular: !formData.popular })}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-semibold mb-4">Edit Product</h1>
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-2">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block font-semibold mb-2">Price:</label>
            <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-semibold mb-2">Description:</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full px-4 py-2 border rounded" required></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block font-semibold mb-2">Quantity:</label>
            <input type="number" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;