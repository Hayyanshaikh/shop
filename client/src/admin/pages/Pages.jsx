import React, { useState, useEffect } from "react";
import Select from "../components/Select.jsx";
import Dropdown from "../components/Dropdown.jsx";
import Checkbox from '../components/Checkbox.jsx';
import pagesData from "../../json_files/pages.json";
import * as Icon from "@phosphor-icons/react";
import Pagination from '../../components/Pagination.jsx';
import Button from '../../components/Button.jsx';
import { useNavigate } from 'react-router-dom';

const Pages = () => {
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    link: ''
  });

  const handleChange = (name, e) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: e.target.value
    }));
  };

  const menuItems = () => {
    const titles = pagesData.map(page => page.title);
    return [...new Set(titles)];
  };

  const actionButtons = [{
      icon: <Icon.PencilSimple size={18} weight="duotone" />,
      label: "Edit",
    },
    {
      icon: <Icon.Trash size={18} weight="duotone" />,
      label: "Delete",
    },
  ];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredData = pagesData.filter((page) => {
    return page.title.toLowerCase().includes(value.toLowerCase()) ||
           page.url.toLowerCase().includes(value.toLowerCase());
  });

  const handleAddPage = () => {
    setFormData({
      title: '',
      link: ''
    });
    // Handle add page action
  }

  const closeModal = () => {
    navigate(`/admin/pages`)
  };

  const handleAction = (label, pageId) => {
    const page = data.pages.find(page => pageId === page.id.toString());
    
    if (label === "edit") {
      navigate(`/admin/pages/${pageId}`);
      setFormData({
        title: page.title,
        link: page.url,
      })
    }
    else if (label === "delete"){
      // Handle delete action
    }
  }

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
        <div className="flex gap-2 items-center">
          <Select 
            data={menuItems()}
            title="Filter Pages"
            onClick={(title) => setValue(title)}
          />
          <Button
            text="Add Page"
            onClick={handleAddPage}
          />
        </div>
      </div>
      <table className="min-w-full bg-white border text-left">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b font-semibold">ID</th>
            <th className="py-2 px-4 border-b font-semibold">Title</th>
            <th className="py-2 px-4 border-b font-semibold">Link</th>
            <th className="py-2 px-4 border-b font-semibold">Template</th>
            <th className="py-2 px-4 border-b font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.slice(startIndex, endIndex).map(page => (
            <tr key={page.id}>
              <td className="py-2 px-4 border-b">{page.id}</td>
              <td className="py-2 px-4 border-b">{page.title}</td>
              <td className="py-2 px-4 border-b">{page.url}</td>
              <td className="py-2 px-4 border-b">{page.template.type}</td>
              <td className="py-2 px-4 border-b">
                <Dropdown
                  menuItems={actionButtons}
                  position="right-0"
                  onClick={(label) => handleAction(label, page.id.toString())}
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

export default Pages;