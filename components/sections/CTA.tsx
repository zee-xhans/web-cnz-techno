"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Mail, Sparkles, Building2, ShoppingBag, ArrowRight, ShieldCheck } from "lucide-react";

interface CTAProps {
  onOpenConsultation?: () => void;
}

export function CTA({ onOpenConsultation }: CTAProps) {
  return (
    <section className="py-28 relative overflow-hidden bg-[#101415]">
      <div className="glow-bg-secondary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      <div className="glow-bg bottom-0 right-10 opacity-20"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        <div className="bg-gradient-to-br from-[#5d03ca] via-[#45019a] to-[#2c0066] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-center relative reveal-on-scroll shadow-[0_25px_70px_rgba(93,3,202,0.35)] border border-white/20">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none"></div>

          {/* Text & CTA buttons */}
          <div className="p-8 sm:p-12 md:p-16 lg:p-20 relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#c8f300] bg-black/35 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 mb-6 font-montserrat badge-shimmer">
              <Sparkles className="w-4 h-4" /> Konsultasi Strategi & Arsitektur Gratis
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.12] text-white mb-6 tracking-tight font-montserrat">
              Siap Mengembangkan <br />
              <span className="text-[#c8f300] italic font-semibold">Produk & Bisnis Digital</span> Anda?
            </h2>

            <p className="text-white/90 mb-8 text-base md:text-lg leading-relaxed max-w-xl font-poppins">
              Diskusikan visi produk digital Anda bersama tim strategist & engineer CnZ secara gratis.
              Dapatkan rekomendasi arsitektur cloud teraman, estimasi timeline, dan blueprint konversi
              penjualan.
            </p>

            {/* Quick Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 text-xs sm:text-sm text-white/90 font-poppins">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#c8f300]" />
                <span>Portal Enterprise & Otomasi Sistem</span>
              </div>
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-[#d3bbff]" />
                <span>Platform Web & Mobile Siap Skala</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#c8f300]" />
                <span>100% Hak Milik Source Code & IP</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#c8f300]" />
                <span>Respons Cepat &lt; 24 Jam</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-5 items-center">
              <Button
                onClick={onOpenConsultation}
                variant="primary"
                size="lg"
                className="shadow-[0_0_40px_rgba(200,243,0,0.45)] font-montserrat font-bold hover:scale-105 active:scale-95 transition-all gap-2"
              >
                Mulai Diskusi Sekarang <ArrowRight className="w-5 h-5" />
              </Button>
              <a
                href="mailto:hello@cnztechno.com"
                className="flex items-center gap-3 text-white font-bold group text-base md:text-lg hover:text-[#c8f300] transition-colors font-montserrat"
              >
                <div className="w-12 h-12 rounded-full border border-white/25 flex items-center justify-center group-hover:bg-white/10 group-hover:border-[#c8f300]/50 transition-all backdrop-blur-sm">
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

