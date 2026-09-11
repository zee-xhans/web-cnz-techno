"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Mail, Sparkles } from "lucide-react";

interface CTAProps {
  onOpenConsultation?: () => void;
}

export function CTA({ onOpenConsultation }: CTAProps) {
  return (
    <section className="py-28 relative overflow-hidden bg-[#101415]">
      <div className="glow-bg-secondary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        <div className="bg-gradient-to-br from-[#5d03ca] via-[#45019a] to-[#2c0066] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-center relative reveal-on-scroll shadow-2xl border border-white/15">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px] opacity-10 pointer-events-none"></div>

          {/* Text & CTA buttons */}
          <div className="p-8 sm:p-12 md:p-16 lg:p-20 relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c8f300] bg-black/30 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-6 font-montserrat">
              <Sparkles className="w-3.5 h-3.5" /> Konsultasi & Roadmap Gratis
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.12] text-white mb-6 tracking-tighter font-montserrat">
              Siap Bangun UI dan Website Impian Anda{" "}
              <span className="text-[#c8f300] italic font-semibold text-gradient-lime">Bersama</span>{" "}
              CnZ?
            </h2>
            <p className="text-white/80 mb-10 text-lg md:text-xl leading-relaxed max-w-xl font-poppins">
              Diskusikan ide produk digital Anda bersama tim strategist kami secara gratis. Dapatkan estimasi timeline dan rekomendasi arsitektur teknologi terbaik.
            </p>

            <div className="flex flex-wrap gap-5 items-center">
              <Button
                onClick={onOpenConsultation}
                variant="primary"
                size="lg"
                className="shadow-[0_0_40px_rgba(200,243,0,0.4)] font-montserrat"
              >
                Mulai Diskusi Sekarang
              </Button>
              <a
                href="mailto:hello@cnztechno.com"
                className="flex items-center gap-3 text-white font-bold group text-base md:text-lg hover:text-[#c8f300] transition-colors font-montserrat"
              >
                <div className="w-13 h-13 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 group-hover:border-[#c8f300]/40 transition-all backdrop-blur-sm">
                  <Mail className="w-5 h-5 text-[#c8f300]" />
                </div>
                <span>hello@cnztechno.com</span>
              </a>
            </div>
          </div>

          {/* Illustration image */}
          <div className="w-full lg:w-1/2 p-8 sm:p-12 relative z-10 flex justify-center">
            <img
              alt="Final CTA Illustration"
              className="w-full max-w-md h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida/AP1WRLtfryf0S6vTfxzLoCYO6H8_yeP-s2T1rQfQD_9XYG0-Ud59vr4cmB6sVecK1IiZZxP5WIfWnpxR_RepP8Vh06KOPYkCgAdmzOTkzuH8Jnd148iKZHJrWJVQxeK22ckTX2aY6GjHf3Dro89VD-AdfNPxOOA5qdXYuuwhlMX9L3lsMpE4CED6x87FkE1516o3ron1Zg9jy100rXzDWwSmt2Zm0JQ2Grtfc_SqI9be_zfUGYRWW0ek2DFVdE3Q"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
