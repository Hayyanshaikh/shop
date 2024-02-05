import React from "react";
import * as Icon from "@phosphor-icons/react";
import Chart from '../components/Chart.jsx';
import productsData from "../../json_files/products.json";
import customersData from "../../json_files/customer.json";

const Dashboard = () => {
  const orderData = productsData.slice(0, 6);
  const topSellData = productsData.slice(4, 9);
  const customerInfoData = customersData.slice(0, 6);
  const chartData = [
    { category: 'Jan', value: 400 },
    { category: 'Feb', value: 100 },
    { category: 'Mar', value: 300 },
    { category: 'Apr', value: 200 },
    { category: 'May', value: 150 },
    { category: 'Jun', value: 600 },
    { category: 'Jul', value: 500 },
    { category: 'Aug', value: 1000 },
    { category: 'Sep', value: 800 },
    { category: 'Oct', value: 2000 },
    { category: 'Nov', value: 1500 },
    { category: 'Dec', value: 900 },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Sales Overview */}
      <div className="bg-white col-span-2 rounded border">
        <h2 className="text-lg font-semibold mb-2 border-b p-3 bg-gray-100/50">
          Sales Overview
        </h2>
        <Chart chartData={chartData}/>
      </div>

      {/* Order Products */}
      <div className="bg-white rounded border">
        <h2 className="text-lg font-semibold mb-2 border-b p-3 bg-gray-100/50">
          Order Products
        </h2>
        <div className="max-h-[300px] overflow-auto">
          <table className="w-full border-collapse order_products_table">
            <thead>
              <tr>
                <th className="border-b font-semibold text-left pt-0 py-2 px-3">
                  Name
                </th>
                <th className="border-b font-semibold text-left pt-0 py-2 px-3">
                  Qty
                </th>
                <th className="border-b font-semibold text-left pt-0 py-2 px-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((product) => (
                <tr key={product.id}>
                  <td className="text-gray-600 py-2 px-3">
                    <div className="flex items-center">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="rounded-full w-8 h-8 mr-2 inline-block"
                      />
                      {product.name}
                    </div>
                  </td>
                  <td className="text-gray-600 py-2 px-3">
                    {product.quantity}
                  </td>
                  <td className="text-gray-600 py-2 px-3">
                    ${product.price.toFixed(0)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Selling Products */}
      <div className="bg-white col-span-2 rounded border">
        <h2 className="text-lg font-semibold mb-2 border-b p-3 bg-gray-100/50">
          Top Selling Products
        </h2>
        <div className="max-h-[300px] overflow-auto">
          <table className="w-full border-collapse order_products_table">
            <thead>
              <tr>
                <th className="border-b font-semibold text-left pt-0 py-2 px-3">
                  Name
                </th>
                <th className="border-b font-semibold text-left pt-0 py-2 px-3">
                  Category
                </th>
                <th className="border-b font-semibold text-left pt-0 py-2 px-3">
                  Qty
                </th>
                <th className="border-b font-semibold text-left pt-0 py-2 px-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {topSellData.map((product) => (
                <tr key={product.id}>
                  <td className="text-gray-600 py-2 px-3">
                    <div className="flex items-center">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="rounded-full w-8 h-8 mr-2 inline-block"
                      />
                      {product.name}
                    </div>
                  </td>
                  <td className="text-gray-600 py-2 px-3">
                    {product.category}
                  </td>
                  <td className="text-gray-600 py-2 px-3">
                    {product.quantity}
                  </td>
                  <td className="text-gray-600 py-2 px-3">
                    ${product.price.toFixed(0)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Information */}
      <div className="bg-white rounded border">
        <h2 className="text-lg font-semibold mb-2 border-b p-3 bg-gray-100/50">
          Customer Information
        </h2>
        
        <div className="max-h-[300px] overflow-auto">
          <table className="w-full border-collapse order_products_table">
            <thead>
              <tr>
                <th className="border-b font-semibold text-left pt-0 py-2 px-3">
                  Name
                </th>
                <th className="border-b font-semibold text-left pt-0 py-2 px-3">
                  Phone
                </th>
              </tr>
            </thead>
            <tbody>
              {customerInfoData.map((customer) => (
                <tr key={customer.id}>
                  <td className="text-gray-600 py-2 px-3">
                    <div className="flex items-center">
                      <img
                        src={customer.imageUrl}
                        alt={customer.name}
                        className="rounded-full w-8 h-8 mr-2 inline-block"
                      />
                      {customer.name}
                    </div>
                  </td>
                  <td className="text-gray-600 py-2 px-3">
                    {customer.phone}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
