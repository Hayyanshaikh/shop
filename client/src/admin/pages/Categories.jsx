import React, { useState, useEffect } from "react";
import Select from "../components/Select.jsx";
import Dropdown from "../components/Dropdown.jsx";
import Checkbox from '../components/Checkbox.jsx';
import Modal from "../components/Modal.jsx";
import categoriesData from "../../json_files/categories.json";
import * as Icon from "@phosphor-icons/react";
import Pagination from '../../components/Pagination.jsx';
import Button from '../../components/Button.jsx';
import {useNavigate} from 'react-router-dom';

const Products = () => {
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    category: '',
    featured: false,
    parentCategory: ''
  });

  const handleChange = (name, e) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: e.target.value
    }));
  };


  const menuItems = () => {
    const categoriesAndSubcategories = categoriesData.flatMap(item => [
      item.name,
      ...item.subcategories.map(subcategory => subcategory.name)
    ]);

    const uniqueCategories = Array.from(new Set(categoriesAndSubcategories));

    return uniqueCategories;
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

  const filteredData = categoriesData.filter((category) => {
    if (category.name.toLowerCase().includes(value.toLowerCase())) {
      return true;
    }

    const subcategoryMatches = category.subcategories.some(subcategory =>
      subcategory.name.toLowerCase().includes(value.toLowerCase())
    );

    return subcategoryMatches;
  });

  const handleAddCategory = () => {
      setIsOpen(true);
  }

  const handleSubmit  = () => {
    setIsOpen(false);
  }

  const closeModal = () => {
    setIsOpen(false);
    setConfirmDelete(false);
    navigate(`/admin/categories`)
  };

  const handleAction = (label, categoryId) => {

    const category = categoriesData.find(category => categoryId === category.id.toString());
    
    if (label === "edit") {
      setIsOpen(true);
      navigate(`/admin/categories/${categoryId}`);
      setFormData({
        category: category.name,
        featured: category.featured,
      })
    }
    else if (label === "delete"){
      setConfirmDelete(true);
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
            title="Filter Category"
            onClick={(label) => setValue(label)}
          />
          <Button
            text="Add category"
            onClick={handleAddCategory}
          />
          <Modal isOpen={isOpen} closeModal={closeModal} modalSize="max-w-lg">
            <h1 className="text-xl font-semibold mb-4">Add a new category</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="category" className="font-semibold text-sm">Category:</label>
                <input type="text" name="category" value={formData.category} onChange={(e)=> handleChange("category", e)} className="border border-gray-300 rounded-md px-3 py-2 mt-1" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="subCategories" className="font-semibold text-sm mb-1">Parnet Categories:</label>
                <Select 
                  data={menuItems()}
                  title="Filter Category"
                  onClick={(label) => setValue(label)}
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="featured" className="font-semibold text-sm">Featured:</label>
                <Checkbox
                  checked={formData.featured}
                  onChange={() => setFormData({ ...formData, featured: !formData.featured })}
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  text="Close"
                  onClick={closeModal}
                  className="bg-gray-200/75"
                />
                <Button
                  text="Add"
                  onClick={closeModal}
                />
              </div>
            </form>
          </Modal>
        </div>
      </div>
      <table className="min-w-full bg-white border text-left">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b font-semibold">ID</th>
            <th className="py-2 px-4 border-b font-semibold">Category<	/th>
            <th className="py-2 px-4 border-b font-semibold">Featured</th>
            <th className="py-2 px-4 border-b font-semibold">sub categories</th>
            <th className="py-2 px-4 border-b font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
				  {filteredData.slice(startIndex, endIndex).map(category => (
				    <tr key={category.id}>
				      <td className="py-2 px-4 border-b">{category.id}</td>
				      <td className="py-2 px-4 border-b">{category.name}</td>
				      <td className="py-2 px-4 border-b">{category.featured ? 'Yes' : 'No'}</td>
				      <td className="py-2 px-4 border-b">
							  {category.subcategories.map((subcategory, index) => (
							    <span key={subcategory.id}>
							      {subcategory.name}{index !== category.subcategories.length - 1 && ", "}
							    </span>
							  ))}
							</td>
				      <td className="py-2 px-4 border-b">
				        <Dropdown
                  menuItems={actionButtons}
                  position="right-0"
                  onClick={(label) => handleAction(label, category.id.toString())}
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
      <Modal isOpen={confirmDelete} closeModal={closeModal} modalSize="max-w-md">
        <div>
          <div className="flex justify-center items-center flex-col">
            <Icon.WarningCircle size={70} weight="duotone" className="text-red-500 stroke-[2px]" />
            <h2 className="text-xl font-bold text-gray-800">Confirmation</h2>
          </div>
          <p className="text-gray-700 mt-2 text-center">Are you sure you want to delete this order?</p>
          <div className="mt-6 flex justify-center">
            <Button
              className="bg-red-500 text-white mr-2"
              onClick={confirmDelete}
              text="Delete"
            />
              
            <Button
              className="bg-gray-300/75"
              onClick={closeModal}
              text="Cancel"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Products;