import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchButton = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="pl-10 pr-4 p-2 border rounded-lg bg-gray-100 text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </div>
  );
};

export default SearchButton;
