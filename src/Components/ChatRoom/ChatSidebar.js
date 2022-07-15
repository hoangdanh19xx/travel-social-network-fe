import React from "react";

function ChatSidebar() {
  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-between mb-4 border-2 border-[#85F4FF] p-2 rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1657683196077-96fb79d89af0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60s"
          alt="avatar"
          className="w-10 h-10 rounded-lg object-cover"
        />
        <div className="flex items-center gap-4">
          <i className="text-[#B8FFF9] fa-solid fa-comments"></i>
          <span className="text-[#EFFFFD]">All</span>
          <i className="text-[#B8FFF9] fa-solid fa-angle-down"></i>
        </div>
      </div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="flex items-center text-[#EFFFFD] font-medium text-xl">
          Messages
          <span className="inline-block w-1 h-1 bg-[#B8FFF9] rounded-full ml-2"></span>
          <i className="inline-block px-2 text-[#B8FFF9] fa-solid fa-angle-down"></i>
        </h3>
        <i className="text-[#B8FFF9] ml-auto px-4 fa-solid fa-pen-to-square"></i>
        <i className="text-[#B8FFF9] fa-solid fa-star"></i>
      </div>
      <div className="p-2 bg-[#85F4FF] flex mb-4 rounded-lg">
        <i className="text-[#42C2FF] text-xl mr-2 fa-solid fa-magnifying-glass"></i>
        <input
          className="w-full bg-transparent placeholder:text-[#42C2FF]"
          type="search"
          placeholder="Search"
        />
      </div>
      <ul className="flex flex-col gap-3">
        <li className="flex justify-between items-center p-1">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1657683196077-96fb79d89af0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
              className="w-12 h-12 rounded-full aspect-1"
            />
            <h3 className="text-[#EFFFFD] font-medium text-lg">
              Andy
              <span className="block text-xs text-[#85F4FF] mt-1">
                <i className="inline-block text-xs mr-2 fa-solid fa-pencil"></i>
                Andy is typing...
              </span>
            </h3>
          </div>
          <span className="text-sm text-[#EFFFFD]">9:32</span>
        </li>
        <li className="flex justify-between items-center p-1">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1657683196077-96fb79d89af0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
              className="w-12 h-12 rounded-full aspect-1"
            />
            <h3 className="text-[#EFFFFD] font-medium text-lg">
              Andy
              <span className="block text-xs text-[#85F4FF] mt-1">
                <i className="inline-block text-xs mr-2 fa-solid fa-pencil"></i>
                Andy is typing...
              </span>
            </h3>
          </div>
          <span className="text-sm text-[#EFFFFD]">9:32</span>
        </li>
        <li className="flex justify-between items-center p-1">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1657683196077-96fb79d89af0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
              className="w-12 h-12 rounded-full aspect-1"
            />
            <h3 className="text-[#EFFFFD] font-medium text-lg">
              Andy
              <span className="block text-xs text-[#85F4FF] mt-1">
                <i className="inline-block text-xs mr-2 fa-solid fa-pencil"></i>
                Andy is typing...
              </span>
            </h3>
          </div>
          <span className="text-sm text-[#EFFFFD]">9:32</span>
        </li>
        <li className="flex justify-between items-center p-1">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1657683196077-96fb79d89af0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
              className="w-12 h-12 rounded-full aspect-1"
            />
            <h3 className="text-[#EFFFFD] font-medium text-lg">
              Andy
              <span className="block text-xs text-[#85F4FF] mt-1">
                <i className="inline-block text-xs mr-2 fa-solid fa-pencil"></i>
                Andy is typing...
              </span>
            </h3>
          </div>
          <span className="text-sm text-[#EFFFFD]">9:32</span>
        </li>
        <li className="flex justify-between items-center p-1">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1657683196077-96fb79d89af0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
              className="w-12 h-12 rounded-full aspect-1"
            />
            <h3 className="text-[#EFFFFD] font-medium text-lg">
              Andy
              <span className="block text-xs text-[#85F4FF] mt-1">
                <i className="inline-block text-xs mr-2 fa-solid fa-pencil"></i>
                Andy is typing...
              </span>
            </h3>
          </div>
          <span className="text-sm text-[#EFFFFD]">9:32</span>
        </li>
      </ul>
    </div>
  );
}

export default ChatSidebar;
