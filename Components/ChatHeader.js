import { ArrowRight } from "lucide-react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Link from "next/link";

export default function ChatHeader({ name, avatar }) {
  return (
    <div className="flex items-center gap-4 p-3 bg-slate-900 border-b border-slate-800 sticky top-0 z-10">
      {/* Profile Info */}
      <img
        src={avatar}
        alt={name}
        className="w-10 h-10 rounded-full object-cover border border-slate-700"
      />
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <h2 className="text-slate-100 text-sm font-semibold">{name}</h2>
          <RiVerifiedBadgeFill className="text-blue-500 mt-1" />
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-xs text-slate-400">Online</span>
        </div>
      </div>
      <Link
        href="/"
        className="p-2 ml-auto rounded-full hover:bg-slate-800 transition"
      >
        <ArrowRight className="w-5 h-5 text-slate-300" />
      </Link>
    </div>
  );
}
