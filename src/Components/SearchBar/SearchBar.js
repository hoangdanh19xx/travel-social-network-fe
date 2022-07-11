import React from "react";

function SearchBar() {
  return (
    <div className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] block p-2 border-2 w-[37rem] flex items-center">
      <input
        type="text"
        className="block p-2 bg-[transparent] flex-1 text-white"
        placeholder="Search..."
      />
      <i className="fa-solid fa-magnifying-glass text-[#eee] text-lg p-2 cursor-pointer"></i>
    </div>
  );
}

export default SearchBar;
