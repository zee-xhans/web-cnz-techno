"use client";

import React, { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { testimonialsList } from "@/data/content";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsList.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length);
  };

  const current = testimonialsList[activeIndex];

  return (
    <section id="testimonials" className="py-28 overflow-hidden bg-[#101415] relative">
      <div className="glow-bg-secondary top-1/2 left-0 opacity-20"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Quote Card Column */}
          <div className="lg:col-span-7 reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-10 leading-tight text-white font-montserrat">
              Ulasan <span className="text-[#c8f300] italic font-semibold">Klien</span> Tentang
              CnZ
            </h2>

            <GlassCard className="p-8 md:p-12 relative border-white/10 hover:border-white/20 transition-all min-h-[380px] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <Quote className="w-10 h-10 text-[#c8f300] opacity-75" />
                  <span className="text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-[#c8f300]/10 text-[#c8f300] border border-[#c8f300]/20 font-montserrat">
                    {current.projectType}
                  </span>
                </div>

                <p className="text-xl md:text-2xl italic text-white/95 mb-8 leading-relaxed font-normal font-poppins">
                  "{current.quote}"
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#c8f300]/50 bg-[#14181b] flex items-center justify-center shrink-0 shadow-lg relative">
                    {current.avatarImage ? (
                      <img
                        src={current.avatarImage}
                        alt={current.author}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="font-bold text-[#c8f300] text-base font-montserrat">
                        {current.avatar}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-lg text-white font-montserrat">{current.author}</p>
                    <p className="text-[#c5c9ac] text-xs uppercase tracking-widest mt-0.5 font-poppins">
                      {current.role} @ {current.company}
                    </p>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#c8f300] hover:text-[#171e00] transition-colors cursor-pointer"
                    aria-label="Ulasan Sebelumnya"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs text-[#c5c9ac] font-bold px-2 font-montserrat">
                    {activeIndex + 1} / {testimonialsList.length}
                  </span>
                  <button
                    onClick={nextTestimonial}
                    className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#c8f300] hover:text-[#171e00] transition-colors cursor-pointer"
                    aria-label="Ulasan Berikutnya"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Rating Score Column */}
          <div
            className="lg:col-span-5 flex flex-col items-center justify-center reveal-on-scroll"
            style={{ transitionDelay: "200ms" }}
          >
            <GlassCard className="text-center p-10 md:p-14 w-full border-white/5 flex flex-col items-center justify-center">
              <div className="text-7xl sm:text-8xl md:text-9xl font-extrabold leading-none text-[#c8f300] mb-5 tracking-tighter drop-shadow-[0_0_30px_rgba(200,243,0,0.25)] font-montserrat">
                4.9<span className="text-4xl md:text-5xl text-white/50 font-normal">/5</span>
              </div>

              {/* Star icons */}
              <div className="flex justify-center gap-2 mb-6 text-[#c8f300]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-7 h-7 fill-[#c8f300] text-[#c8f300]"
                  />
                ))}
              </div>

              <p className="text-xs sm:text-sm uppercase tracking-widest text-[#c5c9ac] font-bold font-montserrat">
                Rata-rata Kepuasan Klien
              </p>
              <span className="text-xs text-white/40 mt-2 font-poppins">
                Berdasarkan 50+ ulasan klien terverifikasi
              </span>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
