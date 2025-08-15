"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ChatHeader from "../../Components/ChatHeader.js";
import ChatBubble from "../../Components/ChatBubble.js";
import ChatInput from "../../Components/ChatInput.js";
import Sidebar from "../../Components/Sidebar.js";
import TypingDots from "@/Components/TypingDots.js";
export default function ChatPage() {
  const searchParams = useSearchParams();

  const [chats, setChats] = useState(() => {
    if (typeof window !== "undefined") {
      const savedChats = localStorage.getItem("chatHistory");
      return savedChats
        ? JSON.parse(savedChats)
        : {
            hitesh: [],
            piyush: [],
          };
    }
    return {
      hitesh: [],
      piyush: [],
    };
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // State for tracking the currently selected model
  // This state updates when the user switches between chat models in the sidebar
  const [selectedModel, setSelectedModel] = useState("hitesh");

  // Set selected model based on URL parameter
  useEffect(() => {
    const character = searchParams.get("character");
    if (character === "piyush" || character === "hitesh") {
      setSelectedModel(character);
    }
  }, [searchParams]);

  // Save chat history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chats));
  }, [chats]);

  // Get the last message for each chat to display in sidebar
  const getSidebarChats = () => {
    const hiteshChat = chats.hitesh;
    const piyushChat = chats.piyush;

    return [
      {
        id: "hitesh",
        name: "Hitesh Choudhary",
        status: "Online",
        message:
          hiteshChat.length > 0 ? hiteshChat[hiteshChat.length - 1].text : null,
        img: "/hitesh.jpg",
      },
      {
        id: "piyush",
        name: "Piyush Garg",
        status: "Online",
        message:
          piyushChat.length > 0 ? piyushChat[piyushChat.length - 1].text : null,
        img: "/piyush.jpg",
      },
    ];
  };

  const modelInfo = {
    hitesh: { name: "Hitesh Choudhary", avatar: "/hitesh.jpg" },
    piyush: { name: "Piyush Garg", avatar: "/piyush.jpg" },
  };

  // Get messages for the selected model
  const messages = chats[selectedModel] || [];

  const handleChat = async () => {
    if (!message.trim()) return;

    // Add sender's message to the selected model's chat
    setChats((prev) => ({
      ...prev,
      [selectedModel]: [
        ...(prev[selectedModel] || []),
        { text: message, isSender: true },
      ],
    }));
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, model: selectedModel }),
      });

      const data = await res.json();

      // Add bot's response to the selected model's chat
      setChats((prev) => ({
        ...prev,
        [selectedModel]: [
          ...(prev[selectedModel] || []),
          {
            text: data.response,
            isSender: false,
            avatar: modelInfo[selectedModel].avatar,
          },
        ],
      }));
    } catch (error) {
      setChats((prev) => ({
        ...prev,
        [selectedModel]: [
          ...(prev[selectedModel] || []),
          {
            text: "Error: " + error.message,
            isSender: false,
            avatar: modelInfo[selectedModel].avatar,
          },
        ],
      }));
    }

    setLoading(false);
    setMessage("");
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
            <Sidebar
              selectedModel={selectedModel}
              setSelectedModel={setSelectedModel}
              chats={getSidebarChats()}
            />
          </div>
          <div className=" col-span-9 flex flex-col h-full">
            <ChatHeader
              name={modelInfo[selectedModel].name}
              avatar={modelInfo[selectedModel].avatar}
              loading={loading}
            />

            <div className="flex flex-col h-[88vh]">
              <div className="flex-1 overflow-y-auto p-4">
                {messages.map((msg, i) => (
                  <ChatBubble key={i} {...msg} />
                ))}
                {loading && (
                  <ChatBubble
                    text={<TypingDots />}
                    isSender={false}
                    avatar={modelInfo[selectedModel].avatar}
                  />
                )}
              </div>
            </div>
            <ChatInput
              message={message}
              setMessage={setMessage}
              onSend={handleChat}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
