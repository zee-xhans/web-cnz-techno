"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function AccordionItem({
  question,
  answer,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 text-left flex justify-between items-center group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-[#c8f300] transition-colors">
          {question}
        </span>
        <div
          className={`p-2 rounded-full border border-white/10 bg-white/5 transition-transform duration-300 ${
            isOpen ? "rotate-180 bg-[#c8f300]/10 border-[#c8f300]/30" : ""
          }`}
        >
          <ChevronDown
            className={`w-6 h-6 transition-colors ${
              isOpen ? "text-[#c8f300]" : "text-white/60 group-hover:text-white"
            }`}
          />
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 p-8 pt-0"
            : "grid-rows-[0fr] opacity-0 p-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[#c5c9ac] text-lg leading-relaxed border-t border-white/5 pt-4">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
