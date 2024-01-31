// Cart Component
import React, { useState } from "react";
import * as Icon from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity, cartEmpty } from "../../store/slices/CartSlice.js";
import Button from '../../components/Button.jsx';
import Alert from '../../components/Alert.jsx';
import EmptyCart from '../components/EmptyCart.jsx';


const Cart = () => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(null);
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.authentication.auth);

  const handleDecrease = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const handleIncrease = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const alertFunc = (err, succ) => {
    const alertType = cart.products.length === 0 ? "error" : "success";
    const alertMsg = cart.products.length === 0 ? err : succ;
    setAlert({ type: alertType, message: alertMsg });
    setTimeout(()=>{
      setAlert(null);
    }, 3000)
  }

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
    alertFunc("Product already has been removed!", "Product has been removed!");
  };

  const handleDeleteAllProducts = () => {
    dispatch(cartEmpty());
    alertFunc("Cart is now empty!", "Products removed from cart.");
  }

  const handleCartEmpty = () => {
    alertFunc("Cart is now empty!", "Products removed from cart.");
  }

  return (
    <section className="py-10">
      {alert && <Alert type={alert.type} message={alert.message} />}
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 capitalize">Cart</h2>

        <div className="flex gap-8 items-start">
          <div className="w-3/4">
            <table className="w-full">
              <thead className="text-white text-left overflow-hidden">
                <tr>
                  <th className="bg-gray-900 rounded-tl-md p-3">Product</th>
                  <th className="bg-gray-900 p-3">Category</th>
                  <th className="bg-gray-900 p-3">Actual Price</th>
                  <th className="bg-gray-900 p-3">Quantity</th>
                  <th className="bg-gray-900 rounded-tr-md p-3">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.products.length > 0 ? cart.products.map((product) => (
                  <tr key={product.id} className="border">
                    <td className="p-4 flex items-center gap-4">
                      <img src={product.imageUrl} alt={product.name} className="w-14 h-14 object-cover rounded" />
                      <div className="flex-1">
                        <h4 className="text-md font-semibold">{product.name}</h4>
                        <button className="text-red-500 text-sm font-semibold capitalize" onClick={() => handleRemove(product.id)}>Remove</button>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="text-orange-500 text-sm font-bold">{product.category}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-gray-500 text-sm font-semibold">${product.price.toFixed(0)}</p>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center rounded justify-center">
                        <button onClick={() => handleDecrease(product.id)} className="text-gray-800 bg-gray-200 p-2 rounded focus:outline-none">
                          <Icon.Minus />
                        </button>
                        <span className="flex-1 text-center">{product.quantity}</span>
                        <button onClick={() => handleIncrease(product.id)} className="text-gray-800 bg-gray-200 p-2 rounded focus:outline-none">
                          <Icon.Plus />
                        </button>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-lg">${parseFloat((product.price * product.quantity).toFixed(0))}</span>
                    </td>

                  </tr>
                )) : (
                  <tr>
                    <td colSpan="5" className="p-4 border">
                      <div className="flex flex-col items-center justify-center">
                        <EmptyCart ratio={300} color="#F97316"/>
                        <Button link="/" className="" text="Home"/>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="w-1/4 rounded p-4 border top-[130px] sticky">
            <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
            <ul className="flex flex-col">
              <li className="flex justify-between border-b pb-2 mb-2">
                <b className="font-semibold">Total Items</b>
                <span className="text-orange-500 text-lg font-semibold">{cart.products.length < 9 ? "0" + cart.products.length : cart.products.length}</span>
              </li>
              <li className="flex justify-between">
                <b className="font-semibold">Total Price</b>
                <span className="text-orange-500 text-lg font-semibold">${cart.totalPrice && cart.totalPrice.toFixed(0)}</span>
              </li>
            </ul>
            <Button link={cart.products.length < 1 ? "" : !auth ? "/login" : "/checkout"} className="mt-4 w-full" text="Checkout" onClick={handleCartEmpty}/>
            <Button onClick={handleDeleteAllProducts} className="mt-2 bg-transparent text-red-500 pb-0 pl-0 pr-0 pt-0 w-full" text="Remove all product"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;