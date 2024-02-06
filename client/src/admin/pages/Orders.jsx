import React, { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown.jsx";
import Select from "../components/Select.jsx";
import orderData from "../../json_files/orders.json";
import productData from "../../json_files/products.json";
import * as Icon from "@phosphor-icons/react";
import Pagination from '../../components/Pagination.jsx';

const Orders = () => {
  const [value, setValue] = useState("");
  const [combinedData, setCombinedData] = useState(orderData);
  const [currentPage, setCurrentPage] = useState(1);

  const menuItems = () => {
    const customer_name = orderData.map((item) => item.customer_name);
    const uniqueCategories = Array.from(new Set(customer_name));
    return uniqueCategories;
  };

  const actionButtons = [
    {
      icon: <Icon.PencilSimple size={18} weight="duotone" />,
      label: "Edit",
    },
    {
      icon: <Icon.Trash size={18} weight="duotone" />,
      label: "Delete",
    },
  ];

  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const combinedOrders = orderData.map((order) => {
      // Extract product IDs from the order
      const productIds = Array.isArray(order.product_id) ? order.product_id : [order.product_id];

      // Find corresponding products from productData
      const products = productIds.map(productId => {
        return productData.find(product => product.id === productId);
      });

      const product = products.map(product => {
        return product ? product.name : "N/A";
      })

      return {...order, product: product.join(', ')}

    });

    setCombinedData(combinedOrders);
  }, []);

  const filteredData = combinedData.filter((order) => {
    return order.customer_name.toLowerCase().includes(value.toLowerCase()) || order.product.toLowerCase().includes(value.toLowerCase());
  });
  return (
    <div>
      <div className="flex gap-2 mb-4 items-center justify-between">
        <div className="flex border rounded overflow-hidden">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search..."
            className="p-1 px-2 focus:outline-none"
          />
          <button className="text-gray-500 bg-gray-100 p-2 border-l">
            <Icon.MagnifyingGlass size={16} />
          </button>
        </div>
        <Select 
          data={menuItems()}
          title="Filter Customer"
          onClick={(label) => setValue(label)}
        />
      </div>
      <table className="min-w-full bg-white border text-left">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b font-semibold">Order ID</th>
            <th className="py-2 px-4 border-b font-semibold">Products</th>
            <th className="py-2 px-4 border-b font-semibold">Customer Name</th>
            <th className="py-2 px-4 border-b font-semibold">Phone</th>
            <th className="py-2 px-4 border-b font-semibold">Address</th>
            <th className="py-2 px-4 border-b font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.slice(startIndex, endIndex).map((order) => (
            <tr key={order.order_id}>
              <td className="py-2 px-4 border-b">{order.order_id}</td>
              <td className="py-2 px-4 border-b">{order.product}</td>
              <td className="py-2 px-4 border-b">{order.customer_name}</td>
              <td className="py-2 px-4 border-b">{order.phone}</td>
              <td className="py-2 px-4 border-b">{order.address}</td>
              <td className="py-2 px-4 border-b">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        totalItems={filteredData.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Orders;