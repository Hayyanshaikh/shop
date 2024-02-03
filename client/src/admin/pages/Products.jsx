import React from 'react';
import Dropdown from '../components/Dropdown.jsx';
import products from '../../json_files/porducts.json'

const Products = () => {
	const menuItems = [
    { label: 'Account settings'},
    { label: 'Documentation', to: '/documentation' },
  ];
	return (
		<div>
			<Dropdown menuItems={menuItems} title="Filter"/>
			<table className="min-w-full bg-white border border-gray-300 text-left">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b font-semibold">ID</th>
            <th className="py-2 px-4 border-b font-semibold">Product Name</th>
            <th className="py-2 px-4 border-b font-semibold">Price</th>
            <th className="py-2 px-4 border-b font-semibold">Category</th>
            <th className="py-2 px-4 border-b font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="py-2 px-4 border-b">{product.id}</td>
              <td className="py-2 px-4 border-b">
              	<div className="flex items-center gap-2">
              	<img src={product.imageUrl} alt={product.name} className="h-8 w-8 rounded-full"/>
              		<span>{product.name}</span>
              	</div>
              </td>
              <td className="py-2 px-4 border-b">${product.price.toFixed(2)}</td>
              <td className="py-2 px-4 border-b">{product.category}</td>
              <td className="py-2 px-4 border-b">
								<Dropdown menuItems={menuItems} title="Filter"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
		</div>
	)
}

export default Products