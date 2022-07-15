import React from "react";

function ChatHeader() {
  return (
    <div className="flex w-[800px] h-10 items-center justify-between shadow-sm shadow-[#B8FFF9] rounded px-8">
      <div className="flex items-center text-[#B8FFF9]">
        <i className="fa-solid fa-ellipsis text-4xl"></i>
        <div className="ml-3 text-xl">
          Chat <span className="text-base text-[#EFFFFD]">24</span>
        </div>
      </div>
      <div className="flex items-center gap-8 text-xl">
        <i className="fa-solid fa-video text-[#EFFFFD] cursor-pointer"></i>
        <i className="fa-solid fa-phone text-[#EFFFFD] cursor-pointer"></i>
        <i className="fa-solid fa-image text-[#EFFFFD] cursor-pointer"></i>
        <i className="fa-solid fa-file-lines text-[#EFFFFD] cursor-pointer"></i>
      </div>
      <div className="flex items-center gap-1 cursor-pointer">
        <div>
          <img
            src="https://images.unsplash.com/photo-1657554987359-815499c7df43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="avatar"
            className="w-6 h-6 rounded-full"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1657554987359-815499c7df43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="avatar"
            className="w-6 h-6 rounded-full"
          />
        </div>
        <span className="w-6 h-6 rounded-full inline-flex bg-[#EFFFFD] text-xs items-center justify-center text-[#42C2FF]">
          +6
        </span>
      </div>
    </div>
  );
}

export default ChatHeader;
