import { SendHorizonal } from "lucide-react";
import { PiStarFourDuotone } from "react-icons/pi";
export default function ChatInput({ message, setMessage, onSend, loading }) {
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
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
        placeholder="Type a message..."
        className="flex-1 bg-slate-800 text-slate-100 text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSend}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-500 text-slate-100 p-2 rounded-full transition"
      >
        {loading ? (
          <PiStarFourDuotone className="w-5 h-5" />
        ) : (
          <SendHorizonal className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
