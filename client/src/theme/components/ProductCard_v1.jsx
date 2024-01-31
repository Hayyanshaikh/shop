import React from 'react';
import { Link } from 'react-router-dom';
import Alert from '../../components/Alert.jsx';
import Button from '../../components/Button.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slices/CartSlice.js';

const ProductCard_v1 = ({ product, productAlert }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state=> state.cart);
  const { name, price, imageUrl, description,quantity,category } = product;

  const handleAddToCart = (product) => {
    const alertType = quantity < 1 ? "error" : "success";
    const alertMsg = quantity < 1 ? "Product is out of stock!" : "Product added to cart!";
    if (quantity < 1) {
      productAlert(alertType, alertMsg);
    } else {
      dispatch(addToCart(product));
      productAlert(alertType, alertMsg);
    }
  }
  
  return (
    <>
      <div className="bg-white shadow rounded-md overflow-hidden">
        <div className="relative pb-2/3 h-[180px] overflow-hidden">
          <img className="object-cover w-full h-full" src={imageUrl} alt={name} />
        </div>
        <div className="p-4">
          <Link to={`/categories/${category.toLowerCase().replace(/\ /g, "-")}/${name.toLowerCase().replace(/\ /g, "-")}`}>
            <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{name}</h2>
          </Link>   
          <p className="text-orange-500 font-bold text-xl">${price.toFixed(0)}</p>
          <p className="text-gray-700 mt-2 line-clamp-3">{description}</p>
          <Button onClick={()=> handleAddToCart(product)} text={quantity < 1 ? "Sold out" : "Add to cart"} className={`mt-4 w-full ${quantity < 1 ? "text-red-500 bg-stone-100" : ""}`} />
        </div>
      </div>
    </>
  );
};

export default ProductCard_v1;