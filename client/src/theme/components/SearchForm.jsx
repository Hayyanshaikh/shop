import React, { useState } from "react";
import * as Icon from "@phosphor-icons/react";
import porductData from "../../json_files/products.json";
import { Link } from "react-router-dom";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    const results = mockSearchFunction(value);
    setSearchResults(results);
  };

  const mockSearchFunction = (query) => {
    if (!query) {
      return [];
    }

    const searchWords = query.toLowerCase().split(/\s+/);

    const matches = porductData.filter((product) => {
      const productTitle = product.name.toLowerCase();
      return searchWords.every((word) => productTitle.includes(word));
    });

    return matches;
  };

  const handleCloseResult = () => {
    setSearchResults([]);
    setSearchQuery("");
  };

  return (
    <div className="relative w-full max-w-md ml-auto">
      <div className="flex">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
          placeholder="Search for products"
        />
        <button className="bg-orange-500 text-white px-3 py-2 rounded-r-md hover:bg-orange-600 focus:outline-none">
          <Icon.MagnifyingGlass size={18} />
        </button>
      </div>

      {searchResults.length > 0 && (
        <div className="absolute w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-80 overflow-auto">
          <ul>
            {searchResults.map((result) => (
              <li key={result.id} onClick={handleCloseResult}>
                <Link
                  to={`/categories/${result.category
                    .toLowerCase()
                    .replace(/\ /g, "-")}/${result.name
                    .toLowerCase()
                    .replace(/\ /g, "-")}`}
                  className="block p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
                >
                  <div className="flex items-center">
                    <img
                      src={result.imageUrl}
                      alt={result.name}
                      className="w-10 h-10 rounded mr-2 object-cover"
                    />
                    <div>
                      <p className="font-semibold">{result.name}</p>
                      <p className="text-gray-500">
                        ${result.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
