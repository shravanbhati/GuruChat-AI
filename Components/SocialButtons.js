import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaHashnode } from "react-icons/fa6";

export default function SocialButtons({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href="https://www.linkedin.com/in/shravanbhati"
        aria-label="LinkedIn"
        className="group w-10 h-10 rounded-full bg-slate-800/40 ring-1 ring-slate-700/40 flex items-center justify-center hover:scale-105 transition transform"
        title="LinkedIn"
      >
        <FaLinkedinIn className="w-5 h-5 text-slate-100 group-hover:opacity-90" />
      </a>

      <a
        href="https://x.com/ShravanBhatii"
        aria-label="X (Twitter)"
        className="group w-10 h-10 rounded-full bg-slate-800/40 ring-1 ring-slate-700/40 flex items-center justify-center hover:scale-105 transition transform"
        title="X"
      >
        <FaXTwitter className="w-5 h-5 text-slate-100 group-hover:opacity-90" />
      </a>

      <a
        href="https://shravanbhati.hashnode.dev"
        aria-label="Hashnode"
        className="group w-10 h-10 rounded-full bg-slate-800/40 ring-1 ring-slate-700/40 flex items-center justify-center hover:scale-105 transition transform"
        title="Hashnode"
      >
        <FaHashnode className="w-5 h-5 text-slate-100 group-hover:opacity-90" />
      </a>
    </div>
  );
}
