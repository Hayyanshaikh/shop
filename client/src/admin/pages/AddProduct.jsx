import React, { useState } from 'react';
import Select from '../components/Select.jsx';
import CheckBox from '../components/CheckBox.jsx';
import * as Icon from '@phosphor-icons/react';
import Button from '../../components/Button.jsx';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
    quantity: '',
    category: '',
    imageUrl: '',
    popular: false,
    description: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'imageUrl' && files && files.length > 0) {
      const file = files[0];
      setFormData({
        ...formData,
        [name]: file
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleDropdownChange = (label) => {
    setFormData({
      ...formData,
      category: label
    });
  };

  const categories = ['Electronics', 'Clothing', 'Books', 'Home & Kitchen'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      id: '',
      name: '',
      price: '',
      imageUrl: '',
      description: '',
      popular: false,
      quantity: '',
      category: ''
    });
  };

  return (
    <div className="flex">
      <div className="w-1/4 p-4 border rounded">
        <h1 className="text-lg font-semibold mb-4">Product Details</h1>
        <div className="mb-4">
          <label htmlFor="imageUrl" className="border border-dashed border-gray-400 bg-gray-50 rounded-lg px-4 py-8 flex gap-2 flex-col justify-center items-center cursor-pointer">
            <Icon.UploadSimple size={32} weight="duotone" />
            <span className="text-center text-gray-500">Upload file here or click to browse</span>
            <input 
              type="file" 
              id="imageUrl"
              name="imageUrl" 
              className="hidden" 
              onChange={handleChange} 
              accept="image/*" 
              required 
            />
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block font-semibold mb-2">Category:</label>
          <Select
            data={categories}
            title={formData.category != "" ? formData.category : "Select Category"}
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
        <h1 className="text-2xl font-semibold mb-4">Add Product</h1>
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
          <Button
            type="submit"
            text="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;