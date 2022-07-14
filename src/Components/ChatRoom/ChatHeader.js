import React from "react";

function ChatHeader() {
  return (
    <div className="flex w-[800px] h-10 items-center justify-between bg-[#9DD6DF] rounded px-8">
      <div className="flex items-center text-white">
        <i className="fa-solid fa-ellipsis text-4xl"></i>
        <div className="ml-3 text-xl">
          Chat <span className="text-base text-[gray]">24</span>
        </div>
      </div>
      <div className="flex items-center gap-8 text-xl">
        <i className="fa-solid fa-video text-[#3B44F6] cursor-pointer"></i>
        <i className="fa-solid fa-phone text-[#3B44F6] cursor-pointer"></i>
        <i className="fa-solid fa-image text-[#3B44F6] cursor-pointer"></i>
        <i className="fa-solid fa-file-lines text-[#3B44F6] cursor-pointer"></i>
      </div>
      <div className="flex items-center gap-1 cursor-pointer">
        <div>
          <img
            src="https://images.unsplash.com/photo-1657554987359-815499c7df43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="avatar"
            className="w-6 h-6 rounded-[50%]"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1657554987359-815499c7df43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="avatar"
            className="w-6 h-6 rounded-[50%]"
          />
        </div>
        <span className="w-6 h-6 rounded-[50%] inline-flex bg-[gray] text-xs items-center justify-center text-white">
          +6
        </span>
      </div>
    </div>
  );
}

export default ChatHeader;
