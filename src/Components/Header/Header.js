import React from "react";
import SearchBar from "../SearchBar/SearchBar";

export const Header = () => {
  return (
    <header className="w-full h-full overflow-hidden relative">
      <div className="max-w-full max-h-[32rem] relative">
        <img
          src="https://images.unsplash.com/photo-1656557164438-68a98251aa35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Mount Pilatus, Alpnach, Switzerland"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 flex justify-between items-center h-20 px-20">
        <h1 className="text-3xl font-bold text-[#CDF0EA]">
          Travel Social Network
        </h1>
        <nav>
          <ul className="flex items-center cursor-pointer">
            <li className="px-8 py-2 rounded border-2 mr-4 bg-[orange]">
              <a href="!#">Sign in</a>
            </li>
            <li className="px-8 py-2 rounded border-2 text-white">
              <a href="!#">Sign up</a>
            </li>
          </ul>
        </nav>
      </div>
      <SearchBar />
    </header>
  );
};
