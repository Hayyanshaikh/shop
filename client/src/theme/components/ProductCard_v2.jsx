import React from 'react';
import Button from '../../components/Button.jsx';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slices/CartSlice.js';

const ProductCard_v2 = ({ product, productAlert }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state=> state.cart);
  const { name, description, colors, price, imageUrl,quantity,category } = product;

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
    <div className="rounded overflow-hidden shadow bg-white">
      <figure className="h-[200px] overflow-hidden flex items-center justify-center">
      	<img className="w-full object-cover" src={imageUrl} alt={name} />
      </figure>
      <div className="px-4 pt-6 mb-4 text-center flex flex-col gap-2">
         <Link to={`/categories/${category.toLowerCase().replace(/\ /g, "-")}/${name.toLowerCase().replace(/\ /g, "-")}`}>
          <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">{name}</h2>
        </Link>   
        <p className="text-gray-500 line-clamp-3">{description}</p>
        <div className="text-gray-700 flex items-center gap-2 justify-center my-3">
        	 {colors && colors.map((color, key) => (
        	 		<span key={key} style={{background: color}} className={`p-2 inline-block rounded-full`}></span>
        	 ))}
        </div>
        <div className="flex justify-between items-center gap-5">
        	<p className="text-orange-500 font-bold text-xl">${price.toFixed(0)}</p>
        	<Button onClick={()=> handleAddToCart(product)}  text={quantity < 1 ? "Sold out" : "Add to cart"} className={`${quantity < 1 ? "text-red-500 bg-stone-100" : ""}`} />
        </div>		
      </div>
    </div>
  );
};

export default ProductCard_v2;