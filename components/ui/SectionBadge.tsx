import React from "react";

interface SectionBadgeProps {
  children: React.ReactNode;
  pulse?: boolean;
  className?: string;
}

export function SectionBadge({ children, pulse = false, className = "" }: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 bg-[#1d2022]/80 backdrop-blur-xl px-5 py-2.5 rounded-full border border-[#c8f300]/25 shadow-lg shadow-black/30 badge-shimmer ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8f300] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c8f300] shadow-[0_0_8px_#c8f300]"></span>
        </span>
      )}
      <span className="text-[12px] sm:text-[13px] uppercase tracking-widest text-[#c8f300] font-extrabold font-montserrat">
        {children}
      </span>
    </div>
  );
}

