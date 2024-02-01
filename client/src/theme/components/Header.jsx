import React from "react";
import {useSelector} from 'react-redux';
import * as Icon from "@phosphor-icons/react";
import { Link, NavLink } from "react-router-dom";
import SearchForm from './SearchForm.jsx';
import categoriesData from '../../json_files/categories.json'

const Header = () => {
  const cartLength = useSelector(state => state.cart.products).length;
  const auth = useSelector(state => state.authentication);
  const username = auth.user ? auth.user.user.username : null;
  return (
    <header className="sticky top-0 z-10 shadow">
      <div className="bg-stone-900 py-3">
        <div className="container">
          <div className="flex justify-between items-center gap-8">
            <Link to="/" className="flex items-center">
              <h1 className="text-white text-2xl font-bold">Logo</h1>
            </Link>
            <SearchForm/>
            <div className="flex items-center space-x-4">
              <Link to="/cart" className="relative">
                <Icon.ShoppingCartSimple
                  size={24}
                  color="#fbe1cc"
                  weight="duotone"
                />
                <span className="absolute bg-orange-500 h-5 w-5 flex items-center justify-center rounded-full text-sm font-bold leading-none -top-3 -right-3">{cartLength}</span>
              </Link>
              <Link to="/wishlist" className="hover:text-gray-300">
                <Icon.Heart size={24} color="#fbe1cc" weight="duotone" />
              </Link>
              <Link to={auth.auth ? `users/${username}` : "/login"} className="hover:text-gray-300">
                <Icon.UserCircle size={24} color="#fbe1cc" weight="duotone" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container">
          <nav>
            <ul className="header_categories flex overflow-scroll">
              <li className="flex-shrink-0">
                  <NavLink
                    to="/"
                    className="nav_link text-black py-2 px-4 block transition hover:text-black hover:bg-orange-400"
                  >
                    Home
                  </NavLink>
                </li>
              {categoriesData.map((category, index) => (
                <li key={index} className="flex-shrink-0">
                  <NavLink
                    to={`categories/${category.name.toLowerCase().replace(/\ /g, "-")}`}
                    className="nav_link text-black py-2 px-4 block transition hover:text-black hover:bg-orange-400"
                  >
                    {category.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
