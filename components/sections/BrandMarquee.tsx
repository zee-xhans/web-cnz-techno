import React from "react";
import { brandPartners } from "@/data/content";

export function BrandMarquee() {
  const fullBrands = [...brandPartners, ...brandPartners, ...brandPartners];

  return (
    <div className="py-12 bg-[#0b0f10]/80 border-y border-white/5 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 mb-6 text-center">
        <p className="text-xs uppercase tracking-widest text-[#c5c9ac]/70 font-semibold">
          Dipercaya oleh Founder, Startup, dan Perusahaan Berkembang
        </p>
      </div>

      <div className="flex relative overflow-hidden mask-fade">
        <div className="animate-marquee flex items-center gap-12 sm:gap-20">
          {fullBrands.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="text-lg sm:text-2xl font-bold tracking-tight text-white/40 hover:text-[#c8f300] transition-colors duration-300 whitespace-nowrap cursor-default flex items-center gap-2"
            >
              <span>{brand.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
