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
      className="relative bg-gradient-to-b from-slate-800/60 to-slate-900/60 border border-slate-800/40 rounded-xl2 p-5 sm:p-6 shadow-card-dark hover:shadow-glow-accent transform hover:-translate-y-1 transition duration-300 cursor-pointer h-full"
      href={`/chat?character=${name.toLowerCase().split(" ")[0]}`}
      aria-label={`${name} profile card`}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden ring-1 ring-slate-700/50 flex-shrink-0">
          <img
            src={avatar}
            alt={`${name} avatar`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-slate-100 truncate">
            {name}
          </h3>
          <p className="mt-1 text-slate-300 text-sm">{title}</p>

          <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
            {tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 sm:mt-5 border-t border-slate-800/30 pt-3 sm:pt-4 flex items-center justify-between text-sm text-slate-300">
        <div className="flex items-center gap-2 sm:gap-3">
          <BiSolidMessageSquareDetail className="flex-shrink-0" />
          <span>Tap to chat</span>
        </div>
      </div>
    </Link>
  );
}
