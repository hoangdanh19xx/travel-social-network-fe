import React from "react";
import ChatSidebar from "./ChatSidebar";
import ChatWindow from "./ChatWindow";
import ChatDetail from "./ChatDetail";

// bg-gradient-to-r from-cyan-500 to-blue-400

function ChatRoom() {
  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] gap-2 p-4 bg-[#54BAB9] h-screen">
      <div>
        <ChatSidebar />
      </div>
      <div>
        <ChatWindow />
      </div>
      <div>
        <ChatDetail />
      </div>
    </div>
  );
}

export default ChatRoom;
