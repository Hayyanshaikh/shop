import React, { useState, useEffect } from "react";
import Button from "../../components/Button.jsx";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../store/slices/OrderSlice.js";
import { cartEmpty } from "../../store/slices/CartSlice.js";

const Checkout = () => {
  const { products, totalPrice, shippingAmount } = useSelector((state) => state.cart);
  const orders = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length < 1) {
      navigate("/")
    }
  }, [products])

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleCustomerChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentChange = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    var grandPrice = totalPrice + shippingAmount;
    var confirmProducts = products.map(product => ({
		  name: product.name,
		  price: product.price.toFixed(0),
		  quantity: product.quantity
		}));

    const confirmOrder = {confirmProducts, customerInfo, paymentDetails, grandPrice}
    await dispatch(placeOrder(confirmOrder));
    await dispatch(cartEmpty());
  };
  console.log(orders);
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex gap-10 items-start">
          <div className="w-6/12 p-4 sticky top-[120px]">
            <h2 className="text-3xl font-bold mb-10 capitalize">Checkout</h2>
            <ul className="flex flex-col gap-3">
              {products.map((product, key) => (
                <li className="flex gap-5 items-center" key={key}>
                  <img
                    src={product.imageUrl}
                    alt=""
                    className="w-14 h-14 object-cover rounded"
                  />
                  <div className="flex flex-col flex-1">
                    <h5 className="font-semibold">{product.name}</h5>
                    <span className="text-gray-500">
                      Qty.{" "}
                      <i className="not-italic font-semibold text-orange-500">
                        {product.quantity < 9
                          ? "0" + product.quantity
                          : product.quantity}
                      </i>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg">
                      ${product.price.toFixed(0) * product.quantity}
                    </span>
                    <span className="font-medium text-xs text-gray-500">
                      ${product.price.toFixed(0)} Each
                    </span>
                  </div>
                </li>
              ))}
              <li className="ml-[76px] border-t pt-4 mt-2">
                <div className="flex justify-between flex-1">
                  <h5 className="font-medium text-sm">Sub Total</h5>
                  <span className="text-gray-500">
                    ${totalPrice && totalPrice.toFixed(0)}
                  </span>
                </div>
              </li>
              <li className="ml-[76px]">
                <div className="flex justify-between flex-1">
                  <h5 className="font-medium text-sm">Shipping Amount</h5>
                  <span className="text-gray-500">
                    {shippingAmount
                      ? `$${shippingAmount.toFixed(0)}`
                      : "Free Shipping"}
                  </span>
                </div>
              </li>
              <li className="ml-[76px] border-t pt-4 mt-2">
                <div className="flex justify-between flex-1">
                  <h5 className="font-semibold">Grand Total</h5>
                  <span className="font-bold text-orange-500 text-xl">
                    ${parseFloat(totalPrice + (shippingAmount || 0)).toFixed(0)}
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <form
            className="w-6/12 p-4 border rounded"
            onSubmit={handlePlaceOrder}
          >
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Customer Information
              </h2>
              <div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    required={true}
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={customerInfo.name}
                    onChange={handleCustomerChange}
                    className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Address
                  </label>
                  <input
                    required={true}
                    type="text"
                    name="address"
                    placeholder="123 Main St"
                    value={customerInfo.address}
                    onChange={handleCustomerChange}
                    className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      City
                    </label>
                    <input
                      required={true}
                      type="text"
                      name="city"
                      placeholder="Anytown"
                      value={customerInfo.city}
                      onChange={handleCustomerChange}
                      className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      ZIP Code
                    </label>
                    <input
                      required={true}
                      type="text"
                      name="zip"
                      placeholder="12345"
                      value={customerInfo.zip}
                      onChange={handleCustomerChange}
                      className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
                <div className="mb-4 col-span-2">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Country
                  </label>
                  <input
                    required={true}
                    type="text"
                    name="country"
                    placeholder="United States"
                    value={customerInfo.country}
                    onChange={handleCustomerChange}
                    className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
              <div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Card Number
                  </label>
                  <input
                    required={true}
                    type="text"
                    name="cardNumber"
                    placeholder="**** **** **** 1234"
                    value={paymentDetails.cardNumber}
                    onChange={handlePaymentChange}
                    className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      Expiration Date
                    </label>
                    <input
                      required={true}
                      type="text"
                      name="expirationDate"
                      placeholder="MM/YYYY"
                      value={paymentDetails.expirationDate}
                      onChange={handlePaymentChange}
                      className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                      CVV
                    </label>
                    <input
                      required={true}
                      type="text"
                      name="cvv"
                      placeholder="123"
                      value={paymentDetails.cvv}
                      onChange={handlePaymentChange}
                      className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Button className="ml-auto" text="Place Order"/>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
