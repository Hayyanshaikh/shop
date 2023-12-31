import React from 'react';
import Button from '../../components/Button.jsx';
import { Link } from 'react-router-dom';

const ProductCard_v2 = ({ product }) => {
  const { name, description, colors, price, imageUrl,quantity,category } = product;

  return (
    <div className="rounded overflow-hidden shadow">
      <figure className="h-[200px] overflow-hidden flex items-center justify-center">
      	<img className="w-full object-cover" src={imageUrl} alt={name} />
      </figure>
      <div className="px-4 pt-6 mb-4 text-center flex flex-col gap-2">
         <Link to={`/${category.toLowerCase().replace(/\ /g, "-")}/${name.toLowerCase().replace(/\ /g, "-")}`}>
          <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">{name}</h2>
        </Link>   
        <p className="text-gray-500 line-clamp-3">{description}</p>
        <div className="text-gray-700 flex items-center gap-2 justify-center my-3">
        	 {colors && colors.map((color, key) => (
        	 		<span key={key} style={{background: color}} className={`p-2 inline-block rounded-full`}></span>
        	 ))}
        </div>
        <div className="flex justify-between items-center gap-5">
        	<p className="text-orange-500 font-bold text-xl">${price.toFixed(2)}</p>
        	<Button text={quantity < 1 ? "Sold out" : "Add to cart"} className={`${quantity < 1 ? "text-red-500 bg-stone-100" : ""}`} />
        </div>		
      </div>
    </div>
  );
};

export default ProductCard_v2;