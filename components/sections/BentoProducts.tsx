"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { ShoppingCart, ArrowRight, Cpu, ShieldCheck } from "lucide-react";

interface BentoProps {
  onOpenConsultation?: () => void;
}

export function BentoProducts({ onOpenConsultation }: BentoProps) {
  return (
    <section className="py-28 bg-[#101415] relative overflow-hidden">
      <div className="glow-bg top-[30%] left-[20%] opacity-25"></div>
      <div className="glow-bg-secondary bottom-[20%] right-[10%] opacity-20"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        {/* Big Promotional Banner */}
        <div className="bg-gradient-to-br from-[#c8f300] via-[#b6dd00] to-[#99bd00] rounded-[2.5rem] p-8 sm:p-14 lg:p-18 mb-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative reveal-on-scroll shadow-[0_20px_60px_rgba(200,243,0,0.25)]">
          <div className="max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#171e00] bg-black/10 px-3.5 py-1.5 rounded-full mb-4 font-montserrat">
              <Cpu className="w-3.5 h-3.5" /> Modul & Fondasi Siap Pakai
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-[#171e00] mb-6 tracking-tight font-montserrat">
              Bangun Lebih Cepat dengan <span className="italic font-semibold">Produk Digital</span> Siap Produksi
            </h2>
            <p className="text-[#171e00]/90 text-base md:text-lg mb-8 leading-relaxed font-poppins">
              Percepat peluncuran produk digital Anda dengan arsitektur web berstandar tinggi, modul pembayaran otomatis, dan UI kit dengan konversi optimal dari tim CnZ.
            </p>
            <Button
              onClick={onOpenConsultation}
              variant="dark"
              size="md"
              className="gap-3 shadow-2xl font-montserrat hover:scale-105 transition-all"
            >
              Lihat Produk & Modul Siap Pakai <ShoppingCart className="w-5 h-5" />
            </Button>
          </div>

          <div className="relative z-10 w-full md:w-1/2 flex justify-center">
            <img
              alt="Digital Product Illustration"
              className="w-full max-w-md h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida/AP1WRLudFVsmBTlRRGssGUElIMeAkcKFjUJBkobpv4K5xuE9js03U75fm4ULukwRBsDmYUK0mweutn4bwb0zm96PLkFcxiuAaknvfb8dIHOnFn7ZsWE3QDUUnrHZi2yg7eMA5cFB-LyH0xSPmbpdd4ugjyeFiI-k9e47Yf9AMZlUtmyfm48LvUP3y628Z9rRPS4Vx0gOurkS0S2DBgECtH2qNTWMmI5VdbdwTL1XDFi9ZR3emmuwnV_aPDqTGQQl"
            />
          </div>

          {/* Decorative Blur */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Card 1 (Span 2) */}
          <GlassCard className="md:col-span-2 p-8 lg:p-10 reveal-on-scroll hover:border-[#c8f300]/40 transition-all flex flex-col justify-between group card-spotlight">
            <div className="overflow-hidden rounded-xl mb-6 border border-white/5 relative">
              <img
                alt="Technical SEO & Performance Dashboard"
                className="w-full h-auto object-cover aspect-[2/1] group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida/AP1WRLtLGxXQY0c9I7BbaniHKRYKYdUSqmjf9D0ne5I7GUKrASMXX6qUaEMhknjuY7n3aM4NMq-CxWjfdEy3BAQIP-4L6ne2F0av9iKyDBt6oRPvxQGdDuI6wbiz_MmwxuA2T4bnLfWxV6nc09MGNsBLUuZTmFavhKDBMwB9BW1B6P9jAVBSCYUNULhqZGOIl2gjj9JSg1xCkCqaLnAHRHAyAm-J3graT3FNqj1dRbtGxo3lVpIXqXS_8eUCM5In"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-[#c8f300] transition-colors font-montserrat">
                  Technical SEO & Monitoring Engine
                </h4>
                <ArrowRight className="w-5 h-5 text-[#c8f300] group-hover:translate-x-1.5 transition-transform" />
              </div>
              <p className="text-[#c5c9ac] text-base md:text-lg font-poppins">
                Pemantauan real-time untuk performa pencarian Google, metrik kecepatan Core Web Vitals, dan indeks halaman secara otomatis.
              </p>
            </div>
          </GlassCard>

          {/* Card 2 (Span 1) */}
          <GlassCard
            className="md:col-span-1 p-8 lg:p-10 reveal-on-scroll hover:border-[#c8f300]/40 transition-all flex flex-col justify-between group card-spotlight"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="overflow-hidden rounded-xl mb-6 border border-white/5 relative">
              <img
                alt="E-commerce UI Kit"
                className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida/AP1WRLstYwAilPAGpT1RuVaF3xGDr3X0XrJfj9eGdyNehjkUnVKZVpVf-6on6lARvgdgAZrc_m7yEJ_AHRCWd2MdMc6eamo74pB4v4Vwt3ecHp2fBp9dwJTm_OhPUDx8LW4mlqyXnWWFMV_VPQsZffFCnGJq4hW9F7Jp9VBu9ARA6GQgNXAMifLUmdZ5VSdAQLwozkgCSHe80aZ05m_qZuUc8yOKJ6_GEG2Zq4qnPtCwHpg2-ZgXoNXlOJ1uZK83"
              />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-bold mb-2 text-white tracking-tight group-hover:text-[#c8f300] transition-colors font-montserrat">
                E-Commerce High-Conversion Kit
              </h4>
              <p className="text-[#c5c9ac] text-sm font-poppins">
                150+ komponen Figma dan alur checkout instan siap pakai untuk meminimalkan keranjang belanja ditinggalkan.
              </p>
            </div>
          </GlassCard>

          {/* Card 3 (Span 1 with Tech Tags) */}
          <GlassCard
            className="md:col-span-1 p-8 lg:p-10 flex flex-col justify-between reveal-on-scroll hover:border-[#c8f300]/40 transition-all group card-spotlight"
            style={{ transitionDelay: "200ms" }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-[#c8f300] transition-colors font-montserrat">
                  Tech Ecosystem
                </h4>
                <ShieldCheck className="w-5 h-5 text-[#c8f300]" />
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "Next.js 16",
                  "React 19",
                  "TypeScript",
                  "Tailwind CSS",
                  "PostgreSQL",
                  "Payment Gateway",
                  "Redis",
                  "Cloud Infrastructure",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs text-white/90 font-medium font-poppins hover:border-[#c8f300]/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-white/5">
              <img
                alt="Integration Tech Architecture"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida/AP1WRLseyD_hacs2xhXPGplyPKSifGK5-cMrbxyX04QrcZPsOYtq5JenBRS0KdrZVgXJQ7xqq4VFEpiwBZpiN1XbDiARXnT-dQv6qPTi-cAdeC3db6UyerI6AASXvSh4CYyvXkWdwRhFP5tpwT1cC6LtYkVoGCIAvLlxjIxZaKxXk0jHYPq96k-2BYokw-yzCAsT75XYQg2l38267PK9qArJe5zeUFpwdifAFSl9sMF5FDzP_bjSIGivJCJz650"
              />
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}


