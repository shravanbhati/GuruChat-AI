import React from "react";
import Tag from "./Tag.js";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import Link from "next/link";

export default function ProfileCard({
  name,
  title,
  tags = [],
  avatar,
  messages = 1,
}) {
  return (
    <Link
      className="relative bg-gradient-to-b from-slate-800/60 to-slate-900/60 border border-slate-800/40 rounded-xl2 p-6 shadow-card-dark hover:shadow-glow-accent transform hover:-translate-y-1 transition duration-300 cursor-pointer"
      href="/chat"
      aria-label={`${name} profile card`}
    >
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-xl overflow-hidden ring-1 ring-slate-700/50">
          <img
            src={avatar}
            alt={`${name} avatar`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-100">{name}</h3>
          <p className="mt-1 text-slate-300 text-sm">{title}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 border-t border-slate-800/30 pt-4 flex items-center justify-between text-sm text-slate-300">
        <div className="flex items-center gap-3">
          <BiSolidMessageSquareDetail />
          <span>Tap to chat</span>
        </div>
      </div>
    </Link>
  );
}
