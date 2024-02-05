import React, { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown.jsx";
import productsData from "../../json_files/products.json";
import * as Icon from "@phosphor-icons/react";
import useFilter from "../../hooks/useFilter.jsx";
import Pagination from '../../components/Pagination.jsx'

const Products = () => {
  const { value, data, setData, setValue } = useFilter({
    initialValue: "",
    initialData: productsData,
  });

  const menuItemsa = () => {
    const categories = productsData.map((item) => item.category);
    const uniqueCategories = Array.from(new Set(categories));

    const labels = uniqueCategories.map((item) => ({
      label: item,
    }));

    return labels;
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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
        <Dropdown
          menuItems={menuItemsa()}
          title="Filter Categories"
          onClick={(label) => setValue(label)}
        />
      </div>
      <table className="min-w-full bg-white border text-left">
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
          {data.slice(startIndex, endIndex).map((product) => (
            <tr key={product.id}>
              <td className="py-2 px-4 border-b">{product.id}</td>
              <td className="py-2 px-4 border-b">
                <div className="flex items-center gap-2">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-8 w-8 rounded-full"
                  />
                  <span>{product.name}</span>
                </div>
              </td>
              <td className="py-2 px-4 border-b">
                ${product.price.toFixed(2)}
              </td>
              <td className="py-2 px-4 border-b">{product.category}</td>
              <td className="py-2 px-4 border-b">
                <Dropdown
                  menuItems={actionButtons}
                  position="right-0"
                  onClick={(label) => alert(`${label} Product id's ${product.id}`)}
                  icon={
                    <Icon.DotsThreeOutline
                      className="text-gray-600"
                      weight="fill"
                    />
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Products;