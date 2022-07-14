import React from "react";
import ChatMessage from "./ChatMessage";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

function ChatWindow() {
  return (
    <div className="w-full h-full">
      <ChatHeader />
      <ChatMessage />
      <ChatInput />
    </div>
  );
}

export default ChatWindow;
