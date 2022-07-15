import React from "react";

function ChatInput() {
  return (
    <div className="w-[800px] flex items-center bg-[#EFFFFD] p-2 rounded">
      <div className="w-full flex items-center gap-1">
        <img
          src="https://images.unsplash.com/photo-1644982654131-79f434ac0c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
          className="w-6 h-6 rounded-[50%]"
        />
        <input
          type="text"
          className="flex-1 p-2 w-full bg-transparent placeholder:text-[#42C2FF]"
          placeholder="Your message..."
        />
      </div>
      <div className="px-2 flex gap-4 cursor-pointer">
        <i className="text-[#85F4FF] fa-solid fa-microphone"></i>
        <i className="text-[#85F4FF] fa-solid fa-paperclip"></i>
        <i className="text-[#42C2FF] fa-solid fa-paper-plane"></i>
      </div>
    </div>
  );
}

export default ChatInput;
