import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { processSteps } from "@/data/content";

export function Process() {
  return (
    <section className="py-28 bg-[#0b0f10] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Section Header */}
        <div className="text-center mb-20 reveal-on-scroll max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white font-montserrat">
            Kenali Cara <span className="italic text-[#c8f300] font-semibold">Kerja</span> Kami
          </h2>
          <p className="text-lg md:text-xl text-[#c5c9ac] leading-relaxed">
            A streamlined, transparency-focused workflow designed for speed and quality.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-16 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent z-0"></div>

          {processSteps.map((step, index) => (
            <GlassCard
              key={step.step}
              className="relative z-10 p-8 text-center reveal-on-scroll hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center"
              style={{ transitionDelay: `${(index + 1) * 75}ms` }}
            >
              {/* Number Circle */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center font-extrabold text-2xl mx-auto mb-6 shadow-lg ${
                  step.isAccent
                    ? "bg-[#c8f300] text-[#171e00] shadow-[0_0_25px_rgba(200,243,0,0.35)]"
                    : "bg-[#1d2022]/80 text-[#c8f300] border-2 border-[#c8f300]/30 backdrop-blur-md"
                }`}
              >
                {step.step}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">{step.title}</h3>
              <p className="text-[#c5c9ac] text-base leading-relaxed">{step.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
