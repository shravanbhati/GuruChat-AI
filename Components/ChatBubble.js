export default function ChatBubble({ text, avatar, isSender }) {
  return (
    <div
      className={`flex items-end gap-2 mb-4 ${
        isSender ? "flex-row-reverse" : ""
      }`}
    >
      {/* Avatar */}
      {!isSender && (
        <img
          src={avatar}
          alt="avatar"
          className="w-8 h-8 rounded-full object-cover border border-slate-700"
        />
      )}

      {/* Bubble */}
      <div
        className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
          isSender
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-slate-800 text-slate-200 rounded-bl-none"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
