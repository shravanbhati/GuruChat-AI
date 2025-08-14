import { BiPlus } from "react-icons/bi";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export default function Sidebar() {
  const chats = [
    {
      name: "Hitesh Choudhary",
      status: "Online",
      message: "Hey! How can I help you today?",
      img: "/hitesh.jpg",
    },
    {
      name: "Piyush Garg",
      status: "Online",
      message: "Let me know if you need assistance.",
      img: "/piyush.jpg",
    },
  ];

  return (
    <div className="h-screen bg-gray-800 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h2 className="text-lg text-amber-50 font-bold">ChatGuru AI</h2>

        <button className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold text-amber-50">
          <BiPlus />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat, index) => (
          <div
            key={index}
            className="flex items-center p-3 hover:bg-gray-700 cursor-pointer"
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
              <p className="text-sm text-gray-400">{chat.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
