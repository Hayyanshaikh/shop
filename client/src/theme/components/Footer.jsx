import React from 'react';
import * as Icon from "@phosphor-icons/react";
import productData from '../../json_files/porducts.json'

const Footer = () => {
  const filterPopular = productData.filter(popular => popular.popular === true).slice(0, 2);
  return (
    <footer className="bg-gray-800 text-white pt-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-400 mb-2">Email: info@example.com</p>
          <p className="text-gray-400 mb-2">Phone: +1 123 456 7890</p>
        </div>

        <div className="w-full md:w-1/4">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="flex flex-col gap-2">
            <li><a href="#" className="hover:text-white text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-white text-gray-400">Shop</a></li>
            <li><a href="#" className="hover:text-white text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-white text-gray-400">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white text-white p-2 border border-gray-500 rounded bg-gray-100/25">
              <Icon.FacebookLogo size={20}/>
            </a>
            <a href="#" className="hover:text-white text-white p-2 border border-gray-500 rounded bg-gray-100/25">
              <Icon.TwitterLogo  size={20}/>
            </a>
            <a href="#" className="hover:text-white text-white p-2 border border-gray-500 rounded bg-gray-100/25">
              <Icon.InstagramLogo size={20}/>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
          <ul className="flex flex-col gap-2">
            {filterPopular.map((product) => (
              <li key={product.id} className="flex items-center space-x-2">
                <img src={product.imageUrl} alt={product.name} className="w-12 h-12 rounded" />
                <span className="text-md text-gray-300 font-semibold">{product.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400 py-5 border-t border-t-gray-700">
        &copy; 2023 Your E-Commerce. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;