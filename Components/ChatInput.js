import { Send } from "lucide-react";
import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    onSend(message);
    setMessage("");
  };

  return (
    <div className="flex items-center gap-2 p-3 bg-slate-900 border-t border-slate-800 sticky bottom-0">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 bg-slate-800 text-slate-100 text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSend}
        className="bg-blue-600 hover:bg-blue-500 text-slate-100 p-2 rounded-full transition"
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  );
}
