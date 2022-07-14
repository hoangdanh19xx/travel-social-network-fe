import React from "react";

function ChatMessage() {
  return (
    <div className="w-full h-[580px] bg-white rounded overflow-y-auto">
      <div className="px-8 py-4">
        <span className="text-center block text-[#032656] text-xs">
          Today, 5 July
        </span>
        <div>
          <div className="flex items-center gap-4 mb-2">
            <img
              src="https://images.unsplash.com/photo-1657672733372-e6c8741d2e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
              className="w-10 h-10 rounded-[50%]"
            />
            <h4 className="self-start text-[#1B2430] font-bold text-lg">
              Jennifer
              <span className="px-2 text-sm text-[#bbb]">4m</span>
            </h4>
          </div>
          <p className="w-max ml-14 mt-[-12px] p-4 text-[#fff] font-bold bg-[#aaa] rounded-r-lg rounded-bl-lg">
            Yo! I have a great new for you all. Can I use voice message?
          </p>
        </div>
        <div className="grid justify-end flex-row-reverse">
          <div className="flex items-center flex-row-reverse gap-4 mb-2">
            <img
              src="https://images.unsplash.com/photo-1657672733372-e6c8741d2e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
              className="w-10 h-10 rounded-[50%]"
            />
            <h4 className="self-start text-[#1B2430] font-bold text-lg">
              Jennifer
              <span className="px-2 text-sm text-[#bbb]">4m</span>
            </h4>
          </div>
          <p className="w-max mr-14 mt-[-8px] p-4 text-[#fff] font-bold bg-[#999] rounded-l-lg rounded-br-lg">
            Yo! I have a great new for you all. Can I use voice message?
          </p>
        </div>
        {/* <div className="flex items-center gap-2 mt-2">
          <i className="inline-block text-[orange] text-xs fa-solid fa-pencil"></i>
          <img
            src="https://images.unsplash.com/photo-1657672733372-e6c8741d2e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="avatar"
            className="w-6 h-6 rounded-[50%]"
          />
          <p className="text-white text-sm">
            <span className="text-[orange]">Parker</span> is typing...
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default ChatMessage;
