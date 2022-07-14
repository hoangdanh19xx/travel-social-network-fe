import React from "react";

function ChatSidebar() {
  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-between mb-4 border-2 p-2 rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1657683196077-96fb79d89af0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60s"
          alt="avatar"
          className="w-10 h-10 rounded-lg object-cover"
        />
        <div className="flex items-center gap-4">
          <i class="fa-solid fa-comments"></i>
          <span>All</span>
          <i class="fa-solid fa-angle-down"></i>
        </div>
      </div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="flex items-center font-bold text-xl">
          Messages
          <span className="inline-block w-1 h-1 bg-[orange] rounded-full ml-2"></span>
          <i className="inline-block px-2 text-[orange] fa-solid fa-angle-down"></i>
        </h3>
        <i class="ml-auto px-4 fa-solid fa-pen-to-square"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <div className="p-2 bg-[#DAEAF1] flex mb-4">
        <i className="text-[#3AB0FF] text-xl mr-2 fa-solid fa-comment"></i>
        <input
          className="w-full bg-transparent"
          type="search"
          placeholder="Search"
        />
      </div>
      <ul className="flex flex-col gap-3">
        <li className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1657683196077-96fb79d89af0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
              className="w-12 h-12 rounded-full aspect-1"
            />
            <h3 className="font-bold text-lg">
              Andy
              <span className="block text-xs text-[#aaa] mt-1">
                <i className="inline-block text-xs mr-2 fa-solid fa-pencil"></i>
                Andy is typing...
              </span>
            </h3>
          </div>
          <span className="text-sm text-[#999]">9:32</span>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1657683196077-96fb79d89af0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
              className="w-12 h-12 rounded-full aspect-1"
            />
            <h3 className="font-bold text-lg">
              Andy
              <span className="block text-xs text-[#aaa] mt-1">
                <i className="inline-block text-xs mr-2 fa-solid fa-pencil"></i>
                Andy is typing...
              </span>
            </h3>
          </div>
          <span className="text-sm text-[#999]">9:32</span>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1657683196077-96fb79d89af0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
              className="w-12 h-12 rounded-full aspect-1"
            />
            <h3 className="font-bold text-lg">
              Andy
              <span className="block text-xs text-[#aaa] mt-1">
                <i className="inline-block text-xs mr-2 fa-solid fa-pencil"></i>
                Andy is typing...
              </span>
            </h3>
          </div>
          <span className="text-sm text-[#999]">9:32</span>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1657683196077-96fb79d89af0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
              className="w-12 h-12 rounded-full aspect-1"
            />
            <h3 className="font-bold text-lg">
              Andy
              <span className="block text-xs text-[#aaa] mt-1">
                <i className="inline-block text-xs mr-2 fa-solid fa-pencil"></i>
                Andy is typing...
              </span>
            </h3>
          </div>
          <span className="text-sm text-[#999]">9:32</span>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1657683196077-96fb79d89af0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
              className="w-12 h-12 rounded-full aspect-1"
            />
            <h3 className="font-bold text-lg">
              Andy
              <span className="block text-xs text-[#aaa] mt-1">
                <i className="inline-block text-xs mr-2 fa-solid fa-pencil"></i>
                Andy is typing...
              </span>
            </h3>
          </div>
          <span className="text-sm text-[#999]">9:32</span>
        </li>
      </ul>
    </div>
  );
}

export default ChatSidebar;
