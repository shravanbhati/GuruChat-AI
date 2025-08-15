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
    <main className="bg-slate-900 text-slate-100 antialiased h-screen">
      <div className="relative overflow-hidden h-full">
        <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -left-48 -top-40 w-[720px] h-[720px] rounded-full bg-gradient-to-br from-[#6b28ff]/20 to-[#00d1b2]/6 blur-3xl opacity-60 transform-gpu"></div>
          <div className="absolute -right-48 -bottom-40 w-[560px] h-[560px] rounded-full bg-gradient-to-tr from-[#ff6bcb]/10 to-[#6b9bff]/8 blur-2xl opacity-40 transform-gpu"></div>
          <div className="absolute inset-0 z-10 grid-overlay opacity-50"></div>
        </div>
        <div className="grid grid-cols-12 h-full relative z-10">
          <div className="col-span-3">
            <Sidebar />
          </div>
          <div className=" col-span-9 flex flex-col h-full">
            <ChatHeader
              name="Hitesh Choudhary"
              avatar="/hitesh.jpg"
              onBack={() => console.log("Go back")}
            />

            <div className="flex flex-col h-[88vh]">
              <div className="flex-1 overflow-y-auto p-4">
                {messages.map((msg, i) => (
                  <ChatBubble key={i} {...msg} />
                ))}
              </div>
            </div>
            <ChatInput onSend={handleSend} />
          </div>
        </div>
      </div>
    </main>
  );
}
