import React from "react";

export default function Tag({ children }) {
  return (
    <span className="px-3 py-1 text-xs font-medium bg-slate-700/40 backdrop-blur rounded-full text-slate-100/90">
      {children}
    </span>
  );
}
