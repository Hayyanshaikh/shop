import React, { useState, useEffect } from "react";
import Select from "../components/Select.jsx";
import Dropdown from "../components/Dropdown.jsx";
import customersData from "../../json_files/customer.json";
import * as Icon from "@phosphor-icons/react";
import Pagination from '../../components/Pagination.jsx';

const Customer = () => {
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const menuItems = () => {
    const name = customersData.map((item) => item.name);
    const uniqueCategories = Array.from(new Set(name));
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

  const filteredData = customersData.filter((customer) =>
    customer.name.toLowerCase().includes(value.toLowerCase())
  );


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
          title="Filter Category"
          onClick={(label) => setValue(label)}
        />
      </div>
    <table className="min-w-full bg-white border text-left">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b font-semibold">ID</th>
          <th className="py-2 px-4 border-b font-semibold">Name</th>
          <th className="py-2 px-4 border-b font-semibold">Email</th>
          <th className="py-2 px-4 border-b font-semibold">Phone</th>
          <th className="py-2 px-4 border-b font-semibold">Address</th>
          <th className="py-2 px-4 border-b font-semibold">Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.slice(startIndex, endIndex).map((customer) => (
          <tr key={customer.id}>
            <td className="py-2 px-4 border-b">{customer.id}</td>
            <td className="py-2 px-4 border-b">{customer.name}</td>
            <td className="py-2 px-4 border-b">{customer.email}</td>
            <td className="py-2 px-4 border-b">{customer.phone}</td>
            <td className="py-2 px-4 border-b">{customer.address}</td>
            <td className="py-2 px-4 border-b">
              <Dropdown
                menuItems={actionButtons}
                position="right-0"
                onClick={(label) => alert(`${label} Customer id's ${customer.id}`)}
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
        totalItems={filteredData.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Customer;