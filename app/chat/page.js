"use client";
import { useState } from "react";
import ChatHeader from "../../Components/ChatHeader.js";
import ChatBubble from "../../Components/ChatBubble.js";
import ChatInput from "../../Components/ChatInput.js";
import Sidebar from "../../Components/Sidebar.js";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      text: "Hey! How are you?",
      avatar: "/hitesh.jpg",
      isSender: false,
    },
    {
      text: "I’m good, just working on a new project!",
      isSender: true,
    },
  ]);

  const handleSend = (text) => {
    setMessages([...messages, { text, isSender: true }]);
  };

  return (
    <>
      <div className="grid grid-cols-12  grid-overlay h-screen">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className=" col-span-9 flex flex-col h-screen bg-gray-950">
          <ChatHeader
            name="Hitesh Choudhary"
            avatar="/hitesh.jpg"
            onBack={() => console.log("Go back")}
          />

          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((msg, i) => (
              <ChatBubble key={i} {...msg} />
            ))}
          </div>

          <ChatInput onSend={handleSend} />
        </div>
      </div>
    </>
  );
}
