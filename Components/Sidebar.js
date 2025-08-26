import { BiPlus } from "react-icons/bi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Link from "next/link";

export default function Sidebar({
  selectedModel,
  setSelectedModel,
  chats,
  isMobile,
}) {
  return (
    <div className="h-screen bg-gray-800 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <Link href="/">
          <h2 className="text-lg text-amber-50 font-bold cursor-pointer">
            GuruChat AI
          </h2>
        </Link>

        <button className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold text-amber-50">
          <BiPlus />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`flex items-center p-3 hover:bg-gray-700 cursor-pointer ${
              !isMobile && selectedModel === chat.id ? "bg-gray-700" : ""
            }`}
            onClick={() => setSelectedModel(chat.id)}
          >
            <img
              src={chat.img}
              alt={chat.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <div className="flex items-center gap-1">
                <h3 className="font-semibold text-amber-50">{chat.name}</h3>
                <RiVerifiedBadgeFill className="text-blue-500 mt-1" />
              </div>
              <p className="text-sm text-gray-400 truncate">
                {chat.message
                  ? chat.message.split(" ").slice(0, 4).join(" ") +
                    (chat.message.split(" ").length > 4 ? "..." : "")
                  : `Start Chat with ${chat.name.split(" ")[0]}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
