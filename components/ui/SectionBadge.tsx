import React from "react";

interface SectionBadgeProps {
  children: React.ReactNode;
  pulse?: boolean;
}

export function SectionBadge({ children, pulse = false }: SectionBadgeProps) {
  return (
    <div className="inline-flex items-center gap-3 bg-[#272a2c]/60 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/10 shadow-lg shadow-black/20">
      {pulse && (
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8f300] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c8f300]"></span>
        </span>
      )}
      <span className="text-[13px] uppercase tracking-widest text-[#c8f300] font-bold">
        {children}
      </span>
    </div>
  );
}
