import React, { useState, useEffect } from "react";
import Select from "../components/Select.jsx";
import * as Icon from "@phosphor-icons/react";
import Modal from '../components/Modal.jsx';
import Dropdown from "../components/Dropdown.jsx";
import Button from "../../components/Button.jsx";
import Badge from "../../components/Badge.jsx";
import orderData from "../../json_files/orders.json";
import productData from "../../json_files/products.json";
import customerData from "../../json_files/customer.json";
import Pagination from '../../components/Pagination.jsx';
import {useNavigate} from 'react-router-dom';

const Orders = () => {
  const [value, setValue] = useState("");
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [status, setStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [orderDetail, setOrderDetail] = useState(null);
  const [combinedData, setCombinedData] = useState(orderData);
  const navigate = useNavigate();

  const menuItems = () => {
    const customerNames = orderData.map((item) => {
      const customer = customerData.find(customer => item.customer_id.toString() === customer.id.toString());
      return customer ? customer.name : null;
    });
    
    const uniqueCustomerNames = Array.from(new Set(customerNames.filter(name => name !== null)));
    return uniqueCustomerNames;
  };

  const actionButtons = [
    {
      icon: <Icon.PencilSimple size={18} weight="duotone" />,
      label: "View",
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
      const productIds = Array.isArray(order.product_id) ? order.product_id : [order.product_id];

      const products = productIds.map(productId => {
        return productData.find(product => product.id === productId);
      });

      const product = products.map(product => {
        return product ? product.name : "N/A";
      });

      const customer = customerData.find(customer => customer.id.toString() === order.customer_id.toString());

      return {...order, product: product.join(', '), customer: customer}

    });

    setCombinedData(combinedOrders);
  }, []);

  const filteredData = combinedData.filter((order) => {
    if (order.customer) {
      return order.customer.name.toString().toLowerCase().includes(value.toLowerCase()) || order.product.toLowerCase().includes(value.toLowerCase());
    }
  });


  const closeModal = () => {
    if (!isOpenDetail) {
      navigate(`/admin/orders`);
    }
    setIsOpenDetail(false);
    setConfirmDelete(false);
  }

  const statusItems = ['Pending', 'In Progress', 'Shipped', 'Delivered'];

  const handleAction = (label, orderId) => {
    const order = orderData.find(order => order.order_id === orderId);
    
    const orderProduct = order.product_id.map(productId =>{
      return productData.filter(product => productId === product.id)
    }).flat();

    const customer = customerData.find(customer => customer.id.toString() === order.customer_id.toString());

    const combineOrder = {...order, products: orderProduct, customer: customer};

    if (label === "view") {
      navigate(`/admin/orders/${orderId}`)
      setOrderDetail(combineOrder);
      setIsOpenDetail(true);
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
            <th className="py-2 px-4 border-b font-semibold">Status</th>
            <th className="py-2 px-4 border-b font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.slice(startIndex, endIndex).map((order) => (
            <tr key={order.order_id}>
              <td className="py-2 px-4 border-b">{order.order_id}</td>
              <td className="py-2 px-4 border-b">{order.product}</td>
              <td className="py-2 px-4 border-b">{order.customer && order.customer.name}</td>
              <td className="py-2 px-4 border-b">{order.customer && order.customer.phone}</td>
              <td className="py-2 px-4 border-b">
                <Badge status={order.status} />
              </td>
              <td className="py-2 px-4 border-b">
                <Dropdown
                  menuItems={actionButtons}
                  position="right-0"
                  onClick={(label) => handleAction(label, order.order_id)}
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


      <Modal isOpen={isOpenDetail} closeModal={closeModal}>
        <div className="flex flex-col pb-4 border-b mb-4">
          <h5 className="text-xl font-semibold">Order Id: #{orderDetail && orderDetail.order_id}</h5>
          <p className="text-sm font-medium text-gray-400">Order date: <span className="font-semibold text-gray-600">Feb 16, 2022</span></p>
        </div>
        <div className="flex flex-col gap-4 pb-4 border-b mb-4">
          {
            orderDetail && orderDetail.products.map((product, key) => (
              <div className="flex items-center gap-3 gpa-2 w-full" key={key}>
                <figure className="h-12 w-12 flex items-center justify-center overflow-hidden rounded">
                  <img src="https://via.placeholder.com/300" className="object-cover" alt=""/>
                </figure>
                <div className="flex justify-between gap-2 flex-1 items-center">
                  <div className="flex flex-col">
                    <h5 className="text-md leading-none font-semibold">{product.name}</h5>
                    <span className="text-sm text-gray-400">{product.category}</span>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-lg font-semibold">${product.price}</h4>
                    <span className="text-sm font-medium text-gray-400">Qty.{orderDetail.quantity}</span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="flex flex-col gap-4 pb-4 border-b mb-4">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-lg">Order detail:</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field</th>
                      <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="text-sm">
                      <td className="px-3 py-2 whitespace-nowrap font-semibold capitalize">Customer Name:</td>
                      <td className="px-3 py-2 whitespace-nowrap text-gray-500 font-medium capitalize">{orderDetail && orderDetail.customer.name}</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="px-3 py-2 whitespace-nowrap font-semibold capitalize">Email:</td>
                      <td className="px-3 py-2 whitespace-nowrap text-gray-500 font-medium">{orderDetail && orderDetail.customer.email}</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="px-3 py-2 whitespace-nowrap font-semibold capitalize">Phone:</td>
                      <td className="px-3 py-2 whitespace-nowrap text-gray-500 font-medium">{orderDetail && orderDetail.customer.phone}</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="px-3 py-2 whitespace-nowrap font-semibold capitalize">Address:</td>
                      <td className="px-3 py-2 whitespace-nowrap text-gray-500 font-medium">{orderDetail && orderDetail.customer.address}</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="px-3 py-2 whitespace-nowrap font-semibold capitalize">Order Date:</td>
                      <td className="px-3 py-2 whitespace-nowrap text-gray-500 font-medium">{orderDetail && orderDetail.order_date}</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="px-3 py-2 whitespace-nowrap font-semibold capitalize">Status:</td>
                      <td className="px-3 py-2 whitespace-nowrap text-gray-500 font-medium capitalize">
                        <Select 
                          data={statusItems}
                          title={orderDetail && orderDetail.status}
                          position="left-0 bottom-full mb-2"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button
            text="Discard"
            type="button"
            className="bg-gray-300/75"
            onClick={()=> setIsOpenDetail(false)}
          />
          <Button
            text="Save"
            type="button"
            onClick={()=> setIsOpenDetail(false)}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Orders;