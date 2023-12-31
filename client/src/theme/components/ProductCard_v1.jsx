import React from 'react';
import Button from '../../components/Button.jsx';
import { Link } from 'react-router-dom';

const ProductCard_v1 = ({ product, customLink }) => {
  const { name, price, imageUrl, description,quantity,category } = product;

  return (
    <div className="bg-white shadow rounded-md overflow-hidden">
      <div className="relative pb-2/3 h-[180px] overflow-hidden">
        <img className="object-cover w-full h-full" src={imageUrl} alt={name} />
      </div>

      <div className="p-4">
        <Link to={`/${category.toLowerCase().replace(/\ /g, "-")}/${name.toLowerCase().replace(/\ /g, "-")}`}>
          <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{name}</h2>
        </Link>   
        <p className="text-orange-500 font-bold text-xl">${price.toFixed(2)}</p>
        <p className="text-gray-700 mt-2 line-clamp-3">{description}</p>
        <Button text={quantity < 1 ? "Sold out" : "Add to cart"} className={`mt-4 w-full ${quantity < 1 ? "text-red-500 bg-stone-100" : ""}`} />
      </div>
    </div>
  );
};

export default ProductCard_v1;