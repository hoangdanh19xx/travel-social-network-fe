import React from "react";
import ChatSidebar from "./ChatSidebar";
import ChatWindow from "./ChatWindow";

import ChatDetail from "./ChatDetail";

function ChatRoom() {
  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] gap-2 p-4 bg-[#EAF6F6] h-screen">
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
