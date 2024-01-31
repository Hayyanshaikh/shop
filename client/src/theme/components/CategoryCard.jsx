import React from 'react';
import {Link} from 'react-router-dom'
const CategoryCard = ({ category }) => {
  const { name, imageUrl, description } = category;

  return (
    <div className="bg-white shadow rounded-md overflow-hidden">
      <div className="relative pb-2/3 h-[100px] overflow-hidden">
        <img className="object-cover w-full h-full" src={imageUrl} alt={name} />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1 break-all">{name}</h2>
        <Link to={`/categories/${name.toLowerCase().replace(/\s/g, "-")}`} className="text-orange-500 text-sm font-semibold line-clamp-1">Read More</Link>
      </div>
    </div>
  );
};

export default CategoryCard;