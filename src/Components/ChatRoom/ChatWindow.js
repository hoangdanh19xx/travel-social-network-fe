import React from "react";
import ChatMessage from "./ChatMessage";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

function ChatWindow() {
  return (
    <>
      <ChatHeader />
      <ChatMessage />
      <ChatInput />
    </>
  );
}

export default ChatWindow;
