import React from "react";
import * as Icon from "@phosphor-icons/react";
import categoriesData from '../json_files/categories.json'
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="bg-stone-900 py-3">
        <div className="container">
          <div className="flex justify-between items-center gap-8">
            <div className="flex items-center">
              <h1 className="text-white text-2xl font-bold">Logo</h1>
            </div>
            <form className="flex items-center h-10 flex-1 max-w-xl ml-auto">
              <input
                type="text"
                className="bg-white flex-1 h-full rounded-tl rounded-bl pl-4 pr-3 py-2 text-black outline-0"
                placeholder="Search"
              />
              <button className="bg-orange-500 h-full rounded-tr rounded-br text-white px-3 py-2 hover:bg-orange-600">
                <Icon.MagnifyingGlass color="#000" size={18} />
              </button>
            </form>
            <div className="flex items-center space-x-4">
              <Link to="/cart" className="hover:text-gray-300">
                <Icon.ShoppingCartSimple
                  size={24}
                  color="#fbe1cc"
                  weight="duotone"
                />
              </Link>
              <Link to="/wishlist" className="hover:text-gray-300">
                <Icon.Heart size={24} color="#fbe1cc" weight="duotone" />
              </Link>
              <Link to="/login" className="hover:text-gray-300">
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
              {categoriesData.map((category, index) => (
                <li key={index} className="flex-shrink-0">
                  <NavLink
                    to={category.name.toLowerCase().replace(/\ /g, "-")}
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
