import React from "react";

function ChatDetail() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <i className="text-lg fa-brands fa-airbnb"></i>
        <h4 className="mr-auto px-6 text-[20px] font-bold">Chat Details</h4>
        <i className="block w-6 h-6 flex items-center justify-center bg-[gray] text-white rounded-[50%] cursor-pointer fa-solid fa-xmark"></i>
      </div>
      <div>
        <h6 className="text-base flex justify-between items-center mb-2">
          Members <span className="text-lg mr-auto px-2">8</span>
          <i className="fa-solid fa-angle-down"></i>
        </h6>

        <ul className="flex flex-col gap-2 items-center">
          <li className="w-full flex items-center">
            <img
              src="https://images.unsplash.com/photo-1657538191753-f6c0a8042594?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
              className="w-6 h-6 rounded-[50%]"
            />
            <h4 className="ml-3">Ingrid Krol</h4>
            <span className="inline-block ml-2 text-sm text-[orange]">
              Creator
            </span>
            <i className="block px-6 ml-auto fa-solid fa-phone"></i>
            <i className="fa-solid fa-comment"></i>
          </li>
          <li className="w-full flex items-center">
            <img
              src="https://images.unsplash.com/photo-1657538191753-f6c0a8042594?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
              className="w-6 h-6 rounded-[50%]"
            />
            <h4 className="ml-3">Ingrid Krol</h4>
            <i className="block px-6 ml-auto fa-solid fa-phone"></i>
            <i className="fa-solid fa-comment"></i>
          </li>
          <li className="w-full flex items-center">
            <img
              src="https://images.unsplash.com/photo-1657538191753-f6c0a8042594?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
              className="w-6 h-6 rounded-[50%]"
            />
            <h4 className="ml-3">Ingrid Krol</h4>
            <i className="block px-6 ml-auto fa-solid fa-phone"></i>
            <i className="fa-solid fa-comment"></i>
          </li>
        </ul>
      </div>
      <div>
        <h6 className="text-base flex justify-between items-center mb-2">
          Media <span className="text-lg mr-auto px-2">1369</span>
          <i className="fa-solid fa-angle-down"></i>
        </h6>
        <div className="flex items-center justify-between">
          <img
            src="https://images.unsplash.com/photo-1657538191753-f6c0a8042594?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="avatar"
            className="w-16 h-16 rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1657538191753-f6c0a8042594?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="avatar"
            className="w-16 h-16 rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1657538191753-f6c0a8042594?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="avatar"
            className="w-16 h-16 rounded-lg"
          />
          <span className="inline-block flex items-center justify-center bg-[gray] text-white w-16 h-16 rounded-lg">+1366</span>
        </div>
      </div>
    </div>
  );
}

export default ChatDetail;
